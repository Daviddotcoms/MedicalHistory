import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import {NzFormLabelComponent, NzFormItemComponent} from 'ng-zorro-antd/form'
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NzButtonModule} from 'ng-zorro-antd/button'
import {NzFormModule} from 'ng-zorro-antd/form'
import {NzInputModule} from 'ng-zorro-antd/input'
import {NzFormControlComponent} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select'
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
import { BackendService } from '../../../services/backend.service';
import { PatientListComponent } from "../patient-list/patient-list.component";
import { UpdatePatientComponent } from "../update-patient/update-patient.component";
@Component({
  selector: 'app-create-patient',
  standalone: true,
  imports: [
      ReactiveFormsModule,
      NzFormModule,
      NzInputModule,
      NzButtonModule,
      NzSelectModule,
      NzInputNumberModule,
      PatientListComponent,
      UpdatePatientComponent,
      NzFormControlComponent,
      NzFormItemComponent,
      NzFormLabelComponent
],
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {

selectedPatient: any;

  constructor(
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationService,
    private service: BackendService
  ){
    const {required} = Validators;
    this.validateForm = this.fb.group({
      name: ['', [required, Validators.pattern('^[a-zA-Z ]+$')]],
      age: [0, [required, Validators.min(5), Validators.max(10)]],
      email: ['', [required, Validators.email,  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      dni: ['', [required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
    })
  }

  validateForm: FormGroup<{
    name: FormControl<string>
    age: FormControl<number>
    email: FormControl<string>
    dni: FormControl<string>
  }>

  submitCreateForm(): void {
    if(this.validateForm.invalid){
      this.createNotification('error', 'Try Again', 'The data of the patient is wrong')
    }
    if (this.validateForm.valid){
      this.service.createPatient(this.validateForm.value).subscribe(()=>{
        this.validateForm.reset()
        location.reload()
      })
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if(control.invalid){
          control.markAsDirty()
          control.updateValueAndValidity()
        }
      })
    }
  }

  createNotification(type: string, title: string, description: string): void {
    this.notification.create(
      type,
      title,
      description
    );
  }

  onPatientUpdate(): void {
    this.selectedPatient = null;
  }
  
  editPatient(medicalHistory: any): void {
    this.selectedPatient = medicalHistory;
  }
}
