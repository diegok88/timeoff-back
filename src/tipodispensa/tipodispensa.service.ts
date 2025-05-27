import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTipodispensaDto } from './dto/create-tipodispensa.dto';
import { UpdateTipodispensaDto } from './dto/update-tipodispensa.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Tipodispensa } from './entities/tipodispensa.entity';


@Injectable()
export class TipodispensaService {
  constructor(private prisma: PrismaService) { }
  
  private mapToEntity(tipo: any): Tipodispensa {
      return {
        tidide: tipo.tidide,
        tiddes: tipo.tiddes,
        tidsta: tipo.tidsta,
      }
    }

  async create(createTipodispensaDto: CreateTipodispensaDto): Promise<Tipodispensa> {
    const tipo = await this.prisma.tipoDispensa.create({
      data: createTipodispensaDto,
    })
    return this.mapToEntity(tipo);
  }

 async findAll(): Promise<Tipodispensa[]> {
    const tipo = await this.prisma.tipoDispensa.findMany();
    return tipo.map((tipo) => this.mapToEntity(tipo));
  }

  async findOne(tidide: number): Promise<Tipodispensa> {
     const tipo = await this.prisma.tipoDispensa.findUnique({
          where: { tidide }
        })
        if (!tipo) {
          throw new NotFoundException(`Perfil com ID ${tidide} não foi encntrado`)
        }
        return this.mapToEntity(tipo);
  }

  async update(tidide: number, updateTipodispensaDto: UpdateTipodispensaDto): Promise<Tipodispensa> {
    const tipo = await this.prisma.tipoDispensa.update({
      where: { tidide: tidide },
      data: updateTipodispensaDto,
    })
    return this.mapToEntity(tipo);
  }

  async remove(tidide: number): Promise<Tipodispensa> {
    const tipo = await this.prisma.tipoDispensa.delete({
      where: { tidide: tidide }
    })
    return this.mapToEntity(tipo);
  }
}
