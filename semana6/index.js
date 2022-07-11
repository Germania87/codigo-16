const inputPassword = document.querySelector("#input-password");
const inputPasswordConfirm = document.querySelector("#input-password-confirm");
const checkBoxShowPassword = document.querySelector("#checkbox-show-password");
const textError = document.querySelector(".text-error");
const inputPhoneNumber = document.querySelector("#input-phone-number");
const errorEmail = document.querySelector("#error-email");

checkBoxShowPassword.onchange = function () {
  // if (this.checked) {
  //   inputPassword.type = "text"
  // } else {
  //   inputPassword.type = "password"
  // }

  // Conversion a ternario
  inputPassword.type = this.checked ? "text" : "password";

};


// Cuando hablamos del evento del teclado
// * onkeydown => El el primer evento que se ejecuta a presionar la tecla
// * onkeypress  => Es el evento que se ejecuta mientras se presiona la tecla
// * onkeyup => Es el ultimo evento que ese ejecuta cuando se levanta la tecla

inputPasswordConfirm.onkeyup = function () {
  //? paso1 : Validar que el password tengo contenido
  //? si el password esta vacio lanzar una alerta indicando que debe completar el password para poder escirbir en
  //? este input
  const password = inputPassword.value;
  const confirmPassword = this.value;
  if (password === "") {
    alert("debe completar el password para poder escirbir en este input");
    this.value = "";
    inputPassword.focus();
    return;
  }

  //? Paso2: Verificar que el texto sea igual al del input password
  if (password !== confirmPassword) {
    // debemos mostrar un error
    console.log("los passwords no son iguales");
    textError.style.display = "block";
  } else {
    textError.style.display = "none";
    console.log("si son iguales");
  }
};


inputPhoneNumber.onkeyup = function () {
  const valor = this.value;
  //? Podemos convertir el texto a un array y evaluar si alguno de ellos es un string
  //? si es asi eliminar del array y luego convertir ese array a un string sea
  //? el value del input
  const caracteres = valor.split("");

  let newValue = "";
  // isNaN: is not a number
  caracteres.forEach((caracter) => {
    // Si es un numero entonces agregalo a newValue
    if (!isNaN(Number(caracter))) {
      newValue += caracter;
    }
  });

  // Luego de iterar el array y verificar que solo agregue los numeros
  // a la variable newValue decimos que el valor del input sera newValue
  this.value = newValue;
};

const inputEmail = document.querySelector("#input-email");

inputEmail.onkeyup = function () {
  const value = this.value;

  const regex =/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  
  errorEmail.style.display = regex.test(value) ? "none" : "block";
  
     //console.log(regex.test(value));
  // Reto
  //Si regex es falso muestren un mensaje de error
  // Si es verdade no muestren nada

    if(regex.test(value)) {
      inputEmail.style.borderColor = "green";
    } else {
      inputEmail.style.borderColor = "red";
    }

};


// Existe una opcion llamada expresiones regulares en ingles regex
// Esto es un conjunto de caracteres que nos permite validar sintaxis,
// es decir como esta escrito