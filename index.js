
var h1 = document.getElementById('saludo_grande');
var inputNombre = document.getElementById('nombre');
var gatoImg = document.getElementById('gato');
var osoImg = document.getElementById('oso');
var lista = document.getElementById('lista');
var paises = [
  'Argentina',
  'Chile',
  'Bolivia',
  'Brasil',
  'Paraguay',
  'Perú'
];

function mayorQueDiez(n) {
  if (n > 10) {
    console.log('es mayor!');
  } else if (n === 10) {
    console.log('es igual!');
  }
  else {
    console.log('es menor!');
  }

}

function cargar() {
  // let item = '<li>uno</li>';
  // lista.innerHTML = item;
  for(var i=0; i < paises.length; i++) {
    let item = document.createElement ('li');
    item.innerText = paises[i];
    lista.appendChild(item);
  }
}
cargar();

function gatos(esComunista) {
  let src = './images/gatoNom.jpg'
  if (esComunista) {
    src = './images/gatoComu.jpg'
  }
  gatoImg.src = src
}

function cambiando(estado) {
  switch(estado) {
    case 'uno':
      // pasa tal cosa 
      break;
    case 'pepe':
      // pasa tal otra
      break;
    default:
      // pasa  esto entonces
  }
}

function cambiarOso(ideologia) {
  let src = './images/osos/oso.jpeg'
  switch(ideologia) {
    case 'comunista':
      src = './images/osos/osoComunista.jpg' 
      console.log('iu')
     break;
    case 'capitalista':
      osoImg = './images/osos/osoCapitalista.jpeg'
     break;
    default:
      osoImg.src = src

    }
 }

function oso (esCapitalista) {
  let src = './images/osos/oso.jpg'
  if (esCapitalista) {
    src = './images/osos/osoCapitalista.jpeg'
  }   
  osoImg.src = src
}
function osos(esComunista) {
  let src = './images/osos/oso.jpg'
  if (esComunista) {
    src = './images/osos/osoComunista.jpg'
  }   
  osoImg.src = src
}


function saludar() {
  h1.innerText = 'Hola ' + inputNombre.value;
}

var golosina = {
  nombre: 'guaymallén triple',
  tipo: 'alfajor',
  sabor: 'chocolate'
}

var golosina2 = {
  nombre: 'guaymallén',
  tipo: 'alfajor',
  sabor: 'chocolate'
}

function mostrarNombre () {
  return golosina.nombre
}

class Fruta {
  constructor(nombre, color, semillas, dias) {
    this.nombre = nombre,
    this.color = color,
    this.semillas = semillas,
    this.dias = dias,
    this.mostrarFruta = function() {
      return this.nombre;
    }
  }
}

var mandarina = new Fruta ('Mandarina', 'Anaranjado',true, 7);

// console.log (mandarina);

class Golosina {
  constructor(nombre, tipo) {
    this.nombre = nombre,
    this.tipo = tipo,
    this.tieneAzucar = true,
    this.metodo = function () {
      return 'hola'
    }
  }
}

var guaymayenTriple = new Golosina('guaymayén triple', 'alfajor');
var paraguita = new Golosina('Paragüita', 'Chocolate')
var chupetin = new Golosina ('chupetincito', 'chupetin')
var caramelos = new Golosina ('flyyn paff', 'caramelo')
var cofler = new Golosina ('Cofler', 'Chocolate')

// console.log(guaymayenTriple.nombre)
// console.log(paraguita.nombre)
// console.log(chupetin.nombre)
// console.log(caramelos.nombre)
// console.log('- - - - - - - - -')

var listaDeGolosinas = [
 guaymayenTriple,
 paraguita,
 chupetin,
 caramelos,
 cofler
]

// console.log(listaDeGolosinas[0].nombre)
// console.log(listaDeGolosinas[1].nombre)
// console.log(listaDeGolosinas[2].tipo)
// console.log(listaDeGolosinas[3].tipo)
// console.log('- - - - - - - - -')

for(var i=0; i < listaDeGolosinas.length; i++) {
  // console.log(listaDeGolosinas[i].nombre)
}

// console.log('----------------------')

//for(var i=0; i<1000; i++) {
 // console.log([i] + ' No debo ser vaga')
//}

class Animal {
  constructor (nombre, especie, peso) {
    this.nombre = nombre,
    this.especie = especie,
    this.peso = peso
  }
}

var cebra = new Animal('Cebra', 'mamifero', '90 kg')
var leon = new Animal('León', 'mamifero', '80 kg')
var elefante = new Animal('Elefante', 'mamifero', '6,000 kg')


var animales = [
 cebra,
 leon,
 elefante
]

for(var i=0; i< animales.length; i++) {
  // console.log(animales[i])
}


/*
local scope               vs    global scope
local execution context   vs    global execution context

JavaScript
Node JS

FRONTEND / client / navegador / browser 
BACKEND / servidor / server
BASE DATOS
*/

var pais = 'Argentina';
function unPais() { 
  var pais = 'Paraguay: ';
  console.log(pais + Math.floor(Math.random() * 10000));
}

unPais();

unPais();


unPais();


unPais();


unPais();

console.log(pais);