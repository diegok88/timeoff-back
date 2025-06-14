import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Usuario } from './entities/usuario.entity';


@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(usuario: any): Usuario {
    return {
      usuide: usuario.usuide,
      usucra: usuario.usucra,
      usunom: usuario.usunom,
      ususen: usuario.ususen,
      usuper: usuario.usuper,
      usuemp: usuario.usuemp,
      usudep: usuario.usudep,
      ususup: usuario.ususup,
      ususta: usuario.ususta,
    }
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = await this.prisma.usuario.create({
      data: createUsuarioDto,
    })
    return this.mapToEntity(usuario);
  }

  async findAll(): Promise<Usuario[]> {
    const usuario = await this.prisma.usuario.findMany();
    return usuario.map((usuario) => this.mapToEntity(usuario));
  }

  async findOne(usuide: number): Promise<Usuario> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { usuide }
    })
    if (!usuario) {
      throw new NotFoundException(`Perfil com ID ${usuide} não foi encntrado`)
    }
    return this.mapToEntity(usuario);
  }

  async findBySupervisor(usuper: number): Promise<Usuario[]> {
    const usuario = await this.prisma.usuario.findMany({
      where: {
        usuper: usuper
      },
    })
    return usuario.map((usuario) => this.mapToEntity(usuario));
  }

  async update(usuide: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.prisma.usuario.update({
      where: { usuide: usuide },
      data: updateUsuarioDto,
    })
    return this.mapToEntity(usuario);
  }

  async remove(usuide: number): Promise<Usuario> {
    const usuario = await this.prisma.usuario.delete({
      where: { usuide: usuide }
    })
    return this.mapToEntity(usuario);
  }
}
