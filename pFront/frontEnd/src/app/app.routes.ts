import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: 'welcome', loadChildren: () => import('./pages/patient-page/patient-page.routes').then(m => m.PATIENTPAGE_ROUTES) },
  { path: 'medicalHistory', loadChildren: () => import('./pages/medicalHistoryPage/medicalHistoryPage.routes').then(m => m.MEDICALHISTORYPAGE_ROUTES) },
  { path: 'patient', loadChildren: () => import('./pages/patient-page/patient-page.routes').then(m => m.PATIENTPAGE_ROUTES) }
];
