import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {
nombre: string = "Calcetines de minions";
descripcion: string = "Minions ipsum uuuhhh underweaaar bananaaaa bappleees para tú para tú underweaaar. Underweaaar po kass chasy bee do bee do bee do jeje butt wiiiii. Baboiii wiiiii bananaaaa chasy underweaaar hahaha hahaha aaaaaah poulet tikka masala. Aaaaaah bappleees me want bananaaa! Tank yuuu! Jeje bananaaaa. Ti aamoo! jeje jeje gelatooo bee do bee do bee do wiiiii poopayee.Bee do bee do bee do ti aamoo! Hahaha hahaha hahaha. Para tú belloo! Aaaaaah hana dul sae chasy aaaaaah daa bappleees tatata bala tu tank yuuu! Tatata bala tu. Jeje hahaha jiji chasy. Bananaaaa underweaaar bappleees poulet tikka masala wiiiii me want bananaaa! Jeje tank yuuu!";
precio:number = 3.6;
fechaVenta: Date= new Date(2019, 3, 18);
nombres = ['Robb', 'Arya', 'Rickson', 'Sansa', 'Bran', 'Jon']

constructor() { }

  ngOnInit() {
  }
addNombre(nombre){
  this.nombres.push(nombre);
}
}
