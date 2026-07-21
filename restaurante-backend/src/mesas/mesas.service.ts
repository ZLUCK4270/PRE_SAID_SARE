import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesa, EstadoMesa } from './mesa.entity';
import { CreateMesaDto } from './create-mesa.dto';
import { UpdateMesaDto } from './update-mesa.dto';

@Injectable()
export class MesasService {
  constructor(
    @InjectRepository(Mesa)
    private readonly mesaRepository: Repository<Mesa>,
  ) {}

  async create(createMesaDto: CreateMesaDto): Promise<Mesa> {
    const existe = await this.mesaRepository.findOneBy({ numero: createMesaDto.numero });
    if (existe) {
      throw new BadRequestException(`La mesa con número ${createMesaDto.numero} ya existe`);
    }
    const mesa = this.mesaRepository.create(createMesaDto);
    return await this.mesaRepository.save(mesa);
  }

  async findAll(): Promise<Mesa[]> {
    return await this.mesaRepository.find();
  }

  async findOne(id: number): Promise<Mesa> {
    const mesa = await this.mesaRepository.findOneBy({ id });
    if (!mesa) {
      throw new NotFoundException(`Mesa con ID ${id} no encontrada`);
    }
    return mesa;
  }

  async update(id: number, updateMesaDto: UpdateMesaDto): Promise<Mesa> {
    const mesa = await this.findOne(id);
    if (updateMesaDto.numero && updateMesaDto.numero !== mesa.numero) {
      const existe = await this.mesaRepository.findOneBy({ numero: updateMesaDto.numero });
      if (existe) throw new BadRequestException(`La mesa con número ${updateMesaDto.numero} ya existe`);
    }
    const updated = Object.assign(mesa, updateMesaDto);
    return await this.mesaRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const mesa = await this.findOne(id);
    await this.mesaRepository.remove(mesa);
  }

  async cambiarEstado(id: number, nuevoEstado: EstadoMesa): Promise<Mesa> {
    const mesa = await this.findOne(id);
    mesa.estado = nuevoEstado;
    return await this.mesaRepository.save(mesa);
  }
}
