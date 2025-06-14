-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_usuemp_fkey";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "usuemp" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_usuemp_fkey" FOREIGN KEY ("usuemp") REFERENCES "Empresa"("empide") ON DELETE SET NULL ON UPDATE CASCADE;
