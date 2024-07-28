import { Component, OnInit } from "@angular/core";
import { CreateMedicalHistoryComponent } from "../../components/medicalHistory/create-medical-history/create-medical-history.component";
import { MedicalHistoryListComponent } from "../../components/medicalHistory/medical-history-list/medical-history-list.component";
import { UpdateMedicalHistoryComponent } from "../../components/medicalHistory/update-medical-history/update-medical-history.component";

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './medicalHistoryPage.component.html',
  styleUrls: ['./medicalHistoryPage.component.css'],
  imports: [CreateMedicalHistoryComponent, MedicalHistoryListComponent, UpdateMedicalHistoryComponent]
})
export class MedicalHistoryPage implements OnInit {

  constructor() { }

  ngOnInit() { }

}
