import { IsNumber } from 'class-validator';

export class CreateComandaDto {
  @IsNumber()
  pedidoId: number;
}
