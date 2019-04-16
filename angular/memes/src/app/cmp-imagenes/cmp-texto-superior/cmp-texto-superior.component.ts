import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cmp-texto-superior',
  templateUrl: './cmp-texto-superior.component.html',
  styleUrls: ['./cmp-texto-superior.component.css']
})
export class CmpTextoSuperiorComponent implements OnInit {
  @Input() superior: string = ''
  @Output() onChangeName = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  cambiarTextoSuperior(nuevoTexto){
  this.onChangeName.emit(nuevoTexto);
  }
}
