import { Module } from '@nestjs/common';
import { CategoriaEmpresaService } from './categoria-empresa.service';
import { CategoriaEmpresaController } from './categoria-empresa.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [CategoriaEmpresaController],
  providers: [CategoriaEmpresaService, PrismaService],
})
export class CategoriaEmpresaModule {}
