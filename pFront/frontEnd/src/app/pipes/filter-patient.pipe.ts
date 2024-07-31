import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPatient',
  standalone: true
})
export class FilterPatientPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPatients = []
    for(const patient of value){
      if(patient.name.toLowerCase().indexOf(arg.toLowerCase()) > - 1){
        resultPatients.push(patient)
      }
    }
    return resultPatients
  }
}
