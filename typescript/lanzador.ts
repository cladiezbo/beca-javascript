import{Producto} from'./producto';
import{CestaDeLaCompra} from'./cestaDeLaCompra';

let onePlus= new Producto("One Plus 6T", 500, new Date(2019,5,20));
onePlus.toString();


let miCesta = new CestaDeLaCompra();
miCesta.addProducto(onePlus)
console.log(miCesta);
console.log(CestaDeLaCompra.siguienteId)