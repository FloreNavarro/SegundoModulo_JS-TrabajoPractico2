// Realiza un script que pida una cadena de texto y la devuelva al revés. 
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let textoInverso="";
let frase = prompt("Ingrese un frase: ")

let textoMinuscula = frase.toLocaleLowerCase();

if (textoMinuscula !== null){

for(let i= textoMinuscula.length-1; i>=0 ;i--){

     
      textoInverso += textoMinuscula[i];
   

   
}


     
alert(`El texto ingresado inverso es: ${textoInverso}.`);
}
