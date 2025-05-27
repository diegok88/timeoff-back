import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaEmpresaDto } from './create-categoria-empresa.dto';

export class UpdateCategoriaEmpresaDto extends PartialType(CreateCategoriaEmpresaDto) {}
