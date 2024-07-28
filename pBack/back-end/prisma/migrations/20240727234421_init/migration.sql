-- CreateTable
CREATE TABLE "MedicalHistory" (
    "medicalId" SERIAL NOT NULL,
    "patientName" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "bloodType" TEXT NOT NULL,
    "emergencyContact" TEXT NOT NULL,
    "medicines" TEXT[],
    "id_patient" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MedicalHistory_pkey" PRIMARY KEY ("medicalId")
);

-- CreateTable
CREATE TABLE "Patient" (
    "patientId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "dni" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("patientId")
);

-- CreateIndex
CREATE UNIQUE INDEX "MedicalHistory_id_patient_key" ON "MedicalHistory"("id_patient");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_id_patient_fkey" FOREIGN KEY ("id_patient") REFERENCES "Patient"("patientId") ON DELETE RESTRICT ON UPDATE CASCADE;
