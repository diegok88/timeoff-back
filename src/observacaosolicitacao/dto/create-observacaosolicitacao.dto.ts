import { IsNumber, IsString } from "class-validator";

export class CreateObservacaosolicitacaoDto {
    @IsString()
    obscol: string;
    @IsString()
    obsges: string;
    @IsNumber()
    obssld: number;
}
