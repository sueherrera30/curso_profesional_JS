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
