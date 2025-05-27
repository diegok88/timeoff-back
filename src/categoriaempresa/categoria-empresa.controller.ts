import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriaEmpresaService } from './categoria-empresa.service';
import { CreateCategoriaEmpresaDto } from './dto/create-categoria-empresa.dto';
import { UpdateCategoriaEmpresaDto } from './dto/update-categoria-empresa.dto';

@Controller('categoria-empresa')
export class CategoriaEmpresaController {
  constructor(private readonly categoriaEmpresaService: CategoriaEmpresaService) {}

  @Post()
  create(@Body() createCategoriaEmpresaDto: CreateCategoriaEmpresaDto) {
    return this.categoriaEmpresaService.create(createCategoriaEmpresaDto);
  }

  @Get()
  findAll() {
    return this.categoriaEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaEmpresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriaEmpresaDto: UpdateCategoriaEmpresaDto) {
    return this.categoriaEmpresaService.update(+id, updateCategoriaEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaEmpresaService.remove(+id);
  }
}
