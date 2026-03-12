
let nuevacadena = "";
while (confirm("¿Desea ingresar una frase? ")) {
  let cadena = prompt("Ingrese una frase:");
  //nuevacadena += cadena;
  if (cadena !== null & cadena !== "") {
    
    if (nuevacadena === "") {
      nuevacadena = cadena;
    } else {
      nuevacadena += "-" + cadena;
    }
  }
}

alert("El texto ingresado fue: " + nuevacadena);