import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateObservacaosolicitacaoDto } from './dto/create-observacaosolicitacao.dto';
import { UpdateObservacaosolicitacaoDto } from './dto/update-observacaosolicitacao.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Observacaosolicitacao } from './entities/observacaosolicitacao.entity';

@Injectable()
export class ObservacaosolicitacaoService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(observacao: any): Observacaosolicitacao {
    return {
      obside: observacao.obside,
      obscol: observacao.obscol,
      obsges: observacao.obsges,
      obssld: observacao.obssld,
    }
  }

  async create(createObservacaosolicitacaoDto: CreateObservacaosolicitacaoDto): Promise<Observacaosolicitacao> {
    const observacao = await this.prisma.observacaoSolicitacao.create({
      data: createObservacaosolicitacaoDto,
    })
    return this.mapToEntity(observacao);
  }

  async findAll(): Promise<Observacaosolicitacao[]> {
    const observacao = await this.prisma.observacaoSolicitacao.findMany();
    return observacao.map((observacao) => this.mapToEntity(observacao));
  }

  async findOne(obside: number): Promise<Observacaosolicitacao> {
    const observacao = await this.prisma.observacaoSolicitacao.findUnique({
      where: { obside }
    })
    if (!observacao) {
      throw new NotFoundException(`Observação com ID ${obside} não foi encntrado`)
    }
    return this.mapToEntity(observacao);
  }

  async update(obside: number, updateObservacaosolicitacaoDto: UpdateObservacaosolicitacaoDto): Promise<Observacaosolicitacao> {
    const observacao = await this.prisma.observacaoSolicitacao.update({
      where: { obside: obside },
      data: updateObservacaosolicitacaoDto,
    })
    return this.mapToEntity(observacao);
  }

  async remove(obside: number): Promise<Observacaosolicitacao> {
    const observacao = await this.prisma.observacaoSolicitacao.delete({
      where: { obside: obside }
    })
    return this.mapToEntity(observacao);
  }
}
