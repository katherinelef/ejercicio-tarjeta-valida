1. Crear una funcion llamada isValidCard que valida los números de la tarjeta de credito ingresada: function isValidCard ()

2. Crear una variable llamada numTarjeta por medio de la cual el usuario ingrese el numero de tarjeta de credito a validar:  
      var numTarjeta = prompt("Ingrese un numero de tarjeta valido");

3. Crear una variable llamada arrayRevertido que convierte en un array el numero de tarjeta por medio del metodo split e invierte el array por medio del metodo reverse:
      var arrayRevertido = numTarjeta.split("").reverse();
4. Crear una variable llamada newArray que almacene los numeros que se operaran para validar la tarjeta:
      var  newArray=[];

     4.1. for(i=0 ; i<arrayRevertido.length; i++) // el for recorrera el array //
     4.2. newArray.push(parseInt(arrayRevertido[i])); //agrego uno a uno los numeros   enteros al nuevo array//
     4.3. for(j=0 ; j<newArray.length; j++) // otro for que recorrera las ubicaciones pares //
     4.4. condicionar para encontrar las ubicaciones pares:
       if (j%2!==0)
      4.5. crear una variable duplicar que duplique las ubicaciones pares:
           var duplicar =  newArray[j] por 2
      4.6 newArray[j] = parseInt(duplicar/10)+(duplicar%10); // se suman los digitos pares de mas de un digito//

5. retornar el nuevo array: return newArray;

6. Crear una funcion llamada sum para sumar los numeros del newArray:
    function sum(newArray)

7. Crear una variable sum que contenga los numeros del nuevo array que se iran sumando:
   var sum = 0;

8. for (var k=0; k< newArray.length; k++ ) // el for recorrera el nuevo array//

       8.1 se suma y se acumulando las sumas anteriores
           sum+=newArray[k];

9. if(sum%10===0)  //condicionar Si el resto de dividir el total entre 10 es igual a cero la tarjeta es valida//
      9.1. si el verdadero:   return ("tarjeta valida");
      9.2. si el falso: else return ("tarjeta invalida");

10. Llamar a la funcion para validar el numero de la tarjeta:
    sum(isValidCard());

Nota: en el siguiente enlace se encuentra el link del flujograma.

https://subefotos.com/ver/?6352286f8176a8e7bc49015713acaa8do.png#codigos
