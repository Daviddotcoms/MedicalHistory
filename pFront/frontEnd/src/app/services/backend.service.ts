import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private url = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  //MEDICAL HISTORY - METHODS
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

  //PATIENT - METHODS
  createPatient<T>(patient: T): Observable<T>{
    return this.http.post<T>(`${this.url}/patient`, patient)
  }

  getPatients(): Observable<any>{
    return this.http.get<any>(`${this.url}/patient`)
  }
  
  updatePatient(id: number, patient: any): Observable<any>{
    return this.http.patch<any>(`${this.url}/patient/${id}`, patient)
  }
  
  deletePatient(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}/patient/${id}`)
  }
}
