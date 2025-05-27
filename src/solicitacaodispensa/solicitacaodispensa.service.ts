import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSolicitacaodispensaDto } from './dto/create-solicitacaodispensa.dto';
import { UpdateSolicitacaodispensaDto } from './dto/update-solicitacaodispensa.dto';
import { PrismaService } from 'prisma/prisma.service';
import { Solicitacaodispensa } from './entities/solicitacaodispensa.entity';

@Injectable()
export class SolicitacaodispensaService {
  constructor(private prisma: PrismaService) { }

  private mapToEntity(solicitacao: any): Solicitacaodispensa {
    return {
      sodide: solicitacao.sodide,
      sodusu: solicitacao.sodusu,
      sodsup: solicitacao.sodsup,
      soddat: solicitacao.soddat,
      sodtip: solicitacao.sodtip,
      sodqtd: solicitacao.sodqtd,
      soddti: solicitacao.soddti,
      soddtt: solicitacao.soddtt,
      sodsta: solicitacao.sodsta,
    }
  }

  async create(createSolicitacaodispensaDto: CreateSolicitacaodispensaDto): Promise<Solicitacaodispensa> {
    const solicitacao = await this.prisma.solicitacaoDispensa.create({
      data: createSolicitacaodispensaDto,
    })
    return this.mapToEntity(solicitacao);
  }

  async findAll(): Promise<Solicitacaodispensa[]> {
    const solicitacao = await this.prisma.solicitacaoDispensa.findMany();
    return solicitacao.map((solicitacao) => this.mapToEntity(solicitacao));
  }

  async findOne(sodide: number): Promise<Solicitacaodispensa> {
    const solicitacao = await this.prisma.solicitacaoDispensa.findUnique({
      where: { sodide }
    })
    if (!solicitacao) {
      throw new NotFoundException(`Solicitação com ID ${sodide} não foi encntrado`)
    }
    return this.mapToEntity(solicitacao);
  }

  async update(sodide: number, updateSolicitacaodispensaDto: UpdateSolicitacaodispensaDto): Promise<Solicitacaodispensa> {
    const solicitacao = await this.prisma.solicitacaoDispensa.update({
      where: { sodide: sodide },
      data: updateSolicitacaodispensaDto,
    })
    return this.mapToEntity(solicitacao);
  }

  async remove(sodide: number): Promise<Solicitacaodispensa> {
     const solicitacao = await this.prisma.solicitacaoDispensa.delete({
      where: { sodide: sodide }
    })
    return this.mapToEntity(solicitacao);
  }
}
