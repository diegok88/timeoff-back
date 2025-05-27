import { PartialType } from '@nestjs/mapped-types';
import { CreateObservacaosolicitacaoDto } from './create-observacaosolicitacao.dto';

export class UpdateObservacaosolicitacaoDto extends PartialType(CreateObservacaosolicitacaoDto) {}
