import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import {NzFormLabelComponent, NzFormItemComponent} from 'ng-zorro-antd/form'
import { MedicalHistoryService } from '../../../services/backend.service';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NzButtonModule} from 'ng-zorro-antd/button'
import {NzFormModule} from 'ng-zorro-antd/form'
import {NzInputModule} from 'ng-zorro-antd/input'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {NzFormControlComponent} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select'
import { Medicines } from '../../../enums/medicines';
import { Bloodtypes } from '../../../enums/bloodtype';
import { MedicalHistoryListComponent } from '../medical-history-list/medical-history-list.component';
import { UpdateMedicalHistoryComponent } from '../update-medical-history/update-medical-history.component';


@Component({
  selector: 'app-medical-history',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormLabelComponent,
    NzFormItemComponent,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzFormControlComponent,
    NzSelectModule,
    UpdateMedicalHistoryComponent,
    MedicalHistoryListComponent
  ],
  templateUrl: './create-medical-history.component.html',
  styleUrl: './create-medical-history.component.css'
})
export class CreateMedicalHistoryComponent{

  medicines = Object.values(Medicines);
  bloodtypes = Object.values(Bloodtypes)
  selectedMedicalHistory: any

constructor(
  private service: MedicalHistoryService,
  private fb: NonNullableFormBuilder,
  private notification: NzNotificationService
) {
  const {required} = Validators;
  this.validateForm = this.fb.group({
    patientName: ['', [required, Validators.pattern('^[a-zA-Z ]+$')]],
    birthdate: ['', [required]],
    bloodType: ['', [required]],
    emergencyContact: ['', [required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
    medicines: [['Paracetamol']],
  });
 }

validateForm: FormGroup<{
  patientName: FormControl<string>
  birthdate: FormControl<string>
  bloodType: FormControl<string>
  emergencyContact: FormControl<string>
  medicines: FormControl<string[] | any>
}>




submitCreateForm(): void {
  if (this.validateForm.valid){
    this.createNotification('success', `${this.validateForm.value.patientName}`, 'The medical history has been created successfully')
    this.service.createMedicalHistory(this.validateForm.value).subscribe(()=>{
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

onMedicalHistoryUpdate(): void {
  this.selectedMedicalHistory = null;
}

editMedicalHistory(medicalHistory: any): void {
  this.selectedMedicalHistory = medicalHistory;
}

}
