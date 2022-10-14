// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
// alert ('Un Mensaje');

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
// document.write('Hello World');

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// document.write(3+5);

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
// let nombreUsuario = prompt('Hola, cómo te llamas?');
// document.write('Hola '+nombreUsuario);

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// let primerNum = parseInt(prompt('Ingresa un número')) ;
// let segundoNum = parseInt(prompt('Ingresa otro número'));
// document.write(primerNum+segundoNum);

// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// let primerNum = parseInt(prompt('Ingresa un número')) ;
// let segundoNum = parseInt(prompt('Ingresa otro número'));
// if (primerNum > segundoNum) {
//     document.write(primerNum)
// } if (segundoNum > primerNum) {
//     document.write(segundoNum)
// } 

// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// let primerNum = parseInt(prompt('Ingresa un número')) ;
// let segundoNum = parseInt(prompt('Ingresa otro número'));
// let tercerNum = parseInt(prompt('Ingresa otro número'));

// if (primerNum > segundoNum & primerNum > tercerNum) {
//     document.write(primerNum)
// } if (segundoNum > primerNum & segundoNum > tercerNum) {
//     document.write(segundoNum)
// } if(tercerNum > primerNum & tercerNum > segundoNum) {
//     document.write(tercerNum)
// }

// 8.- Escribe un programa que pida un número y diga si es divisible por 2
// let dividendo = parseInt(prompt('Ingresa el número que quieras saber si es divisible por 2'));
// const divisor = 2;
// let obtenerResto = dividendo%divisor;
// if (obtenerResto === 0) {
//     document.write('El número ingresado es divisible por 2')
// } else {
//     document.write('El número no es divisible por 2')
// }

// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// let frase = prompt('Ingresa una frase');

// for (let i = 0; i < frase.length; i++) {
//     if (frase.charAt(i) === 'a' || frase.charAt(i) === 'á' || frase.charAt(i) === 'e' || frase.charAt(i) === 'é' || frase.charAt(i) === 'i' || frase.charAt(i) === 'í' || frase.charAt(i) === 'o' || frase.charAt(i) === 'ó' || frase.charAt(i) === 'u' || frase.charAt(i) === 'ú') {
//         document.write(frase.charAt(i));
//     }    
// }

// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
// let dividendo = parseInt(prompt('Ingresa un número y veremos si es divisible por 2, 3, 5 o 7'));
// if (dividendo % 2 === 0 || dividendo % 3 === 0 || dividendo % 2 === 5 || dividendo % 2 === 7) {
//     document.write('Si es divisible por unos de los números anteriormente mencionados');    
// } else {
//     document.write('El número ingresado no es divisible ')
// }

// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
// let number = parseInt(prompt('Ingresa un número'))

// if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
//   if (number % 2 === 0) {
//     document.write('Es divisible por 2')
//   }
//   if (number % 3 === 0) {
//     document.write('Es divisible por 3')
//   }
//   if (number % 5 === 0) {
//     document.write('Es divisible por 5')
//   }
//   if (number % 7 === 0) {
//       document.write('Es divisible por 7')
//   }  
// } else {
//   document.write('No es divisible por ninguno de los posibles divisores')
// }




