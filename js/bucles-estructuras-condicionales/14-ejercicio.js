//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – 
// entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”,
//  deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let frase = prompt("Ingresa una frase");

let resultado = "";

if (frase !== null) {
    for (let i = 0; i < frase.length; i++) {
        // se agrega carácter actual
        resultado += frase[i];

        // Si no es el último carácter, agregamos el guion(4 -(4-1))
        if (i < frase.length-1) {
            resultado += "-";
        }
    }
    document.writeln(resultado);
    alert(resultado);
}