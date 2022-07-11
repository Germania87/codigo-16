// container:
const div_container = document.getElementById('container');

// Objetos
class Carro {

    constructor(_color, _velocidad) {
        this.color = _color;
        this.velocidad = _velocidad;
    }

    presentacion() {
        const texto = "Hola soy un carro de color " + this.color
        + " y tengo una velocidad de: " + this.velocidad + "kmh";
        return texto;
    }
}

const carro_rojo = new Carro('ROJO', 200); // instanciar objeto
const carro_azul = new Carro('AZUL', 50); // dar vida al objeto
const carro_verde = new Carro('VERDE', 100); // crear el objeto

div_container.innerHTML += "<p>" + carro_rojo.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_azul.presentacion() + "</p>";
div_container.innerHTML += "<hr>";
div_container.innerHTML += "<p>" + carro_verde.presentacion() + "</p>";

//reto// 

// Utilizando FOR dentro una function "crearCarros(x, color)": 
// - crear X carros.
// - todos del color que recibió la función.
// pero cada carro con velocidades diferentes.
// imprimir todos los carros en el container.

    div_container.innerHTML += "<hr>";
    div_container.innerHTML += "<h2>Crear carros</h2>";

    let miscarros= []
function crearCarros(x,color) {
    for (let i = 0; i <x; i++) {
        const carro = new Carro(color, Math.round(Math.radow()*200))
        div_container.innerHTML += "<p>" + carro.presentacion() + "</p>";
        div_container.innerHTML += "<hr>";
    }
}

const carros = prompt("Inserte el numero de velocidad")
const color = prompt("Inserte el color")
crearCarros(carros, color)