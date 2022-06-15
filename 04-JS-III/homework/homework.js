// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:

  let ultimo;

  ultimo = array[array.length - 1 ];

  return ultimo;

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let largo;

  largo = array.length;

  return largo;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let nuevoArray;

  nuevoArray = array.map(function (elemento){

    return elemento + 1 ;
  });

  return nuevoArray;


}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

   array.push(elemento);

   return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
   array.unshift(elemento);

   return array;



}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

    palabrasuno = palabras.join(' ');

    return palabrasuno;

}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  let existe;

  existe = array.includes(elemento);

  return existe;


}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  numeros.forEach(function(elemento){
    
    suma = suma + elemento;
  })

  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
    
    let promedio;
    let suma = 0;
    resultadosTest.forEach(function(elemento){

        suma = suma + elemento;


    })

    let longitud = resultadosTest.length;


     promedio = (suma)/longitud ;

     return promedio;  
  }


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let mayor;

  mayor = Math.max(...numeros);

  return mayor;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length > 1){
    let prod = 1;
    for (i=0 ; i<arguments.length ; i++){
        
        prod = prod * arguments [i];

    }

    return prod;
    

  }else if (arguments.length === 1){

    return arguments[0];

  }else{

    return 0;

  }


}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

    let tamano;
    let narr;

    narr = arreglo.filter(elemento => elemento > 18);
    
    tamano = narr.length;


    return tamano;


}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   

    switch (numeroDeDia){

    case 1:
    return 'Es fin de semana';
    break;

    case 2:
    return 'Es dia Laboral';
    break;

    case 3:
    return 'Es dia Laboral';
    break;

    case 4:
    return 'Es dia Laboral';
    break;

    case 5:
    return 'Es dia Laboral';
    break;

    case 6:
    return 'Es dia Laboral';
    break;

    case 7:
    return 'Es fin de semana';
    break;

    default:
    break;

    }


  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let cadena;
  let indice;
  let nuevonumero;

  cadena = n.toString();
  indice = cadena[0];
  nuevonumero = parseInt(indice);

  if(nuevonumero === 9){

    return true; 

  }else{

    return false;

  }

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  let longitud = arreglo.length;

  if(longitud === 1){

    return 'Ingrese más de un elemento al arreglo para ser validado.'
   
  }else{

  let resultado;
  resultado = arreglo.every(e => arreglo[0] == e );

    return resultado;

  }

} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:

  let meses;

  meses = array.filter(e => (e === 'Enero' || e === 'Marzo' || e === 'Noviembre'));

  if(meses.length < 3){

    return 'No se encontraron los meses pedidos';

  }else{

    return meses;

  }
  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:


  if(array.every(e => e >= 0 && e <=200)){

      let one;

  one = array.filter(e => e > 100);

  return one;

  }else {

    return 'Ingrese un entero entre 0 y 200';

  }


}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  let xnumero = [];
  let cont = 0;
 

  

  for(i=numero + 2 ; i <= numero + 20 ; i=i+2){
      cont ++;
      
      xnumero.push(i);

      if(i === cont) {

      return 'Se interrumpió la ejecución';
      break;

      }
      
  }

  return xnumero;

}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

    let arreglo = [];
    let cont = 0;

    for(i = numero+2; i <= numero + 20; i = i+2){
        cont++;

        if(cont === 5) {

          i= i-2;
          continue;

        }else if(cont === 11){

          break;

         }else{

          arreglo.push(i);

        } 

    }

    return arreglo;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
