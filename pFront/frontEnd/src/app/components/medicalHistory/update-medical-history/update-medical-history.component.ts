import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { NonNullableFormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReactiveFormsModule } from '@angular/forms';
import {NzFormLabelComponent, NzFormItemComponent} from 'ng-zorro-antd/form'
import {NzButtonModule} from 'ng-zorro-antd/button'
import {NzFormModule} from 'ng-zorro-antd/form'
import {NzInputModule} from 'ng-zorro-antd/input'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {NzFormControlComponent} from 'ng-zorro-antd/form'
import { Medicines } from '../../../enums/medicines';
import { NzSelectModule } from 'ng-zorro-antd/select';
import{NzInputNumberModule} from 'ng-zorro-antd/input-number'
import { Bloodtypes } from '../../../enums/bloodtype';

@Component({
  selector: 'app-update-medical-history',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzDatePickerModule,
    NzInputModule,
    NzFormLabelComponent,
    NzFormItemComponent, 
    NzFormControlComponent,
    NzSelectModule,
    NzInputNumberModule
  ],
  templateUrl: './update-medical-history.component.html',
  styleUrl: './update-medical-history.component.css'
})
export class UpdateMedicalHistoryComponent implements OnChanges{

  medicines = Object.values(Medicines);
  bloodtypes = Object.values(Bloodtypes)
  medicalHistoryId: number = 0;
  @Input() medicalHistory: any;
  @Output() medicalHistoryUpdated = new EventEmitter<any>();

  constructor(
    private service: BackendService,
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationService
  ) {
    this.validateForm = this.fb.group({
      patientName: [''],
      birthdate: [''],
      bloodType: [''],
      emergencyContact: ['', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
      medicines: [['']],
      id_patient: [0],
    });
   }
  
  validateForm: FormGroup<{
    patientName: FormControl<string>
    birthdate: FormControl<string>
    bloodType: FormControl<string>
    emergencyContact: FormControl<string>
    medicines: FormControl<string[]>
    id_patient: FormControl<number>
  }>
  


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['medicalHistory']) {
      console.log(changes)
      this.setValues();
    }
  }

  setValues(): void{
    if(this.medicalHistory){
      this.validateForm.setValue({
        patientName: this.medicalHistory.patientName,
        birthdate: this.medicalHistory.birthdate,
        bloodType: this.medicalHistory.bloodType,
        emergencyContact: this.medicalHistory.emergencyContact,
        medicines: this.medicalHistory.medicines,
        id_patient: this.medicalHistory.id_patient
      })
    }
  }

  submitUpdateForm():void {
    if(this.validateForm.invalid){
      this.createNotification('error', `$Try Again`, 'The data of the medical history is wrong')
    }
    if(this.validateForm.valid){
      this.service.updateMedicalHistory(this.medicalHistory.medicalId, this.validateForm.value).subscribe(()=>{
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


    createNotification(type:string, title: string, content: string){
      this.notification.create(type, title, content)
    }
}
