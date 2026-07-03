function saludo() {

  alert("¡Ya cargó! ¡Hola!");
}

saludo();

// Datos
let nombreDocente = "Ramirez Duran Cristhian Rene";

let materia = "Cultura Digital";

let campus = "Veracruz";

// Mostrar en la página
document.getElementById("titulo").innerHTML =
  "Información Académica";

document.getElementById("docente").innerHTML =
  "📖 Docente: " + nombreDocente;

document.getElementById("alumno").innerHTML =
  "👥 Alumnos:<br>" +
  "Michelle Coello<br>" +
  "Maliyel Aguirre<br>" +
  "Indra Cabrera<br>" +
  "Mario Cristobal<br>" +
  "Yamileth Bendimez<br>" +
  "Joshua Flores";

document.getElementById("materia").innerHTML =
  "🖥 Materia: " + materia;

document.getElementById("campus").innerHTML =
  "📍 Campus: " + campus;

/* GALERÍA INTERACTIVA */

const imagenes =
  document.querySelectorAll(".galeria img");

const modal =
  document.getElementById("modal");

const imagenGrande =
  document.getElementById("imagenGrande");

const cerrar =
  document.getElementById("cerrar");

/* ABRIR IMAGEN */
imagenes.forEach(imagen => {

  imagen.addEventListener("click", () => {

    modal.style.display = "flex";

    imagenGrande.src = imagen.src;
  });

});

/* CERRAR */
cerrar.addEventListener("click", () => {

  modal.style.display = "none";
});

/* CERRAR AFUERA */
modal.addEventListener("click", (e) => {

  if (e.target === modal) {

    modal.style.display = "none";
  }
});

/* GRÁFICA */

const ctx =
document.getElementById("graficaArtistas");

new Chart(ctx, {

  type: "pie",

  data: {

    labels: [

      "🎧 Arctic Monkeys",
      "🐝 Tyler, The Creator",
      "📼 Mac DeMarco",
      "🍂 The Smiths"

    ],

    datasets: [{

      data: [40, 26, 21, 13],

      backgroundColor: [

        "#ff1493",
        "#ff69b4",
        "#8a2be2",
        "#6a5acd"

      ]

    }]
  },

  options: {

    plugins: {

      legend: {

        labels: {

          color: "black",

          font: {

            size: 14
          }
        }
      }
    }
  }
});