import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilterUser'
})
export class TableFilterUserPipe implements PipeTransform {

  transform(value: any, arg : any): any{
    if(arg == '' ) return value;
    const result= [];
    for(const user of value) {
      if(user.id.toString().indexOf(arg)>-1){
        result.push(user);
      }
    }
    return result;
  }

}
