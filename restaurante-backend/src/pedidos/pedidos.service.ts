import { Injectable, NotFoundException, BadRequestException, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido, EstadoPedido } from './pedido.entity';
import { PedidoItem } from './pedido-item.entity';
import { CreatePedidoDto } from './create-pedido.dto';
import { UpdatePedidoDto } from './update-pedido.dto';
import { MesasService } from '../mesas/mesas.service';
import { PlatosService } from '../platos/platos.service';
import { EstadoMesa } from '../mesas/mesa.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(PedidoItem)
    private readonly pedidoItemRepository: Repository<PedidoItem>,
    @Inject(forwardRef(() => MesasService))
    private readonly mesasService: MesasService,
    private readonly platosService: PlatosService,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const mesa = await this.mesasService.findOne(createPedidoDto.mesaId);
    if (mesa.estado === EstadoMesa.RESERVADA) {
      throw new BadRequestException('No se puede crear un pedido para una mesa reservada');
    }

    let total = 0;
    const pedidoItems: PedidoItem[] = [];

    for (const itemDto of createPedidoDto.items) {
      let plato;
      try {
        plato = await this.platosService.findOne(itemDto.platoId);
      } catch (e) {
        throw new BadRequestException(`Plato con ID ${itemDto.platoId} no existe`);
      }
      
      const subtotal = plato.precio * itemDto.cantidad;
      total += subtotal;

      const item = this.pedidoItemRepository.create({
        platoId: plato.id,
        cantidad: itemDto.cantidad,
        subtotal: subtotal,
      });
      pedidoItems.push(item);
    }

    const pedido = this.pedidoRepository.create({
      mesaId: mesa.id,
      estado: createPedidoDto.estado || EstadoPedido.PENDIENTE,
      total,
      items: pedidoItems,
    });

    const savedPedido = await this.pedidoRepository.save(pedido);

    // Cambiar estado de la mesa a ocupada automáticamente
    await this.mesasService.cambiarEstado(mesa.id, EstadoMesa.OCUPADA);

    return savedPedido;
  }

  async findAll(): Promise<Pedido[]> {
    return await this.pedidoRepository.find({ relations: { mesa: true, items: { plato: true } } });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({ 
      where: { id },
      relations: { mesa: true, items: { plato: true } } 
    });
    if (!pedido) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);
    if (updatePedidoDto.estado) {
      pedido.estado = updatePedidoDto.estado;
    }
    return await this.pedidoRepository.save(pedido);
  }

  async remove(id: number): Promise<void> {
    const pedido = await this.findOne(id);
    await this.pedidoRepository.remove(pedido);
  }

  async cambiarEstado(id: number, nuevoEstado: EstadoPedido): Promise<Pedido> {
    const pedido = await this.findOne(id);
    pedido.estado = nuevoEstado;
    return await this.pedidoRepository.save(pedido);
  }
}
