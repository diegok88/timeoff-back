import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObservacaosolicitacaoService } from './observacaosolicitacao.service';
import { CreateObservacaosolicitacaoDto } from './dto/create-observacaosolicitacao.dto';
import { UpdateObservacaosolicitacaoDto } from './dto/update-observacaosolicitacao.dto';

@Controller('observacaosolicitacao')
export class ObservacaosolicitacaoController {
  constructor(private readonly observacaosolicitacaoService: ObservacaosolicitacaoService) {}

  @Post()
  create(@Body() createObservacaosolicitacaoDto: CreateObservacaosolicitacaoDto) {
    return this.observacaosolicitacaoService.create(createObservacaosolicitacaoDto);
  }

  @Get()
  findAll() {
    return this.observacaosolicitacaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.observacaosolicitacaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObservacaosolicitacaoDto: UpdateObservacaosolicitacaoDto) {
    return this.observacaosolicitacaoService.update(+id, updateObservacaosolicitacaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.observacaosolicitacaoService.remove(+id);
  }
}
