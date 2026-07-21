import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comanda } from './comanda.entity';
import { CreateComandaDto } from './create-comanda.dto';
import { UpdateComandaDto } from './update-comanda.dto';
import { PedidosService } from '../pedidos/pedidos.service';

@Injectable()
export class ComandasService {
  constructor(
    @InjectRepository(Comanda)
    private readonly comandaRepository: Repository<Comanda>,
    private readonly pedidosService: PedidosService,
  ) {}

  async create(createComandaDto: CreateComandaDto): Promise<Comanda> {
    const pedido = await this.pedidosService.findOne(createComandaDto.pedidoId);
    
    const comanda = this.comandaRepository.create({
      pedidoId: pedido.id,
    });

    return await this.comandaRepository.save(comanda);
  }

  async findAll(): Promise<Comanda[]> {
    return await this.comandaRepository.find({ relations: { pedido: { items: { plato: true } } } });
  }

  async findOne(id: number): Promise<Comanda> {
    const comanda = await this.comandaRepository.findOne({ 
      where: { id }, 
      relations: { pedido: { items: { plato: true } } } 
    });
    if (!comanda) {
      throw new NotFoundException(`Comanda con ID ${id} no encontrada`);
    }
    return comanda;
  }

  async update(id: number, updateComandaDto: UpdateComandaDto): Promise<Comanda> {
    const comanda = await this.findOne(id);
    const updated = Object.assign(comanda, updateComandaDto);
    return await this.comandaRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const comanda = await this.findOne(id);
    await this.comandaRepository.remove(comanda);
  }
}
