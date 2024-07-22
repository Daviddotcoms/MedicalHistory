import { ApiProperty } from "@nestjs/swagger";

export class CreateMedicalHistoryDto {
    @ApiProperty()
    patientName: string;

    @ApiProperty()
    birthdate: Date;

    @ApiProperty()
    bloodType: string;

    @ApiProperty()
    emergencyContact: string;

    @ApiProperty({nullable: true})
    medicines?: string[];
}