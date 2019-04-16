import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-imagenes',
  templateUrl: './cmp-imagenes.component.html',
  styleUrls: ['./cmp-imagenes.component.css']
})
export class CmpImagenesComponent implements OnInit {
textoSuperior: string = '';
textoInferior: string = '';
imageURL: string= 'https://i.imgflip.com/ljk.jpg';

  constructor() { }

  ngOnInit() {
  }
  cambiarTextoSuperior(superior){
    this.textoSuperior = superior;
  }
  cambiarTextoInferior(inferior){
    this.textoInferior = inferior;
  }
}
