console.log("hello typescript");

// estoy agregando typado a argumentos
function add(a: number,b: number) {
  return a + b;
}
//si pasamos mouse dice que es, es un numero.
//le estamos hacendo analiis estatico
const sum = add(2,3);

// basic 123 TYPESCRIPT

//BOOLEAN
//por si solo sabra el tipo pero, Podemos ser mas explicitos.
// asignamos el typo nates de asignar valor.
let muted: boolean = true;
muted = false;

// ya no podremos asignar otro tipo como string
// si descomentas saldrá error por que no es el tipo.
// muted= 4;

//NUMEROS
let numerador:number = 42;
let denominador:number = 6;
let resultado = numerador/denominador;

//STRING
let nombre: string = 'sue';

// ARRAYS
// POodemos decidir si queremos que sean diversos
// o si queremos poner una especificación ya desidida.

// aqui especificaré de que tipo son mis arreglos.
let people: string[] = [];
people = ['isabel','nicole', 'raul'];

//ojo aqui: cuando pongo el punto me 
//indica que metodos tengo disponibles :D

// si pongo un numero, me regaña,
// people.push(2);

// podemso tenerlo mezclado:

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push('suerox');
peopleAndNumbers.push(7);

// ENUM
//conjunto de valores, que son lo que son no hay mas,
// si tenemos que asignar un valor debe ser de las que se eligio
// por ejemplo colores: rojo, verde etc.

enum Color {
  Rojo,
  Verde,
  Azul,
}

let colorFavorito: Color = Color.Verde;
// tambien puedes dar el valor escrito pero es mejor hacer referencia al obj que ya tieens 

// AL HACER UNA LISTA DE VALORES, se arrojara el indice.
// para tener la palabra, semos explicitos, ponemos significado 

enum Color2 {
  Rojo = 'Rojo',
  Verde = 'Verde',
  Azul = 'Azul',
}

let colorFavorito2: Color2 = Color2.Verde;
// me arrojara un numero 
console.log(` mi color favorito es ${colorFavorito2}`)

//ANY
// es como un comodin nos permite recibir varios tipos cuando
// no sabemos que recibimos 

let comodin: any = 'Joker';
comodin = { type: 'Wildcard'};
//OBJECT 

let someObject: object =  { type: 'Holito'};

// te permite ser especifico.

// js funcione tman argumentos y regresan valor en type podemso ser explicitos 
// como deben ser argumntos, podemos prover informacion de cual es el valor que debes regresar a la funcion

// despues de parentesis, agregamos el tipo que regresa.

function add2(a: number, b: number): number  {
  return a + b;
}

//al poner los parentesis, ya me dice que debe regresar :D, 
// sy esta importada ayuda,
const sum2 = add(1,4);

//aveces funciones regresan otras funciones:
// para deficinir que regresa funcion con lo que recibe usamos:
// () => 
// (number) => number
function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  }
}
const addFour = createAdder(4);
const fourPlus6 = addFour(4);

function fullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
};
const sue = fullName('suerox', 'herrera');

// si no tengo la info, y no pongo argumento, me marca error entonces 
// indicar que sea opcional:
// usamos signo de interrogacion  entonces permitira que 
// sea undefinded o string

//VALOR OPCIONAL
function fullName2(firstName: string, lastName?: string): string {
  return `${firstName} ${lastName}`;
};

//VALOR POR OMISIÓN
// despues del tipado poneos = mas l oque queremos poner como default:

function fullName3(firstName: string, lastName: string = 'Martinez calcetines'): string {
  return `${firstName} ${lastName}`;
};
const name2 = fullName3('sue');
console.log(name2);
// log dara:
// sue martinez calcetines 


// INTERFACES 
// nos permiten declarar la forma que tiene un objeto
// ayuda a auntocompletado y errores

interface Rectangulo {
  ancho: number,
  alto: number,
  color?: Colorcito;
}


enum Colorcito {
  Rosa = "Rosa",
  Verde = "Verde",
}
// cuando tenemos un interfaz se vuelve un tipo
// mi variable sera del tipo rectangulo.
let rect: Rectangulo = {
  ancho: 4,
  alto: 3,
  // opcion
  color: Colorcito.Rosa,
}

// si trato de tipar algo, pero no completo todo,
// dara error, pedira, sera requerida.

// podemos poner parametros que vengan de esta interfaz
function area(r: Rectangulo): number {
  //autocompleta.
  return r.ancho * r.alto;
}

const areaRect = area(rect);
console.log(areaRect);


// si aplicamos metodo tu string nos dara [object, object]
//  console.log(rect.toString())
// los objetos herederan la funcion 

rect.toString = function() {
  return `Un rectangulo ${this.color}`
};
console.log(rect.toString());


// definene la FORMA EXACTA QEU DEBE TENER UN OBJETO
// no podemos agregar una propiedad de mas o de menos, si quiero ponerla 
// opcional, debo marcarla.
