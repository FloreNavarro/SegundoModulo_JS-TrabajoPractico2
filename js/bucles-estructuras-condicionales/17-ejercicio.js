//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
let vocal="";
let posicionEncontrada = -1;
let frase = prompt("Ingrese un frase: ")

let textoMinuscula = frase.toLocaleLowerCase();

if (textoMinuscula !== null){

for(let i=0; i < textoMinuscula.length; i++){

      vocal = textoMinuscula[i];
    
   

     if (vocal === 'a' ||vocal === 'e' ||vocal === 'i' ||vocal === 'o' || vocal === 'u'){

          posicionEncontrada = i; 
            break; 
}
}
 

alert(`La primer vocal es ${vocal} y se encuntra en la posicion ${posicionEncontrada}`);
}