-- CreateTable
CREATE TABLE "CategoriaEmpresa" (
    "cemide" SERIAL NOT NULL,
    "cemdes" TEXT NOT NULL,
    "cemsta" TEXT NOT NULL,

    CONSTRAINT "CategoriaEmpresa_pkey" PRIMARY KEY ("cemide")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "empide" SERIAL NOT NULL,
    "empcnp" TEXT NOT NULL,
    "empnom" TEXT NOT NULL,
    "empend" TEXT NOT NULL,
    "empcat" INTEGER NOT NULL,
    "empsta" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("empide")
);

-- CreateTable
CREATE TABLE "Perfil" (
    "peride" SERIAL NOT NULL,
    "perdes" TEXT NOT NULL,
    "persta" TEXT NOT NULL,

    CONSTRAINT "Perfil_pkey" PRIMARY KEY ("peride")
);

-- CreateTable
CREATE TABLE "Departamento" (
    "depide" SERIAL NOT NULL,
    "depdes" TEXT NOT NULL,
    "depsta" TEXT NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("depide")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "usuide" SERIAL NOT NULL,
    "usucra" INTEGER NOT NULL,
    "usunom" TEXT NOT NULL,
    "ususen" TEXT NOT NULL,
    "usuper" INTEGER NOT NULL,
    "usuemp" INTEGER NOT NULL,
    "usudep" INTEGER NOT NULL,
    "ususta" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("usuide")
);

-- CreateTable
CREATE TABLE "TipoDispensa" (
    "tidide" SERIAL NOT NULL,
    "tiddes" TEXT NOT NULL,
    "tidsta" TEXT NOT NULL,

    CONSTRAINT "TipoDispensa_pkey" PRIMARY KEY ("tidide")
);

-- CreateTable
CREATE TABLE "ObservacaoSolicitacao" (
    "obside" SERIAL NOT NULL,
    "obscol" TEXT NOT NULL,
    "obsges" TEXT NOT NULL,
    "obssld" INTEGER NOT NULL,

    CONSTRAINT "ObservacaoSolicitacao_pkey" PRIMARY KEY ("obside")
);

-- CreateTable
CREATE TABLE "SolicitacaoDispensa" (
    "sodide" SERIAL NOT NULL,
    "sodusu" INTEGER NOT NULL,
    "soddat" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sodtip" INTEGER NOT NULL,
    "sodqtd" INTEGER NOT NULL,
    "soddti" TIMESTAMP(3) NOT NULL,
    "soddtt" TIMESTAMP(3) NOT NULL,
    "sodsta" TEXT NOT NULL,

    CONSTRAINT "SolicitacaoDispensa_pkey" PRIMARY KEY ("sodide")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_empcnp_key" ON "Empresa"("empcnp");

-- AddForeignKey
ALTER TABLE "Empresa" ADD CONSTRAINT "Empresa_empcat_fkey" FOREIGN KEY ("empcat") REFERENCES "CategoriaEmpresa"("cemide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_usuper_fkey" FOREIGN KEY ("usuper") REFERENCES "Perfil"("peride") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_usuemp_fkey" FOREIGN KEY ("usuemp") REFERENCES "Empresa"("empide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_usudep_fkey" FOREIGN KEY ("usudep") REFERENCES "Departamento"("depide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ObservacaoSolicitacao" ADD CONSTRAINT "ObservacaoSolicitacao_obssld_fkey" FOREIGN KEY ("obssld") REFERENCES "SolicitacaoDispensa"("sodide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolicitacaoDispensa" ADD CONSTRAINT "SolicitacaoDispensa_sodusu_fkey" FOREIGN KEY ("sodusu") REFERENCES "Usuario"("usuide") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolicitacaoDispensa" ADD CONSTRAINT "SolicitacaoDispensa_sodtip_fkey" FOREIGN KEY ("sodtip") REFERENCES "TipoDispensa"("tidide") ON DELETE RESTRICT ON UPDATE CASCADE;
