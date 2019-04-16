import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-two-way-binding',
  templateUrl: './mi-two-way-binding.component.html',
  styleUrls: ['./mi-two-way-binding.component.css']
})
export class MiTwoWayBindingComponent implements OnInit {
producto: string= "Mesa";
  constructor() { }

  ngOnInit() {
  }
  cambiarProducto(val:string=""){
    this.producto = val;
  }
  resetProducto(){
    this.producto= "";
  }
}
