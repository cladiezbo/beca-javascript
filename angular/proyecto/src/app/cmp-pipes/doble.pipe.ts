import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {
//args no es un arreglo, es un elemento y si queremos mas tenemos que agregarlos
  transform(precio: number, arg1?: number, arg2?: number): number {
    let resultado = precio*2;
    if(arg1){
      resultado+=arg1
    }
    return resultado;
  }

}
