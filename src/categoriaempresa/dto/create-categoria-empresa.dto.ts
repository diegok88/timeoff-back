import { IsString, Length, MinLength } from "class-validator";

export class CreateCategoriaEmpresaDto {
    @MinLength(3, {message: 'O campo deve conter no minimo 3 caracteres'})
    @IsString()
    cemdes: string;
    @Length(3,9, {message: 'O campo deve conter entre 3 a 9 caracteres'})
    @IsString()
    cemsta: string;
}