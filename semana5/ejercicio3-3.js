const departamentos = [
  {
    marca: "Grupo Caral",
    imagen:
     "https://www.grupocaral.com.pe/villaconvivium/wp-content/uploads/2021/10/Fachada-CV2.png",
    proyecto: " Villa Convivium 2",
    distrito: "Magdalena del Mar",
    m2 : "71 m2",
    precioOferta: 48000,
    precioNormal: 56400,
    calificacion: 2,
    caracteristicas: {
      dormitorios: "Dormitorios 3",
      baños: "2",
      ubicado: "Piso 5",
      balcon: true,
      estacionamiento: true, 
      vendedor: "Contacto Patricia Alvarez ",
    },
  },
  {
    marca: "V&V Inmobiliaria",
    imagen:
      "https://vyv.pe/wp-content/uploads/2021/06/BALCONES.jpg", 
    proyecto: "Paseo la Arboleada ",
    distrito: "Surco",
    m2: "81 m2",
    precioOferta: 65000,
    precioNormal: 75000,
    calificacion: 5,
    caracteristicas: {
      dormitorios: "Dormitorios 4",
      baños: "3",
      ubicado: "Piso 8", 
      balcon: true,
      estacionamiento: false, 
      vendedor: "Contacto Jose Quispe ",
    },
  },
  {
    marca: "Albamar",
    imagen:
      "https://www.albamar.com.pe/uploads/fachadas-nueva-web/f-point-sb-380x330.jpg",
    proyecto: "Point Santa Beatriz",
    distrito: "Victoria",
    m2: "68 m2",
    precioOferta: 63500,
    precioNormal: 65000,
    calificacion: 4,
    caracteristicas: {
      dormitorios: "Dormitorios 2",
      baños: "1",
      ubicado: "Piso 10", 
      balcon: false,
      estacionamiento: true,
      vendedor: "Contacto Marian Peralta",
    },
  },
  {
    marca: "CAPAC Asociados",
    imagen:
      "https://www.capacasociados.com/img/proyectos/lima/2022-04-06-281.jpg",
    proyecto: "Lima Barranco",
    distrito: "Chorrillos",
    m2: "55 m2", 
    precioOferta: 58000,
    precioNormal: 62000,
    calificacion: 5,
    caracteristicas: {
      dormitorios: "Dormitorio 2",
      baños: "2",
      ubicado: "Piso 15",
      balcon: true,
     estacionamiento: true,
      vendedor: "Contacto Henry Savatini",
    },
  },
];


  const container = document.querySelector(".container"); 

    departamentos.map((departamento) => {
  
    container.innerHTML += ` 
  <div class="card">
      <h4 class="title">${departamento.marca}</h4>
        <img
            src=${departamento.imagen}
            alt=""
            width="300"
            />
        <p class="proyecto"> ${departamento.proyecto}</p>
        <p class="distrito"> ${departamento.distrito}</p>
        <p class="m2">${departamento.m2}</p>
        <p class="dormitorio">${departamento.caracteristicas.dormitorios}</p>
         <p class="ubicado">${departamento.caracteristicas.ubicado}</p>
        <p class="vendedora">${departamento.caracteristicas.vendedor}</p>
        <div class="container-price"> 
          <p class="price">Precio: US$/ ${departamento.precioNormal}</p>
          <p class="sale-price">Oferta: US$/ ${departamento.precioOferta}</p>
        </div>
        <button class="btn-buy">Comprar</button>
  </div>
   `;
});

