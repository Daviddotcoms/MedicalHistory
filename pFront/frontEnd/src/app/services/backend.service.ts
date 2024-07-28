import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {
  private url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  createMedicalHistory<T>(medicalHistory: T): Observable<T>{
    return this.http.post<T>(`${this.url}/medical-history`, medicalHistory)
  }

  getMedicalHistories(): Observable<any>{
    return this.http.get<any>(`${this.url}/medical-history`)
  }
  
  updateMedicalHistory(id: number, medicalHistory: any): Observable<any>{
    return this.http.patch<any>(`${this.url}/medical-history/${id}`, medicalHistory)
  }
  
  deleteMedicalHistory(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/medical-history/${id}`)
  }
}
