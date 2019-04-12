//inicializar los datos de la tabla si esta vacio con valor por defecto, sino con localstorage
function inicializarProbandoConLocalStorage(){
   
    var tbody = document.getElementById("body");
    if(localStorage.getItem("miTabla") == null){
        
       var tablaBase = "<tr><td>ASD12345AZ</td>" +
            "<td>Dumbo</td>" +
            "<td>Tim Burton</td>" +
            "<td>Drama</td>" +
            "<td>04/04/2019</td>" +
            "<td>8</td>" +
           " <td>" +
                '<button value="Eliminar" onclick="eliminar(\'ASD12345AZ\')"> Eliminar</button>' +
                '<button value="Editar" onclick="editar(\'ASD12345AZ\')">Editar</button>' +   
            "</td>" +
        "</tr>"

        localStorage.setItem("miTabla",tablaBase);
        tbody.innerHTML = tablaBase;
    }else{
        tbody.innerHTML = localStorage.getItem("miTabla");
    }
}

//funcion que inserta un nuevo elemento en la tabla, inicios y guardar info en local storage
function agregarElementoEnTabla(){
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
    var tablabody = document.getElementById("body")
    tablabody.appendChild(fila);
    localStorage.setItem("miTabla",tablabody.innerHTML);
} 


function eliminarElementoDeLaTabla( idEliminar){
    
    var elementoEliminar = buscarElementoEnCuerpoDeTabla(idEliminar)
    var tablabody = document.getElementById("body")
    tablabody.removeChild(elementoEliminar)
    localStorage.setItem("miTabla",tablabody.innerHTML);

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
