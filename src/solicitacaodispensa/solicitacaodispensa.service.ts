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

  async countByStatus(): Promise<{ ativo: number; pendente: number; recusado: number }> {
    try {
      // Log para verificar os valores únicos de sodsta
      const statusExistentes = await this.prisma.solicitacaoDispensa.groupBy({
        by: ['sodsta'],
        _count: { _all: true },
      });
      console.log('Status encontrados no banco:', statusExistentes);

      const [ativo, pendente, recusado] = await Promise.all([
        this.prisma.solicitacaoDispensa.count({
          where: { sodsta: { equals: 'Ativo', mode: 'insensitive' } },
        }),
        this.prisma.solicitacaoDispensa.count({
          where: { sodsta: { equals: 'Pendente', mode: 'insensitive' } },
        }),
        this.prisma.solicitacaoDispensa.count({
          where: { sodsta: { equals: 'Recusado', mode: 'insensitive' } },
        }),
      ]);

      return {
        ativo,
        pendente,
        recusado,
      };
    } catch (error) {
      console.error('Erro ao contar solicitações por status:', error);
      throw new Error('Não foi possível contar as solicitações por status');
    }
  }

  async findByUsuarioId(sodusu: number): Promise<Solicitacaodispensa[]> {
  const solicitacoes = await this.prisma.solicitacaoDispensa.findMany({
    where: {
      sodusu: sodusu // Ou simplesmente: where: { sodusu }
    }
  });
  
  if (!solicitacoes || solicitacoes.length === 0) {
    throw new NotFoundException(`Nenhuma solicitação encontrada para o usuário com ID ${sodusu}`);
  }
  
  return solicitacoes.map(solicitacao => this.mapToEntity(solicitacao));
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
