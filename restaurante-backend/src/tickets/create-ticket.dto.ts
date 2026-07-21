import { IsNumber, Min } from 'class-validator';

export class CreateTicketDto {
  @IsNumber()
  mesaId: number;
}
