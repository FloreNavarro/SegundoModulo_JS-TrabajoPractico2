//Realiza un script que genere un número aleatorio entre 1 y 99

const  num = Math.random() * (99 - 1) + 1;

const numfinal = Math.trunc(num)

document.writeln(numfinal)
