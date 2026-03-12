//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
//  Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.


/*do{

  let cadena= prompt("Ingrese un frase o cancelar para salir: " )
             cadena += nuevacadena
}while(confirm("Ingrese un frase o cancelar para salir")  )

    alert("El texto ingresado fue: " + nuevacadena)*/
     let nuevacadena = " " ; 
    while( confirm("Ingrese un frase:") ){

      let cadena= prompt("Ingrese un frase o cancelar para salir: " )
             nuevacadena += cadena;

    }

    alert("El texto ingresado fue: " + nuevacadena)