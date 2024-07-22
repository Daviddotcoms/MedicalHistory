-- CreateTable
CREATE TABLE "medicalHistory" (
    "id" SERIAL NOT NULL,
    "patientName" TEXT NOT NULL,
    "birthdate" TIMESTAMP(3) NOT NULL,
    "bloodType" TEXT NOT NULL,
    "emergencyContact" TEXT NOT NULL,
    "medicines" TEXT[],

    CONSTRAINT "medicalHistory_pkey" PRIMARY KEY ("id")
);
