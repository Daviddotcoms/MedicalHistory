import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const patientsData = [
  {
    "name": "John Doe",
    "age": 34,
    "email": "johndoe@examplecom",
    "dni": "12345678",
    "medicalHistory": {
      "patientName": "John Doe",
      "birthdate": "1990-01-01T00:00:00.000Z",
      "bloodType": "O+",
      "emergencyContact": "123456789",
      "medicines": ["Aspirin", "Metformin"]
    }
  },
  {
    "name": "Jane Smith",
    "age": 28,
    "email": "janesmith@examplecom",
    "dni": "87654321",
    "medicalHistory": {
      "patientName": "Jane Smith",
      "birthdate": "1996-05-10T00:00:00.000Z",
      "bloodType": "A-",
      "emergencyContact": "987654321",
      "medicines": ["Ibuprofen", "Atorvastatin"]
    }
  },
  {
    "name": "Alice Johnson",
    "age": 45,
    "email": "alicejohnson@examplecom",
    "dni": "23456789",
    "medicalHistory": {
      "patientName": "Alice Johnson",
      "birthdate": "1979-07-15T00:00:00.000Z",
      "bloodType": "B+",
      "emergencyContact": "223344556",
      "medicines": ["Lisinopril", "Metoprolol"]
    }
  },
  {
    "name": "Bob Brown",
    "age": 52,
    "email": "bobbrown@examplecom",
    "dni": "34567890",
    "medicalHistory": {
      "patientName": "Bob Brown",
      "birthdate": "1972-11-22T00:00:00.000Z",
      "bloodType": "AB-",
      "emergencyContact": "998877665",
      "medicines": ["Omeprazole", "Loratadine"]
    }
  },
  {
    "name": "Charlie Davis",
    "age": 30,
    "email": "charliedavis@examplecom",
    "dni": "45678901",
    "medicalHistory": {
      "patientName": "Charlie Davis",
      "birthdate": "1994-03-18T00:00:00.000Z",
      "bloodType": "O-",
      "emergencyContact": "556677889",
      "medicines": ["Amoxicillin", "Amlodipine"]
    }
  },
  {
    "name": "Diana Evans",
    "age": 27,
    "email": "dianaevans@examplecom",
    "dni": "56789012",
    "medicalHistory": {
      "patientName": "Diana Evans",
      "birthdate": "1997-12-25T00:00:00.000Z",
      "bloodType": "A+",
      "emergencyContact": "332211445",
      "medicines": ["Metformin", "Simvastatin"]
    }
  },
  {
    "name": "Ethan Foster",
    "age": 42,
    "email": "ethanfoster@examplecom",
    "dni": "67890123",
    "medicalHistory": {
      "patientName": "Ethan Foster",
      "birthdate": "1982-05-30T00:00:00.000Z",
      "bloodType": "B-",
      "emergencyContact": "776655443",
      "medicines": ["Prednisone", "Furosemide"]
    }
  },
  {
    "name": "Fiona Green",
    "age": 36,
    "email": "fionagreen@examplecom",
    "dni": "78901234",
    "medicalHistory": {
      "patientName": "Fiona Green",
      "birthdate": "1988-09-14T00:00:00.000Z",
      "bloodType": "AB+",
      "emergencyContact": "554433221",
      "medicines": ["Levothyroxine", "Warfarin"]
    }
  },
  {
    "name": "George Harris",
    "age": 39,
    "email": "georgeharris@examplecom",
    "dni": "89012345",
    "medicalHistory": {
      "patientName": "George Harris",
      "birthdate": "1985-02-08T00:00:00.000Z",
      "bloodType": "O+",
      "emergencyContact": "665544332",
      "medicines": ["Gabapentin", "Losartan"]
    }
  },
  {
    "name": "Helen King",
    "age": 33,
    "email": "helenking@examplecom",
    "dni": "90123456",
    "medicalHistory": {
      "patientName": "Helen King",
      "birthdate": "1991-04-19T00:00:00.000Z",
      "bloodType": "A-",
      "emergencyContact": "443322110",
      "medicines": ["Clopidogrel", "Citalopram"]
    }
  },
  {
    "name": "Isaac Lee",
    "age": 31,
    "email": "isaaclee@examplecom",
    "dni": "01234567",
    "medicalHistory": {
      "patientName": "Isaac Lee",
      "birthdate": "1993-06-22T00:00:00.000Z",
      "bloodType": "B+",
      "emergencyContact": "998877554",
      "medicines": ["Montelukast", "Ranitidine"]
    }
  },
  {
    "name": "Jane Moore",
    "age": 29,
    "email": "janemoore@examplecom",
    "dni": "12345679",
    "medicalHistory": {
      "patientName": "Jane Moore",
      "birthdate": "1995-08-15T00:00:00.000Z",
      "bloodType": "AB-",
      "emergencyContact": "776655332",
      "medicines": ["Tamsulosin", "Ciprofloxacin"]
    }
  },
  {
    "name": "Kyle Nelson",
    "age": 38,
    "email": "kylenelson@examplecom",
    "dni": "23456780",
    "medicalHistory": {
      "patientName": "Kyle Nelson",
      "birthdate": "1986-10-09T00:00:00.000Z",
      "bloodType": "O-",
      "emergencyContact": "665544110",
      "medicines": ["Trazodone", "Sertraline"]
    }
  },
  {
    "name": "Laura Ortiz",
    "age": 43,
    "email": "lauraortiz@examplecom",
    "dni": "34567891",
    "medicalHistory": {
      "patientName": "Laura Ortiz",
      "birthdate": "1981-01-03T00:00:00.000Z",
      "bloodType": "A+",
      "emergencyContact": "332211998",
      "medicines": ["Duloxetine", "Rosuvastatin"]
    }
  },
  {
    "name": "Michael Parker",
    "age": 40,
    "email": "michaelparker@examplecom",
    "dni": "45678902",
    "medicalHistory": {
      "patientName": "Michael Parker",
      "birthdate": "1984-04-18T00:00:00.000Z",
      "bloodType": "B-",
      "emergencyContact": "221100889",
      "medicines": ["Quetiapine", "Venlafaxine"]
    }
  },
  {
    "name": "Nancy Reed",
    "age": 47,
    "email": "nancyreed@examplecom",
    "dni": "56789013",
    "medicalHistory": {
      "patientName": "Nancy Reed",
      "birthdate": "1977-07-25T00:00:00.000Z",
      "bloodType": "AB+",
      "emergencyContact": "119988776",
      "medicines": ["Pantoprazole", "Propranolol"]
    }
  },
  {
    "name": "Oscar Scott",
    "age": 50,
    "email": "oscar.scott@examplecom",
    "dni": "67890124",
    "medicalHistory": {
      "patientName": "Oscar Scott",
      "birthdate": "1974-02-14T00:00:00.000Z",
      "bloodType": "O+",
      "emergencyContact": "889977665",
      "medicines": ["Azithromycin", "Cyclobenzaprine"]
    }
  },
  {
    "name": "Paula Taylor",
    "age": 46,
    "email": "paulataylor@examplecom",
    "dni": "78901235",
    "medicalHistory": {
      "patientName": "Paula Taylor",
      "birthdate": "1978-05-23T00:00:00.000Z",
      "bloodType": "A-",
      "emergencyContact": "554433221",
      "medicines": ["Tizanidine", "Hydrochlorothiazide"]
    }
  },
  {
    "name": "Quincy Thomas",
    "age": 41,
    "email": "quincythomas@examplecom",
    "dni": "89012346",
    "medicalHistory": {
      "patientName": "Quincy Thomas",
      "birthdate": "1983-09-29T00:00:00.000Z",
      "bloodType": "B+",
      "emergencyContact": "443322110",
      "medicines": ["Metoprolol", "Lovastatin"]
    }
  },
  {
    "name": "Rachel White",
    "age": 32,
    "email": "rachelwhite@examplecom",
    "dni": "90123457",
    "medicalHistory": {
      "patientName": "Rachel White",
      "birthdate": "1992-11-12T00:00:00.000Z",
      "bloodType": "AB-",
      "emergencyContact": "332211445",
      "medicines": ["Cetirizine", "Levofloxacin"]
    }
  },
  {
    "name": "Samuel Young",
    "age": 49,
    "email": "samuelyoung@examplecom",
    "dni": "01234578",
    "medicalHistory": {
      "patientName": "Samuel Young",
      "birthdate": "1975-06-18T00:00:00.000Z",
      "bloodType": "O-",
      "emergencyContact": "119988776",
      "medicines": ["Carbamazepine", "Clonazepam"]
    }
  }
]

async function main() {
  for (const patientData of patientsData) {
    // Crear el paciente
    const createdPatient = await prisma.patient.create({
      data: {
        name: patientData.name,
        age: patientData.age,
        email: patientData.email,
        dni: patientData.dni,
      },
    });

    // Crear el historial médico relacionado con el paciente
    await prisma.medicalHistory.create({
      data: {
        patientName: patientData.medicalHistory.patientName,
        birthdate: new Date(patientData.medicalHistory.birthdate),
        bloodType: patientData.medicalHistory.bloodType,
        emergencyContact: patientData.medicalHistory.emergencyContact,
        medicines: patientData.medicalHistory.medicines,
        id_patient: createdPatient.patientId, // Relacionar con el paciente creado
      },
    });
  }
  console.log('Patients succesfully created')
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
