const URLPelis = "https://ejemplos-dc1c1.firebaseio.com/peliculas/"
const URLGenero = "https://ejemplos-dc1c1.firebaseio.com/generos.json"


function getGeneros(){
    fetch(URLGenero)
    .then((resp)=>{
        return resp.json();
    })
    .then((generos)=>{
        //console.log(generos);
        let opcion= elegirOpcion(generos);
        console.log(opcion);
        getPeliculaPorGenero(generos[opcion])
    })
}

function getPeliculaPorGenero(genero){
fetch(URLPelis+genero+'.json')
.then(resp=> resp.json())
.then(peliculas=> {for (let id in pelis) {
    console.log(`Las peliculas del genero ${genero} son: ${pelis[id].join(',')}`)}})
}
function elegirOpcion(generos) {
    let listaOpciones = generos.map((gen, pos) => `${pos} (${gen})`).join(', ');
  
    return parseInt(prompt(`Elige el genero de las peliculas: ${listaOpciones}`))
  }


getGeneros();