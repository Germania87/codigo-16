const nombres = prompt("Ingrese nombres:");
const sexo = prompt("Ingrese sexo(M/F):").toLowerCase();
const edad = Number(prompt("Ingrese edad:"));
const nota = Number(prompt("Ingrese nota(0-10):"));

const div = document.querySelector("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");

p1.innerText = "Estudiante: " + nombres.toUpperCase();
p2.innerText = sexo === "m" ? "Sexo: Masculino" : "Sexo: Femenino";

p3.innerText = "Edad: " + edad;
p4.innerText = "Nota: " + nota;

div.appendChild(p1);
div.appendChild(p2);
div.appendChild(p3);
div.appendChild(p4);

const div2 = document.querySelector("#resultado");

const p5 = document.createElement("p");
let titulo = "";

if (sexo === "m") {
  if (edad > 35) {
    titulo = "Sr.";
  } else {
    titulo = "Joven";
  }
} else {
  if (edad > 50) {
    titulo = "Sra.";
  } else {
    titulo = "Srta.";
  }
}

let nivel = "";
let clase = "";

if (nota >= 0 && nota < 3) {
  nivel = "MUY DEFICIENTE";
  clase = "rojo";
} else if (nota >= 3 && nota < 5) {
  nivel = "INSUFICIENTE";
  clase = "azul";
} else if (nota >= 5 && nota < 6) {
  nivel = "SUFICIENTE";
  clase = "amarillo";
} else if (nota >= 6 && nota < 7) {
  nivel = "BIEN";
  clase = "anaranjado";
} else if (nota >= 7 && nota < 9) {
  nivel = "NOTABLE";
  clase = "marron";
} else if (nota >= 9 && nota <= 10) {
  nivel = "SOBRESALIENTE";
  clase = "verde";
}


p5.innerText = `${titulo} ${nombres.toUpperCase()} (${edad} años) tiene ${nota} de nota. Su nivel es ${nivel}`;
p5.className = clase;

div2.appendChild(p5);