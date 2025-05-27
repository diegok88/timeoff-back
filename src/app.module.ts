import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriaEmpresaModule } from './categoriaempresa/categoria-empresa.module';
import { EmpresaModule } from './empresa/empresa.module';
import { PerfilModule } from './perfil/perfil.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { UsuarioModule } from './usuario/usuario.module';
import { TipodispensaModule } from './tipodispensa/tipodispensa.module';
import { ObservacaosolicitacaoModule } from './observacaosolicitacao/observacaosolicitacao.module';
import { SolicitacaodispensaModule } from './solicitacaodispensa/solicitacaodispensa.module';

@Module({
  imports: [CategoriaEmpresaModule, EmpresaModule, PerfilModule, DepartamentoModule, UsuarioModule, TipodispensaModule, ObservacaosolicitacaoModule, SolicitacaodispensaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
