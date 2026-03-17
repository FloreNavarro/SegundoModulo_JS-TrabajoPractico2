//Realiza un script que cuente el número de vocales que tiene un texto.
let contadorVocales = 0;
let frase = prompt("Ingrese un frase: ")

let textoMinuscula = frase.toLocaleLowerCase();

if (textoMinuscula !== null){

for(let i=0; i< textoMinuscula.length ;i++){

     let vocal = textoMinuscula[i];

   

     if (vocal === 'a' ||vocal === 'e' ||vocal === 'i' ||vocal === 'o' || vocal === 'u'){

          contadorVocales ++;
}
}
 

alert(`El texto tiene ${contadorVocales} vocales.`);
}