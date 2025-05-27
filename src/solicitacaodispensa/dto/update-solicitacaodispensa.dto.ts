import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitacaodispensaDto } from './create-solicitacaodispensa.dto';

export class UpdateSolicitacaodispensaDto extends PartialType(CreateSolicitacaodispensaDto) {}
