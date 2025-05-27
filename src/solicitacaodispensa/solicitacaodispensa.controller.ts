import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitacaodispensaService } from './solicitacaodispensa.service';
import { CreateSolicitacaodispensaDto } from './dto/create-solicitacaodispensa.dto';
import { UpdateSolicitacaodispensaDto } from './dto/update-solicitacaodispensa.dto';

@Controller('solicitacaodispensa')
export class SolicitacaodispensaController {
  constructor(private readonly solicitacaodispensaService: SolicitacaodispensaService) {}

  @Post()
  create(@Body() createSolicitacaodispensaDto: CreateSolicitacaodispensaDto) {
    return this.solicitacaodispensaService.create(createSolicitacaodispensaDto);
  }

  @Get()
  findAll() {
    return this.solicitacaodispensaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitacaodispensaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitacaodispensaDto: UpdateSolicitacaodispensaDto) {
    return this.solicitacaodispensaService.update(+id, updateSolicitacaodispensaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacaodispensaService.remove(+id);
  }
}
