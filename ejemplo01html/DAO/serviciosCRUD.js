
function nuevo(elemento, inicializar){
 var ajax = new XMLHttpRequest();
    ajax.open("POST","http://192.168.1.63:8080/peliculas/");
    ajax.setRequestHeader(
        'Content-Type','application/json;charset=UTF-8')
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            //datos = JSON.parse(ajax.response)
            inicializar();
            //console.log(datos);
        }
        //console.log(ajax.readyState);

    }
    ajax.send(JSON.stringify(elemento))
}

function modificar(elemento,elementoId, inicializar){
    var ajax = new XMLHttpRequest();
    ajax.open("PUT","http://192.168.1.63:8080/peliculas/"+elementoId,true);
    ajax.setRequestHeader('Content-type','application/json;charset=UTF-8')
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            //datos = JSON.parse(ajax.response)
            inicializar();
           // console.log(datos);
        }
        //console.log(ajax.readyState);

    }
    ajax.send(JSON.stringify(elemento))
}
function eliminar(idEliminar,inicializar){
    var ajax = new XMLHttpRequest();
    ajax.open("DELETE","http://192.168.1.63:8080/peliculas/"+idEliminar);
    ajax.onreadystatechange = function (){
        if(ajax.status == 200 && ajax.readyState == 4){
            //datos = JSON.parse(ajax.response)
            inicializar();
            //console.log(datos);
        }
        //console.log(ajax.readyState);
    }
    
    ajax.send();
    
}
function devolverTodos(cargarTabla){
    var ajax = new XMLHttpRequest();
    ajax.open("GET","http://192.168.1.63:8080/peliculas/");
    ajax.onreadystatechange = function (){

        if(ajax.status == 200 && ajax.readyState == 4){
            datos = JSON.parse(ajax.response)
            //console.log(datos);
            cargarTabla();
        }
       // console.log(ajax.readyState);
    }
    
    ajax.send();
    
}