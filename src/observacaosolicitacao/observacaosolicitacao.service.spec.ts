import { Test, TestingModule } from '@nestjs/testing';
import { ObservacaosolicitacaoService } from './observacaosolicitacao.service';

describe('ObservacaosolicitacaoService', () => {
  let service: ObservacaosolicitacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObservacaosolicitacaoService],
    }).compile();

    service = module.get<ObservacaosolicitacaoService>(ObservacaosolicitacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
