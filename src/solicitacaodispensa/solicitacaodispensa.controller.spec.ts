import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaodispensaController } from './solicitacaodispensa.controller';
import { SolicitacaodispensaService } from './solicitacaodispensa.service';

describe('SolicitacaodispensaController', () => {
  let controller: SolicitacaodispensaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitacaodispensaController],
      providers: [SolicitacaodispensaService],
    }).compile();

    controller = module.get<SolicitacaodispensaController>(SolicitacaodispensaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
