import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Departamento } from './entities/departamento.entity';

@Injectable()
export class DepartamentoService {
  constructor(private prisma: PrismaService) {}

   private mapToEntity(departamento: any): Departamento{
      return {
        depide: departamento.depide,
        depdes: departamento.depdes,
        depsta: departamento.depsta,
      }
    } 

  async create(createDepartamentoDto: CreateDepartamentoDto): Promise<Departamento>{
    const departamento = await this.prisma.departamento.create({
      data: createDepartamentoDto,
    })
    return this.mapToEntity(departamento);
  }

  async findAll(): Promise<Departamento[]> {
    const departamento = await this.prisma.departamento.findMany()
    return  departamento.map((departamento) => this.mapToEntity(departamento));
  }

  async findOne(depide: number): Promise<Departamento> {
    const departamento = await this.prisma.departamento.findUnique({
          where: { depide }
        })
        if(!departamento){
          throw new NotFoundException(`O departamento com ID ${depide} não foi encntrado`)
        }
        return this.mapToEntity(departamento);
  }

  async update(depide: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<Departamento> {
     const departamento = await this.prisma.departamento.update({
      where: { depide: depide},
      data: updateDepartamentoDto,
    })
    return this.mapToEntity(departamento);
  }

  async remove(depide: number): Promise<Departamento> {
    const departamento = await this.prisma.departamento.delete({
      where: { depide: depide }
    })
    return this.mapToEntity(departamento);
  }
}
