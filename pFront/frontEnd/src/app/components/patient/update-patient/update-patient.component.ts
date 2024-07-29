import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
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
@Component({
  selector: 'app-update-patient',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzFormControlComponent,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzFormItemComponent,
    NzFormLabelComponent,
    NzInputNumberModule
  ],
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent implements OnChanges{
  @Input() patient: any;
  @Output() patientUpdated = new EventEmitter<any>();

  constructor(
    private service: BackendService,
    private fb: NonNullableFormBuilder,
    private notification: NzNotificationService
  ){
    this.validateForm = this.fb.group({
      name: ['', [Validators.pattern('^[a-zA-Z ]+$')]],
      age: [0, [Validators.min(5), Validators.max(10)]],
      email: ['', [Validators.email,  Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
      dni: ['', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
    })
  }
  
  validateForm: FormGroup<{
    name: FormControl<string>
    age: FormControl<number>
    email: FormControl<string>
    dni: FormControl<string>
  }>

  


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['patient']) {
      console.log(changes)
      this.setValues();
    }
  }

  
  
  setValues(): void{
    if(this.patient){
      this.validateForm.setValue({
        name: this.patient.name,
        age: this.patient.age,
        email: this.patient.email,
        dni: this.patient.dni
      })
    }
  }

  submitUpdateForm():void {
    if(this.validateForm.valid){
      this.service.updatePatient(this.patient.patientId, this.validateForm.value).subscribe(()=>{
        this.createNotification('success', `${this.validateForm.value.name}${this.validateForm.value.age}`, 'The patient has been updated successfully')
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
