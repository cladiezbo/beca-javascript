import { Injectable } from '@angular/core';
import { Tarea } from './tarea';


@Injectable({
  providedIn: 'root'
})
export class TareasService {
  idCount:number= 2;
 private tareas =[
    new Tarea('Ver GoT', false, '0'),
    new Tarea('acabar la lista de tareas', false, '1')
  ];

  constructor() { }
  getTareas():Array<Tarea>{
  return this.tareas
  }
  getTarea(id:string): Tarea{
    return this.tareas.find((tarea,pos)=>{
      return tarea.id== id;
    })
  }
  addTarea(nombre: string): void{
    this.tareas.push( new Tarea(nombre, false,this.idCount+''));
    this.idCount ++; 
  }
  deleteTarea(id:string): void{

  }
  updateTarea(id:string, tarea: Tarea):void{
  
  }
}
