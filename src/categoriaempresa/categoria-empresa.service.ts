import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaEmpresaDto } from './dto/create-categoria-empresa.dto';
import { UpdateCategoriaEmpresaDto } from './dto/update-categoria-empresa.dto';
import { PrismaService } from 'prisma/prisma.service';
import { CategoriaEmpresa } from './entities/categoria-empresa.entity';


@Injectable()
export class CategoriaEmpresaService {
  constructor(private prisma: PrismaService) {}

  private mapToEntity(categoria: any): CategoriaEmpresa{
    return {
      cemide: categoria.cemide,
      cemdes: categoria.cemdes,
      cemsta: categoria.cemsta,
    }
  }

  async create(createCategoriaEmpresaDto: CreateCategoriaEmpresaDto): Promise<CategoriaEmpresa> {
    const categoria = await this.prisma.categoriaEmpresa.create({
      data: createCategoriaEmpresaDto,
    })
    return this.mapToEntity(categoria);
  }

  async findAll(): Promise<CategoriaEmpresa[]> {
    const categoria = await this.prisma.categoriaEmpresa.findMany()
    return  categoria.map((categoria) => this.mapToEntity(categoria));
  }

  async findOne(cemide: number): Promise<CategoriaEmpresa> {
    const categoria = await this.prisma.categoriaEmpresa.findUnique({
      where: { cemide }
    })
    if(!categoria){
      throw new NotFoundException(`Categoria de Empresa com ID ${cemide} não foi encntrado`)
    }
    return this.mapToEntity(categoria);
  }

  async update(cemide: number, updateCategoriaEmpresaDto: UpdateCategoriaEmpresaDto): Promise<CategoriaEmpresa> {
    const categoria = await this.prisma.categoriaEmpresa.update({
      where: { cemide: cemide},
      data: updateCategoriaEmpresaDto,
    })
    return this.mapToEntity(categoria);
  }

  async remove(cemide: number): Promise<CategoriaEmpresa> {
    const categoria = await this.prisma.categoriaEmpresa.delete({
      where: { cemide: cemide }
    })
    return this.mapToEntity(categoria);
  }
}
