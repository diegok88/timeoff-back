import { Test, TestingModule } from '@nestjs/testing';
import { ObservacaosolicitacaoController } from './observacaosolicitacao.controller';
import { ObservacaosolicitacaoService } from './observacaosolicitacao.service';

describe('ObservacaosolicitacaoController', () => {
  let controller: ObservacaosolicitacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObservacaosolicitacaoController],
      providers: [ObservacaosolicitacaoService],
    }).compile();

    controller = module.get<ObservacaosolicitacaoController>(ObservacaosolicitacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
