import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MedicalHistoryService } from '../../services/medical-history.service';
import { CommonModule } from '@angular/common';
import{NzTableModule} from 'ng-zorro-antd/table'
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-medical-history-list',
  standalone: true,
  imports: [CommonModule, NzTableModule, NzButtonModule],
  templateUrl: './medical-history-list.component.html',
  styleUrl: './medical-history-list.component.css'
})
export class MedicalHistoryListComponent implements OnInit, OnChanges{

  medicalHistories: any[] = []
  @Output() productSelected = new EventEmitter<any>();

  constructor(private service: MedicalHistoryService){}

  ngOnInit(): void {
  this.loadMedicalHistories()
}

ngOnChanges(changes: SimpleChanges): void {
  if(changes['medicalHistories']) {
    this.loadMedicalHistories()
  }
}


loadMedicalHistories(): void{
  this.service.getMedicalHistories().subscribe((data: any[]) => {
    this.medicalHistories = data
  });
}

deleteMedicalHistory(id: number): void{
  this.service.deleteMedicalHistory(id).subscribe(() => {
    this.loadMedicalHistories()
  });
}

selectedMedicalHistory(medicalHistory: any): void{
  this.productSelected.emit(medicalHistory)
}

}
