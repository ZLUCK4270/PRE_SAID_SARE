import { Injectable, NotFoundException, BadRequestException, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ticket } from './ticket.entity';
import { CreateTicketDto } from './create-ticket.dto';
import { UpdateTicketDto } from './update-ticket.dto';
import { MesasService } from '../mesas/mesas.service';
import { EstadoMesa } from '../mesas/mesa.entity';
import { PedidosService } from '../pedidos/pedidos.service';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
    @Inject(forwardRef(() => MesasService))
    private readonly mesasService: MesasService,
    private readonly pedidosService: PedidosService,
  ) {}

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const mesa = await this.mesasService.findOne(createTicketDto.mesaId);
    
    // Obtener pedidos de la mesa
    const pedidos = await this.pedidosService.findAll();
    const pedidosMesa = pedidos.filter(p => p.mesaId === mesa.id);

    const montoTotal = pedidosMesa.reduce((acc, pedido) => acc + Number(pedido.total), 0);

    const ticket = this.ticketRepository.create({
      mesaId: mesa.id,
      montoTotal,
    });

    return await this.ticketRepository.save(ticket);
  }

  async findAll(): Promise<Ticket[]> {
    return await this.ticketRepository.find({ relations: { mesa: true } });
  }

  async findOne(id: number): Promise<Ticket> {
    const ticket = await this.ticketRepository.findOne({ where: { id }, relations: { mesa: true } });
    if (!ticket) {
      throw new NotFoundException(`Ticket con ID ${id} no encontrado`);
    }
    return ticket;
  }

  async update(id: number, updateTicketDto: UpdateTicketDto): Promise<Ticket> {
    const ticket = await this.findOne(id);
    const updated = Object.assign(ticket, updateTicketDto);
    return await this.ticketRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const ticket = await this.findOne(id);
    await this.ticketRepository.remove(ticket);
  }

  async pagar(id: number, metodoPago: string): Promise<Ticket> {
    const ticket = await this.findOne(id);
    if (ticket.pagado) {
      throw new BadRequestException('El ticket ya está pagado');
    }
    ticket.pagado = true;
    ticket.metodoPago = metodoPago;
    
    const saved = await this.ticketRepository.save(ticket);
    
    await this.mesasService.cambiarEstado(ticket.mesaId, EstadoMesa.DISPONIBLE);
    
    return saved;
  }
}
