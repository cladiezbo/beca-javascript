function inicializar(){
    var contenidoBody = 
        '<ul id= "mascotas">'+
            '<li id="perro">Un perro llamado firulais</li>'+
            '<li id="gato">Un gato llamado fuskas</li>'+
            '<li id="tigre">Un tigre llamado trigger</li>'+
        '</ul>';
    var body = document.body;
    //no se recomienda hacer
    body.innerHTML = contenidoBody;
}