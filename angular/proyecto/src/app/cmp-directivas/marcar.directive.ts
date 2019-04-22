import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcar]'
})
export class MarcarDirective implements OnInit {
  colorPorDefecto: string = 'white';
  @Input('appMarcar') colorFondo:string;
  @HostBinding('style.backgroundColor') color:string;

  constructor(private elemRef: ElementRef) { 
  this.pintar(this.colorPorDefecto) ;
  }
  ngOnInit(): void {
   // this.elemRef.nativeElement.style.backgroundColor= this.colorFondo;
   this.colorFondo = this.colorFondo ?this.colorFondo :'red';
  }

  @HostListener('mouseover') onMouseOver(){
    this.pintar(this.colorFondo);
  }
  @HostListener('mouseout') onMouseOut(){
    this.pintar(this.colorPorDefecto);
  }
  pintar(color:string){
    this.color= color;
  }
}
