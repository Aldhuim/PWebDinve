import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilterUserDni'
})
export class TableFilterUserDniPipe implements PipeTransform {

  transform(value: any, arg: any){
    if(arg == '' ) return value;
    const result= [];
    for(const user of value) {
      if(user.dni.toLowerCase().indexOf(arg.toLowerCase())>-1){
        result.push(user);
      }
    }
    return result;
  }

}
