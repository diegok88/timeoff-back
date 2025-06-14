import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Empresa } from './entities/empresa.entity';


@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(empresa: any): Empresa {
    return {
      empide: empresa.empide,
      empcnp: empresa.empcnp,
      empnom: empresa.empnom,
      empend: empresa.empend,
      empcat: empresa.empcat,
      empsta: empresa.empsta,
      categoriaEmpresa: empresa.catemp ? {
        cemide: empresa.catemp.cemide,
        cemdes: empresa.catemp.cemdes,
        cemsta: empresa.catemp.cemsta,
      } : undefined,
    }
  }

  async create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa> {
    const empresa = await this.prisma.empresa.create({
      data: createEmpresaDto,
    })
    return this.mapToEntity(empresa);
  }

  async findAll(): Promise<Empresa[]> {
    const empresa = await this.prisma.empresa.findMany();
    return empresa.map((empresa) => this.mapToEntity(empresa));
  }

  async findOne(empide: number): Promise<Empresa> {
    const empresa = await this.prisma.empresa.findUnique({
      where: { empide },
      include: {
        catemp: {
          select: {
            cemide: true,
            cemdes: true,
            cemsta: true,
          }
        }
      }
    })
    if (!empresa) {
      throw new NotFoundException(`Empresa com ID ${empide} não foi encntrado`)
    }
    return this.mapToEntity(empresa);
  }

  async findByCnpj(empcnp: string): Promise<Empresa> {
    const empresa = await this.prisma.empresa.findUnique({
      where: { empcnp }
    })
    if (!empresa) {
      throw new NotFoundException(`Empresa com ID ${empcnp} não foi encntrado`)
    }
    return this.mapToEntity(empresa)
  }

  async update(empide: number, updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa> {
    const empresa = await this.prisma.empresa.update({
      where: { empide: empide },
      data: updateEmpresaDto,
    })
    return this.mapToEntity(empresa);
  }

  async remove(empide: number): Promise<Empresa> {
    const empresa = await this.prisma.empresa.delete({
      where: { empide: empide }
    })
    return this.mapToEntity(empresa);
  }
}
