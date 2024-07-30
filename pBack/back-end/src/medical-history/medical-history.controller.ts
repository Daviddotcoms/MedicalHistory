import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { CreateMedicalHistoryDto } from './dto/create-medical-history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical-history.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Medical History')
@Controller('medical-history')
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  @ApiOperation({summary: 'Create a new medical history'})
  @Post()
  create(@Body() createMedicalHistoryDto: CreateMedicalHistoryDto) {
    return this.medicalHistoryService.createMedicalHistory(createMedicalHistoryDto);
  }

  @ApiOperation({summary: 'Get all medical histories'})
  @Get()
  findAll() {
    return this.medicalHistoryService.findAllMedicalHistories();
  }

  @ApiOperation({summary: 'Get one medical history by his id'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalHistoryService.findOneMedicalHistory(+id);
  }

  @ApiOperation({summary: 'Update a created medical history'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalHistoryDto: UpdateMedicalHistoryDto) {
    return this.medicalHistoryService.updateMedicalHistory(+id, updateMedicalHistoryDto);
  }

  @ApiOperation({summary: 'Delete a medical history by his id'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalHistoryService.deleteMedicalHistory(+id);
  }
}
