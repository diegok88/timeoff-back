-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "ususup" INTEGER;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_ususup_fkey" FOREIGN KEY ("ususup") REFERENCES "Usuario"("usuide") ON DELETE SET NULL ON UPDATE CASCADE;
