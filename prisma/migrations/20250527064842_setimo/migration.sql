/*
  Warnings:

  - Added the required column `sodsup` to the `SolicitacaoDispensa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SolicitacaoDispensa" ADD COLUMN     "sodsup" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SolicitacaoDispensa" ADD CONSTRAINT "SolicitacaoDispensa_sodsup_fkey" FOREIGN KEY ("sodsup") REFERENCES "Usuario"("usuide") ON DELETE RESTRICT ON UPDATE CASCADE;
