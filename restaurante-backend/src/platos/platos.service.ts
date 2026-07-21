import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plato } from './plato.entity';
import { CreatePlatoDto } from './create-plato.dto';
import { UpdatePlatoDto } from './update-plato.dto';

@Injectable()
export class PlatosService {
  constructor(
    @InjectRepository(Plato)
    private readonly platoRepository: Repository<Plato>,
  ) {}

  async create(createPlatoDto: CreatePlatoDto): Promise<Plato> {
    const plato = this.platoRepository.create(createPlatoDto);
    return await this.platoRepository.save(plato);
  }

  async findAll(): Promise<Plato[]> {
    return await this.platoRepository.find();
  }

  async findOne(id: number): Promise<Plato> {
    const plato = await this.platoRepository.findOneBy({ id });
    if (!plato) {
      throw new NotFoundException(`Plato con ID ${id} no encontrado`);
    }
    return plato;
  }

  async update(id: number, updatePlatoDto: UpdatePlatoDto): Promise<Plato> {
    const plato = await this.findOne(id);
    const updated = Object.assign(plato, updatePlatoDto);
    return await this.platoRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const plato = await this.findOne(id);
    await this.platoRepository.remove(plato);
  }
}
