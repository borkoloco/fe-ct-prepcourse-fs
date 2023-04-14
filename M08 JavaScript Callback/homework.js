/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
//toUpperCase()
//slice(x)

return nombre[0].toUpperCase() + nombre.slice(1);

}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

return cb(num1,num2);

}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
// var suma=0
// for (let i=0; i<arrayOfNumbers.length; i++) {
//    suma = suma + arrayOfNumbers[i]
// };
// cb(suma);

//reduce function(ac,ele){},1 arrancaria desde el 1.sirve para producto

var suma = arrayOfNumbers.reduce(function(ac,ele){
   return ac + ele;
});
cb(suma);
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
// for(let i=0; i<array.length; i++){
//    cb(array[i]);
// };

array.forEach(function(ele){
   cb(ele);
});
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:

   // var arreglo=[];
   // for(let i=0; i<array.length; i++){
   //    arreglo.push(cb(array[i]));
   // };
   // return arreglo;
  
//   var array2 = array.forEach(ele => cb(ele));
//   return array2
// esto me lo paso el nabo de slack...no funciona...se puede hacer que forEach devuelva nuevo arreglo?
   
   // let newArray = [];
   // array.map((e) => newArray.push(cb(e)))
   // return newArray;   

var arreglo = array.map(function(ele){
   return cb(ele);
});
return arreglo;
}






function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   var arreglo = arrayOfStrings.filter(function(str){
      return str[0]==='a'; //sin return no funciona porque no devuelve
   });
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
