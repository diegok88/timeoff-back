import { IsNumber, IsString, Length, Matches, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsNumber()
    usucra: number;
    @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O campo deve conter apenas letras e espaços, sem números ou caracteres especiais' })
    @MinLength(3, { message: 'O campo deve conter no minimo 3 caracteres' })
    @IsString()
    usunom: string;
    @IsString()
    ususen: string;
    @IsNumber()
    usuper: number;
    @IsNumber()
    usuemp: number;
    @IsNumber()
    usudep: number;
    @IsNumber()
    ususup: number;
    @Length(3, 9, { message: 'O campo deve conter entre 3 a 9 caracteres' })
    @IsString()
    ususta: string;
}
