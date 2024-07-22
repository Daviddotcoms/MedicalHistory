import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// id          Int      @id @default(autoincrement())
//   patientName String
//   birthdate   DateTime
//   bloodType   String
//   emergencyContact String
//   medicines   String[]

async function main() {
    const post1 = await prisma.medicalHistory.create({
        data: {
            patientName: 'David Correa',
            birthdate: new Date('2015-12-12'),
            bloodType: 'A+',
            emergencyContact: '0989254331',
            medicines: ['Ibuprofen', 'Paracetamol']
        }
    })
    const post2 = await prisma.medicalHistory.create({
        data: {
            patientName: 'Lennin Simbaña',
            birthdate: new Date('2017-01-30'),
            bloodType: 'O+',
            emergencyContact: '0963929381',
            medicines: ['Tetrazepam', 'Mucosolvan']
        }
    })
    console.log({ post1, post2 })
}

main().then(async ()=> {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    process.exit(1)
})