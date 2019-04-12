
//inicializo la tabla con un ajax que hace peticion a un servidor
function inicializar(){
   // debugger
   devolverTodos(cargarTabla)
    
}



//funcion que inserta los nuevos elementos en la tabla y actualiza la BD de una a traves de una peticion ajax a un servidor
function agregar(){
    //debugger
    var titulo = document.getElementById("title").value
    var director = document.getElementById("director").value
    var codigo = document.getElementById("cod").value
    var fecha = document.getElementById("date").valueAsDate
    var genero = document.getElementById("gen").selectedOptions[0].outerText
    var valoracion = document.getElementById("val").value

    var elemento=({codId: codigo,
    director: director,
    fecha: fecha,
    genero: genero,
    titulo: titulo,
    valoracion: valoracion});
    nuevo(elemento,inicializar)
    
}

//modificando un valor
function actualizando(idActualizar){
    var titulo = document.getElementById("title").value
    var director = document.getElementById("director").value
    var codigo = document.getElementById("cod").value
    var fecha = document.getElementById("date").valueAsDate
    var genero = document.getElementById("gen").selectedOptions[0].outerText
    var valoracion = document.getElementById("val").value
   
   var elemento = ({codId: codigo,
    director: director,
    fecha: fecha,
    genero: genero,
    titulo: titulo,
    valoracion: valoracion});
    modificar(elemento,idActualizar,inicializar)
    
}

//eliminando un valor seleccionado
function borrar(idEliminar){
    eliminar(idEliminar, inicializar)
    
}


function dameUno(id){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://192.168.1.63:8080/peliculas/"+id);
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            console.log(datos);
        }
        console.log(ajax.readyState);
    }
    
    ajax.send();
    

}
function cargarTabla() {
    var tablabody = document.getElementById("body")
    tablabody.innerHTML=""
    
    for (let index = 0; index < datos.length; index++) {
        const element = datos[index];
        var fila = document.createElement("tr")
        var botones = 
        '<button value="Eliminar"onclick="borrar('+ "'"+element.codId+"'" +')"> Eliminar</button>'+
        '<button value="Editar onclick="actualizando('+ "'"+element.codId+"'" +')">Editar</button>'
        var celdaCodigo = document.createElement("td")
        var celdaTitulo = document.createElement("td")
        var celdaDirector = document.createElement("td")
        var celdaGenero = document.createElement("td")
        var celdaFecha = document.createElement("td")
        var celdaValoracion = document.createElement("td")
        var celdaBotones = document.createElement("td")
        
        //debugger
        if(element.fecha!=null){
            var fecha = new Date(element.fecha)
            celdaFecha.innerHTML = fecha.toDateString()
        }else
        celdaFecha.innerHTML = ""
        

        celdaCodigo.innerHTML = element.codId
        celdaTitulo.innerHTML = element.titulo
        celdaDirector.innerHTML = element.director
        celdaGenero.innerHTML= element.genero
        
        celdaValoracion.innerHTML = element.valoracion
        celdaBotones.innerHTML = botones;

        fila.appendChild(celdaCodigo)
        fila.appendChild(celdaTitulo)
        fila.appendChild(celdaDirector)
        fila.appendChild(celdaGenero)
        fila.appendChild(celdaFecha)
        fila.appendChild(celdaValoracion)
        fila.appendChild(celdaBotones)
       
        tablabody.appendChild(fila);
       
    }
}