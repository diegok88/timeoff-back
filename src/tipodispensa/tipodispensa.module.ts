import { Module } from '@nestjs/common';
import { TipodispensaService } from './tipodispensa.service';
import { TipodispensaController } from './tipodispensa.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [TipodispensaController],
  providers: [TipodispensaService, PrismaService],
})
export class TipodispensaModule {}
