import { CategoriaEmpresa } from "@prisma/client";

export class Empresa {
    empide: number;
    empcnp: string;
    empnom: string;
    empend: string;
    empcat: number;
    empsta: string;
    categoriaEmpresa?: CategoriaEmpresa;
}
