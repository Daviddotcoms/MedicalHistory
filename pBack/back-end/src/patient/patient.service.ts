import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PatientService {

  constructor(private prisma: PrismaService) {}

  async createPatient(createPatientDto: CreatePatientDto) {
    return await this.prisma.patient.create({
      data: createPatientDto,
    })
  }

  async findAllPatients() {
    return await this.prisma.patient.findMany({
      where: {patientId: {not: 0}}
    })
  }

  async findOnePatient(patientId: number) {
    return await this.prisma.patient.findUnique({
      where: {patientId}
    })
  }

  async updatePatient(patientId: number, updatePatientDto: UpdatePatientDto) {
    return await this.prisma.patient.update({
      where: {patientId},
      data: updatePatientDto
    })
  }

  async deletePatient(patientId: number) {
    return await this.prisma.patient.delete({
      where: {patientId}
    })
  }
}
