//Haz un script que escriba una pirámide inversa 
// de los números del 1 al número que indique el usuario (no mayor de 50)  
// de la siguiente forma : (suponiendo que indica 30).

const num = prompt("Ingrese un numero: ")
if(!isNaN(num) && num > 0 && num <= 50){
  for(let i=num; i >=1; i--){
     p = ""
    for(let j=1; j<= i; j++){
    p += i

} 
document.writeln(p + "<br>")

}


 }else {
    alert("Por favor, ingrese un número válido entre 1 y 50.");
 }