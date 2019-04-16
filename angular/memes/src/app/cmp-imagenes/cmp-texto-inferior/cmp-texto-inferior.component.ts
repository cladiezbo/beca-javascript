import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cmp-texto-inferior',
  templateUrl: './cmp-texto-inferior.component.html',
  styleUrls: ['./cmp-texto-inferior.component.css']
})
export class CmpTextoInferiorComponent implements OnInit {
  @Input() inferior: string = ''
  @Output() onChangeName = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  cambiarTextoInferior(nuevoTexto){
  this.onChangeName.emit(nuevoTexto);
  }
}
