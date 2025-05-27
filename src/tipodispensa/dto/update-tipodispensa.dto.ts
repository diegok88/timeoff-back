import { PartialType } from '@nestjs/mapped-types';
import { CreateTipodispensaDto } from './create-tipodispensa.dto';

export class UpdateTipodispensaDto extends PartialType(CreateTipodispensaDto) {}
