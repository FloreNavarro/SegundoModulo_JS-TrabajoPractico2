//Crea script para generar pirámide siguiente con los números
//  del 1 al número que indique el usuario (no mayor de 50) 

const num = prompt("Ingrese un numero: ")
if(!isNaN(num) && num > 0 && num < 50){
  for(let i=1; i <= num; i++){
     let p = ""
    for(let j=1; j<= i; j++){
    p+= j;

} 
document.writeln(p + "<br>")

}


 }else {
    alert("Por favor, ingrese un número válido entre 1 y 49.");
 }
