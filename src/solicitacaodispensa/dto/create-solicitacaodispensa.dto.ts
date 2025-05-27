import { IsDate, IsNumber, IsString, Length } from "class-validator";

export class CreateSolicitacaodispensaDto {
    @IsNumber()
    sodusu: number;
    @IsNumber()
    sodsup: number;
    @IsDate()
    soddat: Date;
    @IsNumber()
    sodtip: number;
    @IsNumber()
    sodqtd: number;
    @IsDate()
    soddti: Date;
    @IsDate()
    soddtt: Date
    @Length(3, 9, { message: 'O campo deve conter entre 3 a 9 caracteres' })
    @IsString()
    sodsta: string;
}
