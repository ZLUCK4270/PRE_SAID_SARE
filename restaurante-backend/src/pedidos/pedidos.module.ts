import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { Pedido } from './pedido.entity';
import { PedidoItem } from './pedido-item.entity';
import { MesasModule } from '../mesas/mesas.module';
import { PlatosModule } from '../platos/platos.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido, PedidoItem]),
    forwardRef(() => MesasModule),
    PlatosModule,
  ],
  controllers: [PedidosController],
  providers: [PedidosService],
  exports: [PedidosService, TypeOrmModule],
})
export class PedidosModule {}
