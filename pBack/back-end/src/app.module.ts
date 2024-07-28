import { Module } from '@nestjs/common';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { PatientController } from './patient/patient.controller';
import { PatientModule } from './patient/patient.module';


@Module({
  imports: [PrismaModule, MedicalHistoryModule, PatientModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
