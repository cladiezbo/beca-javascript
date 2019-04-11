
function agregar(){
    var titulo = document.getElementById("title").value
    var director = document.getElementById("director").value
    var codigo = document.getElementById("cod").value
    var fecha = document.getElementById("date").value
    var genero = document.getElementById("gen").value
    var valoracion = document.getElementById("val").value
    

    var fila = document.createElement("tr")
    var botones = 
    '<button value="Eliminar"onclick="eliminar('+ "'"+codigo+"'" +')"> Eliminar</button>'+
    '<button value="Editar onclick="eliminar('+ "'"+codigo+"'" +')">Editar</button>'
    

    var celdaCodigo = document.createElement("td")
    var celdaTitulo = document.createElement("td")
    var celdaDirector = document.createElement("td")
    var celdaGenero = document.createElement("td")
    var celdaFecha = document.createElement("td")
    var celdaValoracion = document.createElement("td")
    var celdaBotones = document.createElement("td")

    celdaCodigo.innerHTML = codigo
    celdaTitulo.innerHTML = titulo
    celdaDirector.innerHTML = director
    celdaGenero.innerHTML= genero
    celdaFecha.innerHTML = fecha
    celdaValoracion.innerHTML = valoracion
    celdaBotones.innerHTML = botones;

    fila.appendChild(celdaCodigo)
    fila.appendChild(celdaTitulo)
    fila.appendChild(celdaDirector)
    fila.appendChild(celdaGenero)
    fila.appendChild(celdaFecha)
    fila.appendChild(celdaValoracion)
    fila.appendChild(celdaBotones)
   // debugger
    var tablabody = document.getElementById("body")
    tablabody.appendChild(fila);
} 
function eliminar( idEliminar){
    
    var elementoEliminar = buscarElementoEnCuerpoDeTabla(idEliminar)
    var tablabody = document.getElementById("body")
    tablabody.removeChild(elementoEliminar)

}

function buscarElementoEnCuerpoDeTabla(id){
    var tablabody= document.getElementById("body")
    var fila = tablabody.children
    for (let index = 0; index < fila.length; index++) {
        var celdasArray = fila[index].cells;
        for (let j = 0; j < celdasArray.length; j++) {
            if (celdasArray[j].outerText == id ){
               return  fila[index]
  
            }
            
        }
        
    }

}
function editar(idEditar){

}