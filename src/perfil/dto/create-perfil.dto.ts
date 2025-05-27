import { IsString, Length, Matches, MinLength } from "class-validator";

export class CreatePerfilDto {
    @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O campo deve conter apenas letras e espaços, sem números ou caracteres especiais' })
    @MinLength(3, { message: 'O campo deve conter no minimo 3 caracteres' })
    @IsString()
    perdes: string;
    @Length(3, 9, { message: 'O campo deve conter entre 3 a 9 caracteres' })
    @IsString()
    persta: string;
}
