import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MedicalHistoryService } from '../../services/medical-history.service';
import { NonNullableFormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReactiveFormsModule } from '@angular/forms';
import {NzFormLabelComponent, NzFormItemComponent} from 'ng-zorro-antd/form'
import {NzButtonModule} from 'ng-zorro-antd/button'
import {NzFormModule} from 'ng-zorro-antd/form'
import {NzInputModule} from 'ng-zorro-antd/input'
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {NzFormControlComponent} from 'ng-zorro-antd/form'
import { Medicines } from '../../enums/medicines';
import { NzSelectModule } from 'ng-zorro-antd/select';

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
    NzSelectModule
  ],
  templateUrl: './update-medical-history.component.html',
  styleUrl: './update-medical-history.component.css'
})
export class UpdateMedicalHistoryComponent implements OnInit, OnChanges{

  medicines = Object.values(Medicines)
  medicalHistoryId: number = 0;
  @Input() medicalHistory: any;
  @Output() medicalHistoryUpdated = new EventEmitter<any>();

  constructor(
    private service: MedicalHistoryService,
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationService
  ) {
    this.validateForm = this.fb.group({
      patientName: [''],
      birthdate: [''],
      bloodType: [''],
      emergencyContact: ['', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
      medicines: [['']]
    });
   }
  
  validateForm: FormGroup<{
    patientName: FormControl<string>
    birthdate: FormControl<string>
    bloodType: FormControl<string>
    emergencyContact: FormControl<string>
    medicines: FormControl<string[]>
  }>
  
  ngOnInit(): void {
    this.getMedicalHistoryId()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['medicalHistory']) {
      this.setValues();
    }
  }

  getMedicalHistoryId(): void{
    this.service.getMedicalHistories().subscribe((medicalHistoryIdData) =>{
        for(let i = 0; i < medicalHistoryIdData.length; i++){
            this.medicalHistoryId = medicalHistoryIdData[i].id
          }})
      }
  
  setValues(): void{
    if(this.medicalHistory){
      this.validateForm.setValue({
        patientName: this.medicalHistory.patientName,
        birthdate: this.medicalHistory.birthdate,
        bloodType: this.medicalHistory.bloodType,
        emergencyContact: this.medicalHistory.emergencyContact,
        medicines: this.medicalHistory.medicines
      })
    }
  }

  submitUpdateForm():void {
    if(this.validateForm.valid){
      this.service.updateMedicalHistory(this.medicalHistoryId, this.validateForm.value).subscribe(()=>{
        this.createNotification('success', `${this.validateForm.value.patientName}${this.validateForm.value.birthdate}`, 'The medical history has been updated successfully')
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
    }


    createNotification(type:string, title: string, content: string){
      this.notification.create(type, title, content)
    }
}
