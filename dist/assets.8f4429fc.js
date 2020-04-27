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
})({"assets/MediaPlayer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function MediaPlayer(config) {
  this.media = config.el; // por ahora teniamos el video hardcoeado(video) estaba embebido, pero eso no es practico, por eso es mejor, pasar como parametro un objeto de configuracion 

  this.plugins = config.plugins || []; // vamos a declarar dentro del objeto un array donde pondremos todos los plugins, pasamos a index, para poder llenar este arreglo en la intacia.

  this.initPlugins(); // recordar que al hacer metodos en el prototipo, aqui solo se llama, pero abajo se va a crear con proptype
}

MediaPlayer.prototype.initPlugins = function () {
  // esta funcion hara cositas con todos los plugins que hayamos definido.
  const player = {
    play: () => this.play(),
    pause: () => this.playOrPause(),
    media: this.media,

    get muted() {
      return this.media.muted;
    },

    set muted(value) {
      // if( value === true){
      //     this.media.muted = true;
      // }else {
      //     this.media.muted = false;
      // }
      // es mejor :
      // no estamos trabajando sobre propiedades existentes,NO estamos cambiando directamente el valor de muted
      return this.media.muted = value; // si no através de propuedad virtual, recibimos un valor que hace algo diferente,
    }

  };
  this.plugins.forEach(plugin => {
    plugin.run(player); // en este this se esta haciendo referencia a la instancia de player
    //  este metodo ya pertecece a los plugins, en este caso solo tenemos autoplay, ahi vamso a guardar metodo run.
  }); // por cada plugin recibiremos una accion, por ello vamos a iterarlo.,dentro del foreach ejecutaremos su acciom, llamando a un metodo especifico. 
};

MediaPlayer.prototype.play = function () {
  this.media.play();
};

MediaPlayer.prototype.playOrPause = function () {
  if (this.media.paused === true) return this.media.play();
  return this.media.pause();
};

MediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

MediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

MediaPlayer.prototype.muteOrNoT = function () {
  if (this.media.muted) return this.media.muted = false;
  return this.media.muted = true;
};

var _default = MediaPlayer;
exports.default = _default;
},{}],"plugins/AutoPlay.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
  // recibimos una instacia del mediapleyer.
  if (!player.muted) {
    player.muted = true;
  }

  player.play();
};

var _default = AutoPlay;
exports.default = _default;
},{}],"plugins/AutoPause.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class AutoPause {
  constructor() {
    this.threshhold = 0.25, this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  } // recibe un metodo 


  run(player) {
    //para poder llamar cosas ncesitamos 
    this.player = player; // no funcionaba por que el que ejecuta el video es el IntersectionObserver y cambio el 
    //concepto de this.

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshhold: this.threshhold
    }); // el observador mirara el video que se reproduce.

    observer.observe(this.player.media);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  } // podremos enlistar todos los elementos 
  // en este caso solo hay uno,


  handleIntersection(entries) {
    const entry = entries[0]; // si l oque recibe el intersector, es mayor que a lo del humbral entonces se hara visible.-- por ejeplo si mandar mas de un elemento como las classes, devolvera un arreglo con mas indices.

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === "visible";

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

}

var _default = AutoPause; // en este mdetodo construiremos el intersectionObserver
// Recibe dos argumentos, un handler que va a recibir la información 
// es el que va a observar y el segundo es un objeto de configuración.
// a su vez el hanlder será un metodo de la classe y el objeto de configuración 
// necesitamos pasarle un HUMBRAl -> treshold lo que hara  es DEFINIR  que porciento de 
// elemento de contenedor debe de temner para darte aviso,cada que lleguemos a ese momento el estará observando y nos va a avisar.

exports.default = _default;
},{}],"assets/index.js":[function(require,module,exports) {
"use strict";

var _MediaPlayer = _interopRequireDefault(require("./MediaPlayer.js"));

var _AutoPlay = _interopRequireDefault(require("../plugins/AutoPlay.js"));

var _AutoPause = _interopRequireDefault(require("../plugins/AutoPause.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// hay que especificar la terminación del archivo para no crear confuciones.
const video = document.querySelector('video');
const btn = document.querySelector('button');
const btnUnmute = document.getElementById('unmute');
console.log(btnUnmute);
const player = new _MediaPlayer.default({
  el: video,
  // Duda: ¿por que este autoplay sin llamarlo con parentesis funciona? 
  plugins: [new _AutoPlay.default(), new _AutoPause.default()]
}); //in stanceamos a mediaplayer y pasamos un objeto de configuracion dentro de las propiedades del a inastancia

btn.onclick = () => {
  player.playOrPause();
};

btnUnmute.onclick = () => {
  player.muteOrNoT();
}; // para SERVICE WORKERS que detectsara si el navegasdor del usuario le da apoyo 
// para poder recibir los service workers ,no todos lo tiene.
// se registra el archiv, que sera tal cual es service worker.


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("/sw.js").catch(error => {
    console.log(error.message);
  });
}
},{"./MediaPlayer.js":"assets/MediaPlayer.js","../plugins/AutoPlay.js":"plugins/AutoPlay.js","../plugins/AutoPause.js":"plugins/AutoPause.js","/Users/sue/Desktop/platzi/ESCUELA JAVASCRIPT/curso_profesional_JS/sw.js":[["sw.js","sw.js"],"sw.js.map","sw.js"]}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/index.js"], null)
//# sourceMappingURL=/assets.8f4429fc.js.map