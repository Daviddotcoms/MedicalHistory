import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsInt } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @ApiProperty()
  name: string;

  @IsInt()
  @ApiProperty()
  age: number;

  @IsEmail()
  @ApiProperty()
  email: string;

  @ApiProperty()
  dni: string;

  @IsOptional()
  @ApiProperty()
  medicalHistoryId: number;
}