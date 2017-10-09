//Crear una funcion llamada isValidCard que valida los números de la tarjeta de credito ingresada//

function isValidCard () {

   var numTarjeta = prompt("Ingrese un numero de tarjeta valido");
   var arrayRevertido = numTarjeta.split("").reverse(); //convierto numTarjeta en array y revierto//
   var newArray=[]; //var newArray almacena los numeros ingresados//

   for(i=0 ; i<arrayRevertido.length; i++) {
       newArray.push(parseInt(arrayRevertido[i])); //agrego uno a uno los numeros enteros//
   }

   for(j=0 ; j<newArray.length; j++) {

       if (j%2!==0){  // selecciono los pares//
       var duplicar =  newArray[j]*2; //los pares se duplican//
       newArray[j] = parseInt(duplicar/10)+(duplicar%10); // se suman los digitos pares de mas de un digito//
       }
   }
   return newArray;
}

function sum(newArray) { //Crear una funcion llamada sum para sumar los numeros del newArray//

   var sum = 0;

   for (var k=0; k< newArray.length; k++ ) {
       sum+=newArray[k];
   }

    if(sum%10===0)  //condicionar Si el resto de dividir el total entre 10 es igual a cero la tarjeta es valida//
    return ("tarjeta valida");

    else
    return ("tarjeta invalida");
}

sum(isValidCard());
