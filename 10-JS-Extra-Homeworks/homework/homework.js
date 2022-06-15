// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

    let propiedad = [];
    let key = Object.keys(objeto);
    let valor = Object.values(objeto);


    for(i=0; i<key.length; i++){
      for(j=0; j<valor.length; j++){
        if(i === j){

           propiedad.push([key[i],valor[j]]); 
           
        }
      }
    }

  return propiedad;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

    
    let obj = {};
    let cont = 0;
    let valor = Array.from(string);
    valor.forEach(function(letra){
         
         obj[letra]= (obj[letra] || 0) + 1;

          }

    );

    
    return obj;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
    let nuevo = [];
    let may = [];
    let min = [];
    let cadena = Array.from(s);
    cadena.forEach(function(x){

      if(x === x.toUpperCase()){

        may.push(x);

      }else if(x !== x.toUpperCase()){

        min.push(x);

      }

    });


    nuevo = may.concat(min);

    return nuevo.join('');

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí


  let cadena = str.split('').reverse().join('');

  let separarCadena = cadena.split(' ').reverse().join(' ');

   return separarCadena;


}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  let num;
  let arrayCadena;
  num = numero.toString();
  arrayCadena = Array.from(num);

  nCadena = arrayCadena.reverse().join('');
  
  numeroCadena = parseInt(nCadena);


    if(numero === numeroCadena){

      return 'Es capicua';
    
    }else{

      return 'No es capicua';

    }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

    let carreglo;

    let arreglo = cadena.split('');

    let narreglo = arreglo.filter(function(x){

      if (x !== 'a' && x !== 'b' && x !== 'c') {

          return x;

      }


    });

    carreglo = narreglo.join('');

    return carreglo;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

    

    arr.sort(function(a,b){

      if(a.length < b.length){

        return -1;

      }
    
      if(a.length > b.length){

        return 1;

      }

      return 0;

    });

    return arr;


}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

    let interseccion = [];

    for(i=0; i<arreglo1.length; i++){
       for(j=0; j<arreglo2.length; j++){

          if(arreglo1[i] === arreglo2[j]){

              interseccion.push(arreglo1[i]);

          }

       } 
    }

    return interseccion;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

