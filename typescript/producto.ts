import{CestaDeLaCompra} from'./cestaDeLaCompra';

export class Producto {
    // public id: number;
    // public nombre: String;
    // public precio: number;
    // public fechaCaducidad: Date;

//ponerle la visibilidad en el constructor estamos creandolo ya con su valor
    constructor(
    public nombre: String,
    public precio: number,
    public fechaCaducidad: Date,
    public id: number= CestaDeLaCompra.siguienteId){ 
        CestaDeLaCompra.siguienteId++;
    }
    toString(){
        console.log(`#${this.id} ${this.nombre} (${this.precio}€) caduca en ${this.fechaCaducidad}`);
        
    }
}