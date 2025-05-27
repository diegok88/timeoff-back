import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Perfil } from '@prisma/client';

@Injectable()
export class PerfilService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(perfil: any): Perfil {
    return {
      peride: perfil.peride,
      perdes: perfil.perdes,
      persta: perfil.persta,
    }
  }

  async create(createPerfilDto: CreatePerfilDto): Promise<Perfil> {
    const perfil = await this.prisma.perfil.create({
      data: createPerfilDto,
    })
    return this.mapToEntity(perfil);
  }

  async findAll(): Promise<Perfil[]> {
    const perfil = await this.prisma.perfil.findMany();
    return perfil.map((perfil) => this.mapToEntity(perfil));
  }

  async findOne(peride: number): Promise<Perfil> {
    const perfil = await this.prisma.perfil.findUnique({
      where: { peride }
    })
    if (!perfil) {
      throw new NotFoundException(`Perfil com ID ${peride} não foi encntrado`)
    }
    return this.mapToEntity(perfil);
  }

  async update(peride: number, updatePerfilDto: UpdatePerfilDto): Promise<Perfil> {
    const perfil = await this.prisma.perfil.update({
      where: { peride: peride },
      data: updatePerfilDto,
    })
    return this.mapToEntity(perfil);
  }

  async remove(peride: number): Promise<Perfil> {
    const perfil = await this.prisma.perfil.delete({
      where: { peride: peride }
    })
    return this.mapToEntity(perfil);
  }
}
