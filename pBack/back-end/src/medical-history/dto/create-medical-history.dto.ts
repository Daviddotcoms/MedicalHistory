import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsArray, IsInt, IsOptional } from 'class-validator'
export class CreateMedicalHistoryDto {
    @IsString()
    @ApiProperty()
    patientName: string;

    @IsDate()
    @ApiProperty()
    birthdate: Date;

    @IsString()
    @ApiProperty()
    bloodType: string;

    @IsString()
    @ApiProperty()
    emergencyContact: string;

    @IsArray()
    @IsOptional()
    @ApiProperty({nullable: true})
    medicines?: string[];

    @IsInt()
    @ApiProperty()
    id_patient: number;
}