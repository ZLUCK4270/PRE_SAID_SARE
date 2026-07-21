import { IsNumber, IsArray, ValidateNested, IsEnum, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { EstadoPedido } from './pedido.entity';

export class PedidoItemDto {
  @IsNumber()
  platoId: number;

  @IsNumber()
  @Min(1)
  cantidad: number;
}

export class CreatePedidoDto {
  @IsNumber()
  mesaId: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PedidoItemDto)
  items: PedidoItemDto[];

  @IsEnum(EstadoPedido)
  @IsOptional()
  estado?: EstadoPedido;
}
