//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un 
//mensaje que ya puede conducir, si la edad ingresada no es un número válido 
// indicarlo en un mensaje.
const edad = parseInt(prompt("Ingrese su edad"))

if (isNaN(edad)){
 alert ("El valor ingresado no es correcto")
}

if (edad >= 18){
    alert("Puede conducir")
}else{

alert("Es menor de edad, no puede conducir")

}