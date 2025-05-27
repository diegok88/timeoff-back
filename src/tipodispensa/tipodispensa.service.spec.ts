import { Test, TestingModule } from '@nestjs/testing';
import { TipodispensaService } from './tipodispensa.service';

describe('TipodispensaService', () => {
  let service: TipodispensaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipodispensaService],
    }).compile();

    service = module.get<TipodispensaService>(TipodispensaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
