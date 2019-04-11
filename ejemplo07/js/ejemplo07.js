function inicializar(){
   var lista = document.getElementById("lista");
   var listaItem2 = document.createElement("li")
   var textListItem2 = document.createTextNode("2")
   listaItem2.appendChild(textListItem2)
   lista.insertBefore(listaItem2, lista.children[1]);
   var listaItem4 = document.createElement("li")
   var textListItem4 = document.createTextNode("4")
   listaItem4.appendChild(textListItem4)
   lista.replaceChild(listaItem4, lista.children[3])
}