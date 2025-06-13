import { IsNumber, IsString, Length, Matches, MinLength } from "class-validator";

export class CreateEmpresaDto {
    @Matches(/^\d+$/, { message: 'O CNPJ deve conter apenas números (sem pontos, barra ou hífen).' })
    @Length(14, 14, { message: 'O campo deve conter 18 caracteres' })
    @IsString()
    empcnp: string;
    @MinLength(3, { message: 'O campo deve conter no minimo 3 caracteres' })
    @IsString()
    @Matches(/^[a-zA-ZÀ-ÿ\s]+$/, { message: 'O campo deve conter apenas letras e espaços, sem números ou caracteres especiais' })
    empnom: string;
    @MinLength(3, { message: 'O campo deve conter no minimo 3 caracteres' })
    @IsString()
    empend: string;
    @IsNumber()
    empcat: number;
    @Length(3, 9, { message: 'O campo deve conter entre 3 a 9 caracteres' })
    @IsString()
    empsta: string;
}
