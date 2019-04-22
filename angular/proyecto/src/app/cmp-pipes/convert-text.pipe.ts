import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertText'
})
export class ConvertTextPipe implements PipeTransform {

  transform(texto: string, cambios?: Array<string>, sustituto?:string): string {
    let resultado = [];
    let arrPalabras = texto.split(" ");
    let charOculto = sustituto ? sustituto : '*';
    for(let palabras of arrPalabras){
      if(cambios.includes(palabras))
        resultado.push(charOculto);
      else
        resultado.push(palabras);

   }
   
    return resultado.join(" ");
  }

}
