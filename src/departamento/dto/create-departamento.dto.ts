import { IsString, Length, Matches, MinLength } from "class-validator";

export class CreateDepartamentoDto {
    @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O campo deve conter apenas letras e espaços, sem números ou caracteres especiais' })
    @MinLength(3, { message: 'O campo deve conter no minimo 3 caracteres' })
    @IsString()
    depdes: string;
    @Length(3, 9, { message: 'O campo deve conter entre 3 a 9 caracteres' })
    @IsString()
    depsta: string;
}
