import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(nombre: string, args?: any): string {
    let resultado = nombre.split("").reverse();
    //{{"Hola|reverse"}} tiene que mostrar aloh
    
    return resultado.join("");
  }

}
