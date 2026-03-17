//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. funcion Math() 
//const num = prompt("Ingrese un numero: ")
 
// Pedimos los datos del primer bloque
let nombre1 = prompt("Introduce el primer nombre:");
let edad1 = parseInt(prompt("Introduce la edad de " + nombre1 + ":"));

// Pedimos los datos del segundo bloque
let nombre2 = prompt("Introduce el segundo nombre:");
let edad2 = parseInt(prompt("Introduce la edad de " + nombre2 + ":"));

// Pedimos los datos del tercer bloque
let nombre3 = prompt("Introduce el tercer nombre:");
let edad3 = parseInt(prompt("Introduce la edad de " + nombre3 + ":"));

// Usamos Math.max para encontrar el número más alto entre las 3 variables
let edadMayor = Math.max(edad1, edad2, edad3);

//  condicionales (if/else) para saber a quién le pertenece esa edad
let nombreMayor = "";

if (edadMayor === edad1) {
    nombreMayor = nombre1;
} else if (edadMayor === edad2) {
    nombreMayor = nombre2;
} else {
    nombreMayor = nombre3;
}

// Resultado
console.log("La persona mayor es " + nombreMayor + " con " + edadMayor + " años.");
alert("La persona mayor es " + nombreMayor + " con " + edadMayor + " años.");
 

