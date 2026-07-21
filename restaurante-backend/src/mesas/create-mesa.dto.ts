import { IsNumber, IsEnum, Min, IsOptional } from 'class-validator';
import { EstadoMesa } from './mesa.entity';

export class CreateMesaDto {
  @IsNumber()
  @Min(1)
  numero: number;

  @IsNumber()
  @Min(1)
  capacidad: number;

  @IsEnum(EstadoMesa)
  @IsOptional()
  estado?: EstadoMesa;
}
