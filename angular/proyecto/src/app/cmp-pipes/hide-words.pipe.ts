import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideWords'
})
export class HideWordsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //{{Le pasas un texto|hideWords:['bee', 'butt']}} tiene que sustituir en el texto donde estan esas palabras por * y por otro simbolo que se le especifique
    return null;
  }

}
