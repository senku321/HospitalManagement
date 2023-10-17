import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'nameOnly' })
export class NameOnlyPipe implements PipeTransform {
  transform(obj: any): string {


    
    
    if(obj){
        return obj.name;
    }
    return "doctor not assigned yet";
  }
}
