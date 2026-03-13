//Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
//El algoritmo para calcular la letra del dni es el siguiente :
//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».


        //ingresar numero DNI:
        while(true){
         //Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
        const num = prompt("ingresar el numero de DNI: ");
        if (num === null){
            break;
        }
         
        let num2 = Number(num)
        //Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
        //El número debe ser entre 0 y 99999999
        if (!isNaN(num2) & num !== "" & num2>0 & num2 < 99999999){
           const  indice= num2 % 23

            switch (indice){
            case 0:"T"
            alert("T")
            break;
            case 1:"R"
            alert("R")
            break;
            case 2:"W"
            alert("W")
            break;
            case 3:"A"
            alert("A")
            break;
            case 4:"G"
            alert("G")
            break;
            case 5:"M"
            alert("M")
            break;
            case 6:"Y"
            alert("Y")
            break;
            case 7:"F"
            alert("F")
            break;
            case 8:"P"
            alert("P")
            break;
            case 9:"D"
            alert("D")
            break;
            case 10:"X"
            alert("X")
            break;
            case 11:"B"
            alert("B")
            break;
            case 12:"N"
            alert("N")
            break;
            case 13:"J"
            alert("J")
            break;
            case 14:"Z"
            alert("Z")
            break;
            case 15:"S"
            alert("S")
            break;
            case 16:"Q"
            alert("Q")
            break;
            case 17:"V"
            alert("V")
            break;
            case 18:"H"
            alert("H")
            break;
            case 19:"L"
            alert("L")
            break;
            case 20:"C"
            alert("C")
            break;
            case 21:"K"
            alert("K")
            break;
            case 22:"E"
            alert("E")
            break;
            }
        }else{
          alert("El valor ingresado no es correcto");
       
        
        
        }
    }

    