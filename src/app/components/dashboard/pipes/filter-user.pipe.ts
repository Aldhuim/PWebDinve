import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from 'src/app/models/user.interface';

@Pipe({
  name: 'filterUser'
})
export class FilterUserPipe implements PipeTransform {

  transform(value: Usuario[], arg : any): any{
   if(!value || !arg){
     return value;
   }
   return value.filter( user =>
    user.nombre.toLowerCase().includes(arg.toLowerCase()) ||
    user.apellido.toLowerCase().includes(arg.toLowerCase()) ||
    user.id.toString().includes(arg) ||
    user.cargo.toLowerCase().includes(arg.toLowerCase()) ||
    user.user.toLowerCase().includes(arg.toLowerCase()) ||
    user.dni.toLowerCase().includes(arg.toLowerCase())
  )
  }
}
