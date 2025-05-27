import { Module } from '@nestjs/common';
import { SolicitacaodispensaService } from './solicitacaodispensa.service';
import { SolicitacaodispensaController } from './solicitacaodispensa.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SolicitacaodispensaController],
  providers: [SolicitacaodispensaService, PrismaService],
})
export class SolicitacaodispensaModule {}
