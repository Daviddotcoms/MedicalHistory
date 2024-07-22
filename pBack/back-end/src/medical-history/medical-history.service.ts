import { Injectable } from '@nestjs/common';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { writeHeapSnapshot } from 'v8';

@Injectable()
export class MedicalHistoryService {
  constructor(private prisma: PrismaService) {}

  async createMedicalHistory(createMedicalHistoryDto: CreateMedicalHistoryDto) {
    return await this.prisma.medicalHistory.create({
      data: createMedicalHistoryDto
    })
  }

  async findAllMedicalHistories() {
    return await this.prisma.medicalHistory.findMany({
      where: {id: {not: 0}}
    });
  }

  async findOneMedicalHistory(id: number) {
    return await this.prisma.medicalHistory.findUnique({
      where: {id}
    })
  }

  async updateMedicalHistory(id: number, updateMedicalHistoryDto: UpdateMedicalHistoryDto) {
    return await this.prisma.medicalHistory.update({
      where: {id},
      data: updateMedicalHistoryDto
    })
  }

  async deleteMedicalHistory(id: number) {
    return await this.prisma.medicalHistory.delete({
      where: {id}
    })
  }
}
