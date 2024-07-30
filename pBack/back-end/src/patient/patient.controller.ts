import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Patient')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @ApiOperation({summary: 'Create a new patient'})
  @Post()
  create(@Body() createPatientDto: CreatePatientDto) {
    return this.patientService.createPatient(createPatientDto);
  }

  @ApiOperation({summary: 'Get all patients'})
  @Get()
  findAll() {
    return this.patientService.findAllPatients();
  }

  @ApiOperation({summary: 'Get one patient by his id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOnePatient(+id);
  }

  @ApiOperation({summary: 'Update a created patient'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.updatePatient(+id, updatePatientDto);
  }

  @ApiOperation({summary: 'Delete a patient by his id'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.deletePatient(+id);
  }
}
