import { Pipe, PipeTransform } from '@angular/core';
import { Usuarios } from 'src/app/models/user.interface';

@Pipe({
  name: 'tableFilterUserNom'
})
export class TableFilterUserNomPipe implements PipeTransform {

  transform(value: any, arg: any){
    if(arg == '' ) return value;
    const result= [];
    for(const user of value) {
      if(user.nombre.toLowerCase().indexOf(arg.toLowerCase())>-1 || user.apellido.toLowerCase().indexOf(arg.toLowerCase())>-1){
        result.push(user);
      }
    }
    return result;
  }

}
