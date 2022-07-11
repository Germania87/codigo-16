// una funcion es un bloque de codigos que relaiza una acción
// la sintaxis de una function se divide en 3: 
// lo mas clasico y antiguo
function nombreDeLaFunction() {
    // en este espacio podemos escribir codigo
    const alumnos = ['pepe', 'juan', 'maria', 'luisa', 'lex','lucas','klark'];

for (let alumno of alumnos) {
    console.log(alumno);
    }
}

//Nota para hacer que una funcion se ejecute debems llamarla
// ESta accion que acabamos de hacer se llama ejecutar a la funcions
nombreDeLaFunction();

 function cuboDeunNumero() {
    return Math.pow(10,3)
 }
 
 // recuerden que esta es llamar la function 
 const resultado = cuboDeunNumero();

 console.log("resultado", resultado)

 // una funcionalidad es el poder de enviar valores a las funciones
 // Lo que esta dentro del parentesis es una function se llama parametros
 // y podemos enviar n parametros
 //* Los parametros deben estar separados por comas

 function potenciaDeunNumero(numero, potencia) {
    return Math.pow(numero, potencia)
 }

 const ejemplo1 = potenciaDeunNumero(4,3); // 4 al cubo
 const ejemplo2 = potenciaDeunNumero(6,2); // 6 al cuadrado
 console.log(ejemplo1);
 console.log(ejemplo2);
 
//Implementar un algoritmo que reciba 2 argumentos y los sume,
//el resultado se deberá imprimir en pantalla.
function sumar(numero1, numero2) {
  // Cuado hagamos una funcion siempre debemos tener en cuenta que casos
  // pueden sucedr
  // Eso se llama validacion
  const n1 = Number(numero1);
  const n2 = Number(numero2);

  if (isNaN(n1) || isNaN(n2)) {
    return "No se pueden sumar";
  }

  return n1 + n2;
}

console.log("Suma", sumar(1, "10"));

// paso 1 creo una funcion que me retorne el factorial
function calcularFactorial(numero) {
    // 4 = 1 x 2 x 3 x 4 = 24
const number = Number(numero);

// Nota el return aparte de retornar un valor da fin a la
// ejecucion de la funcion 
  if (isNaN(number)) {
    return "Esto no se puede hacer porque no es un numero";
  }

  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  return resultado;
}

function imprimirFactorial() {
  const inputValor = document.getElementById("input_number").value;
  const resultado = calcularFactorial(inputValor);

  const container = document.querySelector(".container")
  container.innerHTML +="<p>Factorial de" + inputValor + ": " + resultado + "</p>";
}
    
const container = document.querySelector(".container");
container.innerHTML += "<p>Factorial de" + inputValor + ": " + resultado + "</p>";



