
function inicializar(){
   if(localStorage){
       if(localStorage.getItem("color")){
           alert("el color almacenado es: "+ localStorage.getItem("color"))
       }
       else
       localStorage.color = "mi color"
   } 
}