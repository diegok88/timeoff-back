import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipodispensaService } from './tipodispensa.service';
import { CreateTipodispensaDto } from './dto/create-tipodispensa.dto';
import { UpdateTipodispensaDto } from './dto/update-tipodispensa.dto';

@Controller('tipodispensa')
export class TipodispensaController {
  constructor(private readonly tipodispensaService: TipodispensaService) {}

  @Post()
  create(@Body() createTipodispensaDto: CreateTipodispensaDto) {
    return this.tipodispensaService.create(createTipodispensaDto);
  }

  @Get()
  findAll() {
    return this.tipodispensaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipodispensaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipodispensaDto: UpdateTipodispensaDto) {
    return this.tipodispensaService.update(+id, updateTipodispensaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipodispensaService.remove(+id);
  }
}
