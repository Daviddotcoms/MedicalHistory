import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators, NonNullableFormBuilder } from '@angular/forms';
import {NzFormLabelComponent, NzFormItemComponent} from 'ng-zorro-antd/form'
import { MedicalHistoryService } from '../../services/medical-history.service';
import {NzNotificationService} from 'ng-zorro-antd/notification';
import {NzButtonModule} from 'ng-zorro-antd/button'
import {NzFormModule} from 'ng-zorro-antd/form'
import {NzInputModule} from 'ng-zorro-antd/input'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {NzFormControlComponent} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select'
import { Medicines } from '../../enums/medicines';
import { UpdateMedicalHistoryComponent } from '../update-medical-history/update-medical-history.component';
import { MedicalHistoryListComponent } from '../medical-history-list/medical-history-list.component';
import { Bloodtypes } from '../../enums/bloodtype';


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
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css'
})
export class MedicalHistoryComponent{

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
    patientName: ['', [required]],
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
    this.service.createMedicalHistory(this.validateForm.value).subscribe(()=>{
      this.createNotification('success', `${this.validateForm.value.patientName}${this.validateForm.value.birthdate}`, 'The medical history has been created successfully')
      this.validateForm.reset()
    })
  } else {
    Object.values(this.validateForm.controls).forEach(control => {
      if(control.invalid){
        control.markAsDirty()
        control.updateValueAndValidity()
      }
    })
  }
  location.reload()
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
