import { Component } from '@angular/core';
import { CreatePatientComponent } from '../../components/patient/create-patient/create-patient.component';

@Component({
  selector: 'app-patient-page',
  standalone: true,
  imports: [CreatePatientComponent],
  templateUrl: './patient-page.component.html',
  styleUrl: './patient-page.component.css'
})
export class PatientPageComponent {

}
