import { Component, OnInit } from '@angular/core';
import { MedicalHistoryComponent } from '../../components/medical-history/medical-history.component';
import { MedicalHistoryListComponent } from '../../components/medical-history-list/medical-history-list.component';
import { UpdateMedicalHistoryComponent } from '../../components/update-medical-history/update-medical-history.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  imports: [MedicalHistoryComponent, MedicalHistoryListComponent, UpdateMedicalHistoryComponent]
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
