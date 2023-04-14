/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   // var arreglo = Object.entries(objeto);
   // return arreglo;
   // devuelve array con los pares key/value

var arreglo=[];
for (var propiedad in objeto){ 
    arreglo.push([propiedad,objeto[propiedad]])
};
return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

var objeto={};
for(let i=0; i<string.length; i++){
   if (objeto.hasOwnProperty(string[i])){
      objeto[string[i]] = objeto[string[i]] + 1;
   } else {
      objeto[string[i]] =1
   };
};
return objeto;
}
//hasOwnProperty devuelve booleano
// determino las propiedades como letras y los valores como las repeticiones


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

// var final = "";
// var arreglo =[];
// var arr = string.split();
// for (let i=0; i<arr.length; i++){
//    if (arr[i]===arr[i].toLowerCase()){
//       arreglo.push(arr[i]);
//    } else {arreglo.unshift(arr[i])
// };
// };
// arreglo.toString(final);
//    return final;
// }


// var arreglo = [];
// for (let i=0; i<string.length; i++){
//    if (string[i]===string[i].toLowerCase()){
//       arreglo.push(string[i]);
//    } else {arreglo.unshift(string[i])
// };
// };   
// };
// return arreglo;



// var a = [];
// var b = [];
// for (i = 0; i < string.length; i++) {
//  if (string[i] === string[i].toUpperCase()){
//    a.push(string[i])
// } else {
//    b.push(string[i])
// } 
// }
// return a.join("") + b.join("");




var may ='';
var min ='';
for (let i=0; i<string.length; i++){
   if (string[i]===string[i].toLowerCase()){
      min = min + string[i];
   } else { may = may + string[i];
   };
};
return may + min;
}

// var may ='';
// var min ='';
// for (let i=0; i<string.length; i++){
//    if (string[i]===string[i].toLowerCase()){
//       min = min + string[i];
//    } else { may = may + string[i];
//    };
// };
// return may + min;






function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

// var arr= frase.split(' ');

// for(let i=0; i<arr.length; i++){
//   return arr[i].split("").reverse().join("");
// };

// return arr.toString('');
// }

var arr= frase.split(' ');
var arreglo= arr.map(function(ele){
  return ele.split('').reverse('').join('');
});
return arreglo.join(' ');
}

//porque no toString???? toString junta los elementos con las comas, join no

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:


   // var num= numero.toString();

   // if (num===num.split('').reverse().join('')){
   //    return 'Es capicua'
   // } else return 'No es capicua';

// por que no funciona asi pero con ===? porque el segundo es string ergo no es mismo tipo de dato.
// debo usar Number() para castearlo como numero

if (numero==numero.toString().split('').reverse().join('')){
   return 'Es capicua'
} else return 'No es capicua';
}

// otra Forma
// var numString= numero.toString();
// var invertido= numString.split('').reverse().join('');

//    if(numString===invertido){
//    return 'Es capicua';
// } else return 'No es capicua'
// }



function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

var string2  = "";

for (let i=0; i<string.length; i++){
   if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c'){
      string2 = string2 + string[i];
   };
};
return string2;
}

// var string2  = "";

// for (let i=0; i<string.length; i++){
//    if (string[i] === 'a' || string[i] === 'b' || string[i] === 'c'){
//       continue;
//    } else string2 = string2 + string[i];
// };
// return string2;
// }
//
//    con split
   //    var arreglo = string.split('');

//    var arreglo2 = arreglo.filter(function(ltr){
//      return ltr !== 'a' && ltr !== 'b' && ltr !== 'c';
//    });
//    return arreglo2.join('');
// }
//
//   con splice
//
// var arreglo = string.split('');

// for (let i=0; i<arreglo.length; i++){
//    if (arreglo[i] === 'a'|| 'b' || 'c'){
//      arreglo.splice(i,1);
//    };
// } return arreglo.join('');
// }


function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

var arreglo= arrayOfStrings.sort(function(a,b){
   return a.length - b.length;
});

return arreglo;
}

// var ayuda=true;
// while(ayuda){
//    ayuda=false;
//    for(let i=0; i<arrayOfStrings.length-1; i++){
//       if (arrayOfStrings[i].length>arrayOfStrings[i+1].length){
//          var ayuda2 = arrayOfStrings[i];
//          arrayOfStrings[i] = arrayOfStrings[i+1];
//          arrayOfStrings[i+1] = ayuda2;
//          ayuda = true;
//       }
//    }
// }   
// return arrayOfStrings;
// }
//
// VER MIL VECES!!! rulo para comparar todos los elementos y ordenar

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

//
// array1 = [4,2,3]
// array2 = [1,3,4]

var arreglo=[];

for (let i=0; i<array1.length; i++){
   for (let j=0; j<array2.length; j++){
      if (array1[i]===array2[j]){
         arreglo.push(array1[i]);
      } 
   }
}
return arreglo;
}

// podria arroja elementos duplicados?????????????/


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
