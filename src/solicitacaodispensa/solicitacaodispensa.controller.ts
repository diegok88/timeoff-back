import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException, NotFoundException } from '@nestjs/common';
import { SolicitacaodispensaService } from './solicitacaodispensa.service';
import { CreateSolicitacaodispensaDto } from './dto/create-solicitacaodispensa.dto';
import { UpdateSolicitacaodispensaDto } from './dto/update-solicitacaodispensa.dto';
import { Solicitacaodispensa } from './entities/solicitacaodispensa.entity';

@Controller('solicitacaodispensa')
export class SolicitacaodispensaController {
  constructor(private readonly solicitacaodispensaService: SolicitacaodispensaService) { }

  @Post()
  create(@Body() createSolicitacaodispensaDto: CreateSolicitacaodispensaDto) {
    return this.solicitacaodispensaService.create(createSolicitacaodispensaDto);
  }

  @Get('count-by-status')
  async countByStatus(): Promise<{ ativo: number; pendente: number; recusado: number }> {
    return this.solicitacaodispensaService.countByStatus();
  }

  @Get('/usuario/:sodusu')
  async findByUsuarioId(@Param('sodusu') sodusu: number): Promise<Solicitacaodispensa[]> {
    return this.solicitacaodispensaService.findByUsuarioId(+sodusu);
  }

  @Get()
  findAll() {
    return this.solicitacaodispensaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    if (!id || isNaN(+id)) {
      throw new BadRequestException('ID inválido');
    }
    return this.solicitacaodispensaService.findOne(+id);
  }

  /* @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitacaodispensaService.findOne(+id);
  } */

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitacaodispensaDto: UpdateSolicitacaodispensaDto) {
    return this.solicitacaodispensaService.update(+id, updateSolicitacaodispensaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacaodispensaService.remove(+id);
  }
}
