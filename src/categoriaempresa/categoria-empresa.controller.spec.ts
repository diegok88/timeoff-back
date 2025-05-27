import { Test, TestingModule } from '@nestjs/testing';
import { CategoriaEmpresaController } from './categoria-empresa.controller';
import { CategoriaEmpresaService } from './categoria-empresa.service';

describe('CategoriaEmpresaController', () => {
  let controller: CategoriaEmpresaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriaEmpresaController],
      providers: [CategoriaEmpresaService],
    }).compile();

    controller = module.get<CategoriaEmpresaController>(CategoriaEmpresaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
