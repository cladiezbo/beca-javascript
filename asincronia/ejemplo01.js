const URLPelis = "https://ejemplos-dc1c1.firebaseio.com/peliculas/"
const URLGenero = "https://ejemplos-dc1c1.firebaseio.com/generos.json"
function getGenero(){
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', URLGenero);

    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState=== 4){
        let gen = JSON.parse(xhr.responseText);
        var generoEscogido= parseInt(prompt(`Elige un genero:
         0 ${gen[0]}
         1 ${gen[1]}`))
        
         obtenerPelisPorGenero(gen[generoEscogido])
        }
        
        
    })
    xhr.send();
}


function obtenerPelisPorGenero(genero){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', URLPelis + genero+'.json');

    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState=== 4){
            let pelis = JSON.parse(xhr.responseText);
            console.log(pelis)
            for (let id in pelis) {
               console.log(`Las peliculas del genero ${genero} son: ${pelis[id].join(',')}`)
                
            }
        } 
    })
    xhr.send();
    
}
getGenero()

// ver https://notepad.pw/sopra-beca-1