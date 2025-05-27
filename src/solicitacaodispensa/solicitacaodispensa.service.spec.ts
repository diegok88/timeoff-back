import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaodispensaService } from './solicitacaodispensa.service';

describe('SolicitacaodispensaService', () => {
  let service: SolicitacaodispensaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitacaodispensaService],
    }).compile();

    service = module.get<SolicitacaodispensaService>(SolicitacaodispensaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
