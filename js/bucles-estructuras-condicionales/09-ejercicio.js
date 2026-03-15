// Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 
// y que cada 5 líneas muestre una línea horizontal. Por ejemplo

for(let i=1 ; i<=500; i++){
    document.writeln(i)

 if(i % 4 == 0){
    document.writeln("El numero es multiplo de 4")
 }
if(i % 9 == 0){
    document.writeln("El numero es multiplo de 9")
 }
 // 4. Agregamos un salto de línea después de cada número
    document.writeln("<br>")

    if(i % 5 == 0){
        
    document.writeln("<br>"+"------"+"<br>")
    }
}