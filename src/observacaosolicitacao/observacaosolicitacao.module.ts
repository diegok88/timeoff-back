import { Module } from '@nestjs/common';
import { ObservacaosolicitacaoService } from './observacaosolicitacao.service';
import { ObservacaosolicitacaoController } from './observacaosolicitacao.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [ObservacaosolicitacaoController],
  providers: [ObservacaosolicitacaoService, PrismaService],
})
export class ObservacaosolicitacaoModule {}
