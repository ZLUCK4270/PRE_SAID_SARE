import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComandasService } from './comandas.service';
import { ComandasController } from './comandas.controller';
import { Comanda } from './comanda.entity';
import { PedidosModule } from '../pedidos/pedidos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comanda]),
    PedidosModule,
  ],
  controllers: [ComandasController],
  providers: [ComandasService],
})
export class ComandasModule {}
