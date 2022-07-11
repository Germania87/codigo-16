function calcularTabla() {
  const inputNumber = document.querySelector("#input_number_2");
  let container = document.querySelector(".resultado");

  container.innerHTML = "";

  const numero = Number(inputNumber.value);
  // Es es basicamente para limpiar el input
  inputNumber.value = "";

  if (isNaN(numero)) {
    alert("Ingrese un numero valido");
    // Recureden que el return aparte de retonar un valor tambien terminar la ejecucuion
    // de la funcuion en este nos retornarmos pero si tenemos una alert
    // y luego un return sin nada para que en este caso solo se encargue de terminar la ejecucion
    return;
  }

  for (let i = 1; i <= 12; i++) {
    container.innerHTML +=
      "<p>" + numero + " x " + i + " = " + i * numero + "</p>";
  }
}