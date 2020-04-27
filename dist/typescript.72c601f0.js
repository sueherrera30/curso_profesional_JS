// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"ejercicios/typescript/index.ts":[function(require,module,exports) {
console.log("hello typescript"); // estoy agregando typado a argumentos

function add(a, b) {
  return a + b;
} //si pasamos mouse dice que es, es un numero.
//le estamos hacendo analiis estatico


var sum = add(2, 3); // basic 123 TYPESCRIPT
//BOOLEAN
//por si solo sabra el tipo pero, Podemos ser mas explicitos.
// asignamos el typo nates de asignar valor.

var muted = true;
muted = false; // ya no podremos asignar otro tipo como string
// si descomentas saldrá error por que no es el tipo.
// muted= 4;
//NUMEROS

var numerador = 42;
var denominador = 6;
var resultado = numerador / denominador; //STRING

var nombre = 'sue'; // ARRAYS
// POodemos decidir si queremos que sean diversos
// o si queremos poner una especificación ya desidida.
// aqui especificaré de que tipo son mis arreglos.

var people = [];
people = ['isabel', 'nicole', 'raul']; //ojo aqui: cuando pongo el punto me 
//indica que metodos tengo disponibles :D
// si pongo un numero, me regaña,
// people.push(2);
// podemso tenerlo mezclado:

var peopleAndNumbers = [];
peopleAndNumbers.push('suerox');
peopleAndNumbers.push(7); // ENUM
//conjunto de valores, que son lo que son no hay mas,
// si tenemos que asignar un valor debe ser de las que se eligio
// por ejemplo colores: rojo, verde etc.

var Color;

(function (Color) {
  Color[Color["Rojo"] = 0] = "Rojo";
  Color[Color["Verde"] = 1] = "Verde";
  Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));

var colorFavorito = Color.Verde; // tambien puedes dar el valor escrito pero es mejor hacer referencia al obj que ya tieens 
// AL HACER UNA LISTA DE VALORES, se arrojara el indice.
// para tener la palabra, semos explicitos, ponemos significado 

var Color2;

(function (Color2) {
  Color2["Rojo"] = "Rojo";
  Color2["Verde"] = "Verde";
  Color2["Azul"] = "Azul";
})(Color2 || (Color2 = {}));

var colorFavorito2 = Color2.Verde; // me arrojara un numero 

console.log(" mi color favorito es " + colorFavorito2); //ANY
// es como un comodin nos permite recibir varios tipos cuando
// no sabemos que recibimos 

var comodin = 'Joker';
comodin = {
  type: 'Wildcard'
}; //OBJECT 

var someObject = {
  type: 'Holito'
}; // te permite ser especifico.
// js funcione tman argumentos y regresan valor en type podemso ser explicitos 
// como deben ser argumntos, podemos prover informacion de cual es el valor que debes regresar a la funcion
// despues de parentesis, agregamos el tipo que regresa.

function add2(a, b) {
  return a + b;
} //al poner los parentesis, ya me dice que debe regresar :D, 
// sy esta importada ayuda,


var sum2 = add(1, 4); //aveces funciones regresan otras funciones:
// para deficinir que regresa funcion con lo que recibe usamos:
// () => 
// (number) => number

function createAdder(a) {
  return function (b) {
    return b + a;
  };
}

var addFour = createAdder(4);
var fourPlus6 = addFour(4);

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

;
var sue = fullName('suerox', 'herrera'); // si no tengo la info, y no pongo argumento, me marca error entonces 
// indicar que sea opcional:
// usamos signo de interrogacion  entonces permitira que 
// sea undefinded o string
//VALOR OPCIONAL

function fullName2(firstName, lastName) {
  return firstName + " " + lastName;
}

; //VALOR POR OMISIÓN
// despues del tipado poneos = mas l oque queremos poner como default:

function fullName3(firstName, lastName) {
  if (lastName === void 0) {
    lastName = 'Martinez calcetines';
  }

  return firstName + " " + lastName;
}

;
var name2 = fullName3('sue');
console.log(name2);
var Colorcito;

(function (Colorcito) {
  Colorcito["Rosa"] = "Rosa";
  Colorcito["Verde"] = "Verde";
})(Colorcito || (Colorcito = {})); // cuando tenemos un interfaz se vuelve un tipo
// mi variable sera del tipo rectangulo.


var rect = {
  ancho: 4,
  alto: 3,
  // opcion
  color: Colorcito.Rosa
}; // si trato de tipar algo, pero no completo todo,
// dara error, pedira, sera requerida.
// podemos poner parametros que vengan de esta interfaz

function area(r) {
  //autocompleta.
  return r.ancho * r.alto;
}

var areaRect = area(rect);
console.log(areaRect); // si aplicamos metodo tu string nos dara [object, object]
//  console.log(rect.toString())
// los objetos herederan la funcion 

rect.toString = function () {
  return "Un rectangulo " + this.color;
};

console.log(rect.toString()); // definene la FORMA EXACTA QEU DEBE TENER UN OBJETO
// no podemos agregar una propiedad de mas o de menos, si quiero ponerla 
// opcional, debo marcarla.
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58436" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ejercicios/typescript/index.ts"], null)
//# sourceMappingURL=/typescript.72c601f0.js.map