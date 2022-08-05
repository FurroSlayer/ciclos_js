// Hola chicos, les dejo una serie de ejercicios, si tienen dudas me avisan

// "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  function obtenerMayor(x, y) {
  if (x > y) {
    console.log(x);
  } else {
    console.log(y);
  }
  
  
}
obtenerMayor();

  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
function mayoriaDeEdad(edad) {
  if(edad >= 18) {
    console.log('allowed');
  } else {
    console.log('not allowed');
  }
}
mayoriaDeEdad();

//Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  //se pueden hacer 2 soluciones//
function conection(status) {
  //1

  if (status == 1) {
    console.log('online');
  } else if (status == 2) {
    console.log('away');
  } else {
    console.log('offline');
  }
}

// 2
function conection(status) {
  switch (status) {
    case 1: 
    console.log('online');
      break;
    case 2:
      console.log('away');
      break;
    default:
      console.log('offline');
      break;
  }
}
conection();


  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
//En este problema tambien se puede usar switch//

//solucion con condicionante if//
function saludo(idioma) {
  if (idioma == 'aleman') {
    console.log ('Guten Tag!');
  }else if (idioma == 'mandarin') {
    console.log ('Ni hao!');
  }else if (idioma == 'ingles') {
    console.log('Hello');
  }else{
    console.log('hola!');
  }
}

//con switch seria asi//
function saludo(idioma){
  switch (idioma) {
    case 'aleman':
      console.log('Guten Tag!');
      break;
    case 'mandarin':
      console.log('Ni hao!');
      break;
    case 'ingles':
      console.log ('Hello!');
      break;
    default:
      console.log('hola!');
  }
}
saludo();

  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
function colors(color) {
  switch (color) {
    case 'blue':
      console.log('this is blue');
      break;
    case 'red':
      console.log('this is red');
      break;
    case 'green':
      console.log('this is green');
      break;
    case 'orange':
      console.log('this is orange');
      break;
    default:
      console.log('color not found');
  }
}
colors();

  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
function esDiezOCinco(numero) {
  if(numero == 5 || numero == 10) {
    console.log('true');
  } else{
    console.log('false');
  }
}
esDiezOCinco();

  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
function estaEnRango(numero) {
  if(numero >= 20 && numero <= 50 ) {
    console.log('true');
  }else {
    console.log('false');
  }
}
estaEnRango();

  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
function esEntero(numero) {
  if(numero == Math.floor(numero)) {
    console.log('true');
  } else {
    console.log('false');
  }
}
esEntero();

  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
function fizzBuzz(numero) {
  if (numero % 3 == 0) {
    if (numero % 3 == 0 && numero % 5 == 0){
      console.log('fizzbuzz');
    } else {
      console.log('fizz');
    }
  } else if (numero % 5 ==0 ) {
    console.log('buzz');
  } else {
    console.log(numero);
  }
}
fizzBuzz();

  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
function operadoresLogicos(num1, num2, num3) {
  if (0 == num1 || 0 == num2 || 0 == num3) {
    console.log('error');
  } else if (num1 < 0 || num2 < 0 || num3 <0) {
    console.log('hay negativos');
  } else if (num1 > num2 && num1 >num3 && num1 > 0 ) {
    console.log('numero 1 es mayor y positivo');
  } else if (num3 > num1 && num3 > num2) {
    console.log(++num3);
  } else {
    console.log('false');
  }
}
operadoresLogicos();

  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
function esPrimo(numero) {
  if (numero ===2) {
    return true;
  } else if (numero <2) {
    return false;
  }for (let i=2 ; i < numero; i ++) {
    if (numero % i ===0){
      return false;
    }
  }
  return true;
}
console.log (esPrimo());


  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
function esVerdadero(valor){
  if (valor == true) {
    console.log('soy verdadero');
  } else {
    console.log('soy falso');
  }
}
esVerdadero();

  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
function tablaDelSeis(){
  let tabla = [];

  for(let i=0 ; i < 11 ; i ++) {
    tabla.push (i * 6);
  }
  return tabla;
}
console.log(tablaDelSeis());

  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
function tieneTresDigitos(numero){
  if (numero > 99 && numero < 1000){
    console.log('true');
  } else {
    console.log('false');
  }
  
}
tieneTresDigitos();

  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
function doWhile(numero) {
  numero = 1;
  let count =8;
  let result = 0;

  do{
    result = result + 5;
    count = count -1;
  } while (count !==0);
  return (result + numero);
}
console.log(doWhile());