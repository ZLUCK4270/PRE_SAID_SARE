import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatosModule } from './platos/platos.module';
import { MesasModule } from './mesas/mesas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { TicketsModule } from './tickets/tickets.module';
import { ComandasModule } from './comandas/comandas.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        if (process.env.DATABASE_URL) {
          return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
          };
        }
        return {
          type: 'better-sqlite3',
          database: 'db.sqlite',
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: true,
        };
      },
    }),
    PlatosModule,
    MesasModule,
    PedidosModule,
    TicketsModule,
    ComandasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
