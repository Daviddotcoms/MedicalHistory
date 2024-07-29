import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { BackendService } from '../../../services/backend.service';
import { CommonModule } from '@angular/common';
import{NzTableModule} from 'ng-zorro-antd/table'
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [
    CommonModule,
    NzTableModule,
    NzButtonModule
  ],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnChanges{

  patients: any[] = []
  @Output() patientSelected = new EventEmitter<any>();

  constructor(private service: BackendService){}

  ngOnInit(): void {
  this.loadPatients()
}

ngOnChanges(changes: SimpleChanges): void {
  if(changes['patients']) {
    this.loadPatients()
  }
}


loadPatients(): void{
  this.service.getPatients().subscribe((data: any[]) => {
    this.patients = data
  });
}

deletePatient(patientId: number): void{
  this.service.deletePatient(patientId).subscribe(() => {
    this.loadPatients()
  });
}

selectedPatient(Patient: any): void{
  this.patientSelected.emit(Patient)
}
}
