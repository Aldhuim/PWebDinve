import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilterUserCorreo'
})
export class TableFilterUserCorreoPipe implements PipeTransform {

  transform(value: any, arg: any){
    if(arg == '' ) return value;
    const result= [];
    for(const user of value) {
      if(user.user.toLowerCase().indexOf(arg.toLowerCase())>-1){
        result.push(user);
      }
    }
    return result;
  }

}
