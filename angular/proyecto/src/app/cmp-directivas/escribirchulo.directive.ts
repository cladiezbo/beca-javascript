import { Directive, Input, HostBinding, ElementRef, HostListener } from '@angular/core';
import { range } from 'rxjs';

@Directive({
  selector: '[appEscribirchulo]'
})
export class EscribirchuloDirective {
  misColores: Array<string>=[
    'blue',
    'pink',
    'red',
    'violet'
    ];
  colorLetraPorDefecto: string= 'black';
  @HostBinding('style.color') color:string;
  @HostBinding('style.marginLeft') posLeft:string;
  @HostBinding('style.marginTop') posTop:string;

  constructor(private elemRef: ElementRef) { 
    this.pintar() ;
    }
    ngOnInit(): void {
     // this.elemRef.nativeElement.style.backgroundColor= this.colorFondo;
     this.color = this.colorLetraPorDefecto;
    }
  
    @HostListener('input') onInput(){
      this.color= this.pintar();
      this.posTop= '5px';
      this.posLeft= '5px';
      setTimeout(()=>{
        this.color= 'black';
        this.posTop= '0px';
        this.posLeft= '0px';
      },300);
    }
  
    pintar():string{
      const pos = Math.floor(Math.random()*this.misColores.length);
      return this.misColores[pos];
    }
}
