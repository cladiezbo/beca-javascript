function inicializar(){
    var parrafo1 = document.getElementById('parrafo');
    console.log(parrafo1);
    var parrafo2 = document.querySelector("body p")
    console.log(parrafo2);
    var titulos = document.getElementsByClassName("titulo")
    console.log(titulos)
    var listItems = document.getElementsByTagName("li")
    console.log(listItems)
    var inputs = document.getElementsByName("input");
    console.log(inputs);
    var parrafos = document.querySelectorAll("body p")
    console.log("Primero: ",parrafos.item(0));
    console.log("segundo: ",parrafos.item(1));
    for (var index = 0; index < parrafos.length; index++) {
        console.log(parrafos[index].firstChild.textContent);
        
    }

}