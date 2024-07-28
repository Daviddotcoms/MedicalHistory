// seed.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Crear un paciente con historial médico
  const patient = await prisma.patient.create({
    data: {
      name: 'John Doe',
      age: 18,
      email: 'john.doe@example.com',
      dni: '0150858181',
      medicalHistory: {
        create: {
          patientName: 'John Doe',
          birthdate: new Date('1990-01-01'),
          bloodType: 'O+',
          emergencyContact: 'Jane Doe',
          medicines: ['Aspirin', 'Ibuprofen'],
        },
      },
    },
  });

  console.log('Created patient with medical history: ', patient);

  // Crear otro paciente sin historial médico
  const anotherPatient = await prisma.patient.create({
    data: {
      name: 'Alice Smith',
      age: 25,
      email: 'alice.smith@example.com',
      dni: '0150858123',
    },
  });

  console.log('Created patient without medical history: ', anotherPatient);

  // Agregar historial médico al paciente sin historial médico
  const medicalHistory = await prisma.medicalHistory.create({
    data: {
      patientName: 'Alice Smith',
      birthdate: new Date('1985-02-15'),
      bloodType: 'A-',
      emergencyContact: 'Bob Smith',
      medicines: ['Paracetamol'],
      patient: {
        connect: {
          patientId: anotherPatient.patientId,
        },
      },
    },
  });

  console.log('Added medical history to patient: ', medicalHistory);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
