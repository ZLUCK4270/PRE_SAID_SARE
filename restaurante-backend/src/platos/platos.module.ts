import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatosService } from './platos.service';
import { PlatosController } from './platos.controller';
import { Plato } from './plato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Plato])],
  controllers: [PlatosController],
  providers: [PlatosService],
  exports: [TypeOrmModule, PlatosService],
})
export class PlatosModule {}
