//clases e interfaces
import{Producto} from'./producto';


export class CestaDeLaCompra{
    static siguienteId: number =2;
    constructor(
        public lista: Array<Producto> = []){

        }
    addProducto(nuevoProducto:Producto):void{
        this.lista.push(nuevoProducto);
    }

}





