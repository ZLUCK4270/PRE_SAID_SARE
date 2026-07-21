import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ComandasService } from './comandas.service';
import { CreateComandaDto } from './create-comanda.dto';
import { UpdateComandaDto } from './update-comanda.dto';

@Controller('comandas')
export class ComandasController {
  constructor(private readonly comandasService: ComandasService) {}

  @Post()
  create(@Body() createComandaDto: CreateComandaDto) {
    return this.comandasService.create(createComandaDto);
  }

  @Get()
  findAll() {
    return this.comandasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.comandasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateComandaDto: UpdateComandaDto) {
    return this.comandasService.update(id, updateComandaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.comandasService.remove(id);
  }
}
