import { Injectable } from '@nestjs/common';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MedicalHistoryService {
  constructor(private prisma: PrismaService) {}

  async createMedicalHistory(createMedicalHistoryDto: CreateMedicalHistoryDto) {
    return await this.prisma.medicalHistory.create({
      data: createMedicalHistoryDto,
    })
  }

  async findAllMedicalHistories() {
    return await this.prisma.medicalHistory.findMany({
      where: {medicalId: {not: 0}}
    });
  }

  async findOneMedicalHistory(medicalId: number) {
    return await this.prisma.medicalHistory.findUnique({
      where: {medicalId}
    })
  }

  async updateMedicalHistory(medicalId: number, updateMedicalHistoryDto: UpdateMedicalHistoryDto) {
    return await this.prisma.medicalHistory.update({
      where: {medicalId},
      data: updateMedicalHistoryDto
    })
  }

  async deleteMedicalHistory(medicalId: number) {
    return await this.prisma.medicalHistory.delete({
      where: {medicalId}
    })
  }
}
