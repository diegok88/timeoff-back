import { Test, TestingModule } from '@nestjs/testing';
import { TipodispensaController } from './tipodispensa.controller';
import { TipodispensaService } from './tipodispensa.service';

describe('TipodispensaController', () => {
  let controller: TipodispensaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipodispensaController],
      providers: [TipodispensaService],
    }).compile();

    controller = module.get<TipodispensaController>(TipodispensaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
