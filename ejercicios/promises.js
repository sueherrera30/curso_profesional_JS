//promesa que nos devolcera lso id de las pelicula mas populares:
// cuando queremos usar sync await , debemos pasar al inicio de la funcion la palabra reservada : async
// async await : siemrpe va a regresar una promesa.
// el aeait siempre dentro de funcion asincrona ester, nos ayudsará a pausar la ejecución de la función 
//y resumir en cuanto larespuesta venga.
// try and catch, solo son para encapsular el codigo y permitir que se pueda manejar errores si hay.
// SYNawait es una forma ms limpia de hacer procesos asincronos.
// AWAIT espera hasta que la funcion (PROMISES) resuelva or rechace.
 
// en promesas: 
// In conclusion, when we call the promise if it executes successfully the .then method 
// is called and we get back “Answer text immediately” otherwise if the promise fails we get back,
//  “Not in the mood to text back”.

// FOR OF : 
//nos da cada uno de los valores que esta en el arreglo,

// PROMISE.ALL _>  VA A ESPERAR A QUE  todas las promesas se resuelvan.
//esta igual nos regresa una promesa
//con los valores ya resueltos, pero estos ya van a ser objtos con la informacion esperada.
// con fetch:
const apiKey = 'b89fc45c2067cbd33560270639722eae';
// function getMovie(id) {
//   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  
// }

function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    fetch(url)
    .then(response => response.json())
    .then(data => data.results = console.log(data, data.results));
   
  }
  getPopularMovies();

  // PODEMOS Hacer peticiones en paralelo: con promises.all
 // de una lista de promesas, enseñar la primera en cumplirse --  no hay garantia de que sea la misma, todo depende de la red, el api etc.
 // promise.race
// request:
 async function getPopularMoviesAsync(n = 3) {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
  const result = await fetch(url);
  const data = await result.json();
  console.log(data);
 }
getPopularMoviesAsync();

