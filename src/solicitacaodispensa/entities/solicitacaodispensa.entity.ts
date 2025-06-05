import { Tipodispensa } from "src/tipodispensa/entities/tipodispensa.entity";

export class Solicitacaodispensa {
    sodide: number;
    sodusu: number;
    sodsup: number;
    soddat: Date;
    sodtip: number;
    sodqtd: number;
    soddti: Date;
    soddtt: Date
    sodsta: string;
    tipoDispensa?: Tipodispensa;
}
