// Realiza un script que pida números hasta que se pulse “cancelar”. 
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let suma=0;
while(true){
 let num = prompt("Ingrese un numero")

 if (num === null){
 break;
}

let num2= Number(num);

if ( !isNaN(num) & num2 !== ""){
 suma += num2;
}else{
   alert("El valor ingresado no es correcto")
    
}

}
alert("La suma total ingresada es de: " + suma)