import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
 {name : 'ObjtoArray'}
)

export class ObjtoArrayPipe implements PipeTransform{
  transform(obj:any = []):any{
    return Object.values(obj);
  }
}
