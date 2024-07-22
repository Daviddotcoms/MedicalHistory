import { Module } from '@nestjs/common';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [PrismaModule, MedicalHistoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
