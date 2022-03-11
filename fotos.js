var fotos = [
  'gato0.jpg',
  'gato1.png',
  'gato2.png',
  'gato3.jpg',
  'gato4.jpg'
];
const fotoFolder = './images/gatos/';
const foto = document.getElementById('foto');
var titulo = document.getElementById('titulo');
var aSiguiente = document.getElementById('aSiguiente');
var aAnterior = document.getElementById('aAnterior');
var fotoActual = 0;

foto.src = fotoFolder + fotos[fotoActual];

function cambia () {
  titulo.style.color = 'red';
}


var siguiente = function() {
  if (fotoActual < fotos.length - 1) {
    fotoActual = fotoActual + 1;
    foto.src = fotoFolder + fotos[fotoActual];
    aAnterior.style.display = 'block';
  }
  if (fotoActual === fotos.length - 1 ) {
    aSiguiente.style.display = 'none';
  }
}

function anterior() {
  if (fotoActual > 0) {
    fotoActual = fotoActual - 1;
    foto.src = fotoFolder + fotos[fotoActual];
    ocultarAnterior();
  }
  if (fotoActual < fotos.length  -1 ) {
    aSiguiente.style.display = 'block';
  }
};

function ocultarAnterior() {
  if (fotoActual === 0) {
    aAnterior.style.display = 'none';
  }
}
ocultarAnterior();