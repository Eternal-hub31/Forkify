// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ddCAb":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _recipeViewJs = require("./views/recipeView.js");
var _recipeViewJsDefault = parcelHelpers.interopDefault(_recipeViewJs);
var _iconsSvg = require("url:../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _searchView = require("./views/SearchView");
var _searchViewDefault = parcelHelpers.interopDefault(_searchView);
var _resultView = require("./views/ResultView");
var _resultViewDefault = parcelHelpers.interopDefault(_resultView);
var _bookMarks = require("./views/bookMarks");
var _bookMarksDefault = parcelHelpers.interopDefault(_bookMarks);
var _pagenationView = require("./views/pagenationView");
var _pagenationViewDefault = parcelHelpers.interopDefault(_pagenationView);
var _addrescipeview = require("./views/addrescipeview");
var _addrescipeviewDefault = parcelHelpers.interopDefault(_addrescipeview);
var _config = require("./config");
const recipeContainer = document.querySelector('.recipe');
console.log(_iconsSvgDefault.default);
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const controlRecipe = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        _recipeViewJsDefault.default.renderspinner();
        _resultViewDefault.default.update(_modelJs.getSearchResultPage());
        _bookMarksDefault.default.update(_modelJs.state.bookMarks);
        await _modelJs.loadRecipe(id);
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
    } catch (err) {
        _recipeViewJsDefault.default.renderError();
    }
};
// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);
const controlSearchResults = async function() {
    try {
        const query = _searchViewDefault.default.getQuery();
        if (!query) return;
        _resultViewDefault.default.renderspinner();
        await _modelJs.loadSearchResult(query);
        _resultViewDefault.default.render(_modelJs.getSearchResultPage());
        _pagenationViewDefault.default.render(_modelJs.state.search);
    } catch (err) {
        throw err;
    }
};
const controlservings = function(newServing) {
    // update the repice servings (instate)
    _modelJs.updateServings(newServing);
    // recipeView.render(model.state.recipe);
    _recipeViewJsDefault.default.update(_modelJs.state.recipe);
// update the recipe View
};
const ControlPagenation = function(GotoPage) {
    _resultViewDefault.default.render(_modelJs.getSearchResultPage(GotoPage));
    _pagenationViewDefault.default.render(_modelJs.state.search);
// render the bookmarks
};
const controllerrenderbookmarks = function() {
    _bookMarksDefault.default.render(_modelJs.state.bookMarks);
};
const controlAddBookmarks = function() {
    // add and removee bookmarks
    if (!_modelJs.state.recipe.bookMarked) _modelJs.BookMarking(_modelJs.state.recipe);
    else _modelJs.removeBookMarking(_modelJs.state.recipe.id);
    _recipeViewJsDefault.default.update(_modelJs.state.recipe);
    _bookMarksDefault.default.render(_modelJs.state.bookMarks);
};
const controladdrecipe = async function(newrecipe) {
    try {
        _addrescipeviewDefault.default.renderspinner();
        await _modelJs.uploadRecipe(newrecipe);
        _bookMarksDefault.default.render(_modelJs.state.bookMarks);
        _recipeViewJsDefault.default.render(_modelJs.state.recipe);
        window.history.pushState(null, '', `#${_modelJs.state.recipe.id}`);
        _addrescipeviewDefault.default.rendermessage();
        setTimeout(function() {
            _addrescipeviewDefault.default.togglemethod();
        }, _config.modal_close_second * 1000);
    } catch (err) {
        _addrescipeviewDefault.default.renderError(err.message);
    }
};
const init = function() {
    _bookMarksDefault.default.addHandlerRender(controllerrenderbookmarks);
    _recipeViewJsDefault.default.addHandlerRender(controlRecipe);
    _recipeViewJsDefault.default.addHandlerbookmarks(controlAddBookmarks);
    _searchViewDefault.default.addHandlerSearch(controlSearchResults);
    _pagenationViewDefault.default._addHandlerClick(ControlPagenation);
    _recipeViewJsDefault.default.addHandlerServing(controlservings);
    _addrescipeviewDefault.default.addhandlerSumbit(controladdrecipe);
    console.log('wlc');
};
init();

},{"./model.js":"Y4A21","./views/recipeView.js":"l60JC","url:../img/icons.svg":"loVOp","./views/SearchView":"c7Rpf","./views/ResultView":"8cMC5","./views/bookMarks":"jjsQn","./views/pagenationView":"7Vqbs","./views/addrescipeview":"hEssc","./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe
);
parcelHelpers.export(exports, "loadSearchResult", ()=>loadSearchResult
);
parcelHelpers.export(exports, "getSearchResultPage", ()=>getSearchResultPage
);
parcelHelpers.export(exports, "updateServings", ()=>updateServings
);
parcelHelpers.export(exports, "BookMarking", ()=>BookMarking
);
parcelHelpers.export(exports, "removeBookMarking", ()=>removeBookMarking
);
parcelHelpers.export(exports, "uploadRecipe", ()=>uploadRecipe
);
var _helpers = require("./Helpers");
var _config = require("./config");
const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        resultPerpage: _config.Res_Per_Page,
        page: 1
    },
    bookMarks: []
};
const TransfromRecipeDataObj = function(data) {
    const { recipe  } = data.data;
    return {
        title: recipe.title,
        id: recipe.id,
        ingredients: recipe.ingredients,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        cookingTime: recipe.cooking_time,
        servings: recipe.servings,
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        const data = await _helpers.ajaxCall(`${_config.API_Url}${id}?key=${_config.KeyRecipe}`);
        state.recipe = TransfromRecipeDataObj(data);
        if (state.bookMarks.some((b)=>b.id === id
        )) state.recipe.bookMarked = true;
        else state.recipe.bookMarked = false;
    } catch (err) {
        throw err;
    }
};
const loadSearchResult = async function(query) {
    try {
        state.search.query = query;
        const data = await _helpers.ajaxCall(`${_config.API_Url}?search=${query}&key=${_config.KeyRecipe}`);
        console.log(data);
        state.search.results = data.data.recipes.map((el)=>{
            return {
                title: el.title,
                id: el.id,
                ingredients: el.ingredients,
                publisher: el.publisher,
                image: el.image_url,
                ...el.key && {
                    key: el.key
                }
            };
        });
    } catch (err) {
        throw err;
    }
};
const getSearchResultPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultPerpage;
    const end = page * state.search.resultPerpage;
    return state.search.results.slice(start, end);
};
const updateServings = function(newServing) {
    state.recipe.ingredients.forEach((element)=>{
        element.quantity = element.quantity * newServing / state.recipe.servings;
    });
    state.recipe.servings = newServing;
};
const perisitbookmarks = function() {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookMarks));
};
const BookMarking = function(recipe) {
    // add bookmarks
    state.bookMarks.push(recipe);
    // Mark the current recipe
    if (recipe.id === state.recipe.id) state.recipe.bookMarked = true;
    perisitbookmarks();
};
const removeBookMarking = function(id) {
    const index = state.bookMarks.findIndex((el)=>el.id === id
    );
    state.bookMarks.splice(index, 1);
    if (id === state.recipe.id) state.recipe.bookMarked = false;
    perisitbookmarks();
};
const init = function() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookMarks = JSON.parse(storage);
};
init();
const clearbookmarks = function() {
    localStorage.clear('bookmarks');
};
const uploadRecipe = async function(newrecipe) {
    try {
        console.log(newrecipe);
        const ingredients = Object.entries(newrecipe).filter((entry)=>entry[0].startsWith('ingredient') && entry[1] !== ''
        ).map((ing)=>{
            const ingArr = ing[1].split(',').map((el)=>el.trim()
            );
            if (ingArr.length !== 3) throw new Error('Please the the right fromat there needs to be 3 elements here :) ');
            const [quantity, unit, description] = ingArr;
            return {
                quantity: quantity ? +quantity : null,
                unit,
                description
            };
        });
        const recipe = {
            title: newrecipe.title,
            source_url: newrecipe.sourceUrl,
            image_url: newrecipe.image,
            publisher: newrecipe.publisher,
            cooking_time: +newrecipe.cookingTime,
            servings: +newrecipe.servings,
            ingredients
        };
        const data = await _helpers.ajaxCall(`${_config.API_Url}?key=${_config.KeyRecipe}`, recipe);
        state.recipe = TransfromRecipeDataObj(data);
        BookMarking(state.recipe);
    } catch (err) {
        throw err;
    }
};

},{"./Helpers":"kSS5F","./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSS5F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ajaxCall", ()=>ajaxCall
);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const ajaxCall = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout(_config.timeoutseconds)
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`{${data.message} , ${res.ok}}`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_Url", ()=>API_Url
);
parcelHelpers.export(exports, "timeoutseconds", ()=>timeoutseconds
);
parcelHelpers.export(exports, "Res_Per_Page", ()=>Res_Per_Page
);
parcelHelpers.export(exports, "KeyRecipe", ()=>KeyRecipe
);
parcelHelpers.export(exports, "modal_close_second", ()=>modal_close_second
);
const API_Url = `https://forkify-api.herokuapp.com/api/v2/recipes/`;
const timeoutseconds = 10;
const Res_Per_Page = 10;
const KeyRecipe = 'dd4efef3-3c6d-49d7-a0ba-ead381608972';
const modal_close_second = 2.5;
console.log('wlc');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"l60JC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _fractional = require("fractional");
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
console.log(_fractional.Fraction);
class recipeView extends _viewDefault.default {
    _partentElement = document.querySelector('.recipe');
    _errorMessage = 'No recipes Found For Your Query ! Please again';
    _sucessMessage;
    addHandlerRender(handler) {
        [
            'load',
            'hashchange'
        ].forEach((el)=>window.addEventListener(el, handler)
        );
    }
    npm;
    addHandlerServing(handler) {
        this._partentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--update--servings');
            if (!btn) return;
            console.log(btn);
            const updateTo = +btn.dataset.updateTo;
            if (updateTo > 0) handler(updateTo);
        });
    }
    addHandlerbookmarks(handler) {
        this._partentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--bookmarks');
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `<figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.image}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>
    
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${_iconsSvgDefault.default}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${_iconsSvgDefault.default}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
    
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--update--servings" data-update-to =' ${this._data.servings - 1}'>
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--update--servings" data-update-to= '${this._data.servings + 1}'>
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
    
      <div class="recipe__user-generated ${this._data.key ? '' : 'hidden'}">
      
            <svg>
              <use href="${_iconsSvgDefault.default}#icon-user"></use>
            </svg>
      
      </div>
      <button class="btn--round btn--bookmarks">
        <svg class="">
          <use href="${_iconsSvgDefault.default}#icon-bookmark${this._data.bookMarked ? '-fill' : ''}"></use>
        </svg>
      </button>
    </div>
    
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">

      ${this._data.ingredients.map(this._generateMarkupEl).join('')}
        
          </div>
        </li>
      </ul>
    </div>
    
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">T${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
        </svg>
      </a>
  
    
 
    </div>
    
    `;
    }
    _generateMarkupEl(el) {
        return `<li class="recipe__ingredient">
  <svg class="recipe__icon">
    <use href="${_iconsSvgDefault.default}#icon-check"></use>
  </svg>
  <div class="recipe__quantity">${el.quantity ? new _fractional.Fraction(el.quantity).toString() : ``}</div>
  <div class="recipe__description">
    <span class="recipe__unit">${el.unit}</span>
    ${el.description}
  </div>
</li>`;
    }
}
const experiment = new recipeView();
console.log(recipeView);
exports.default = new recipeView();

},{"url:../../img/icons.svg":"loVOp","fractional":"3SU56","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loVOp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('hWUTQ') + "icons.dfd7a6db.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3SU56":[function(require,module,exports) {
/*
fraction.js
A Javascript fraction library.

Copyright (c) 2009  Erik Garrison <erik@hypervolu.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/ /* Fractions */ /* 
 *
 * Fraction objects are comprised of a numerator and a denomenator.  These
 * values can be accessed at fraction.numerator and fraction.denomenator.
 *
 * Fractions are always returned and stored in lowest-form normalized format.
 * This is accomplished via Fraction.normalize.
 *
 * The following mathematical operations on fractions are supported:
 *
 * Fraction.equals
 * Fraction.add
 * Fraction.subtract
 * Fraction.multiply
 * Fraction.divide
 *
 * These operations accept both numbers and fraction objects.  (Best results
 * are guaranteed when the input is a fraction object.)  They all return a new
 * Fraction object.
 *
 * Usage:
 *
 * TODO
 *
 */ /*
 * The Fraction constructor takes one of:
 *   an explicit numerator (integer) and denominator (integer),
 *   a string representation of the fraction (string),
 *   or a floating-point number (float)
 *
 * These initialization methods are provided for convenience.  Because of
 * rounding issues the best results will be given when the fraction is
 * constructed from an explicit integer numerator and denomenator, and not a
 * decimal number.
 *
 *
 * e.g. new Fraction(1, 2) --> 1/2
 *      new Fraction('1/2') --> 1/2
 *      new Fraction('2 3/4') --> 11/4  (prints as 2 3/4)
 *
 */ Fraction = function(numerator, denominator) {
    /* double argument invocation */ if (typeof numerator !== 'undefined' && denominator) {
        if (typeof numerator === 'number' && typeof denominator === 'number') {
            this.numerator = numerator;
            this.denominator = denominator;
        } else if (typeof numerator === 'string' && typeof denominator === 'string') {
            // what are they?
            // hmm....
            // assume they are ints?
            this.numerator = parseInt(numerator);
            this.denominator = parseInt(denominator);
        }
    /* single-argument invocation */ } else if (typeof denominator === 'undefined') {
        num = numerator; // swap variable names for legibility
        if (typeof num === 'number') {
            this.numerator = num;
            this.denominator = 1;
        } else if (typeof num === 'string') {
            var a, b; // hold the first and second part of the fraction, e.g. a = '1' and b = '2/3' in 1 2/3
            // or a = '2/3' and b = undefined if we are just passed a single-part number
            var arr = num.split(' ');
            if (arr[0]) a = arr[0];
            if (arr[1]) b = arr[1];
            /* compound fraction e.g. 'A B/C' */ //  if a is an integer ...
            if (a % 1 === 0 && b && b.match('/')) return new Fraction(a).add(new Fraction(b));
            else if (a && !b) {
                /* simple fraction e.g. 'A/B' */ if (typeof a === 'string' && a.match('/')) {
                    // it's not a whole number... it's actually a fraction without a whole part written
                    var f = a.split('/');
                    this.numerator = f[0];
                    this.denominator = f[1];
                /* string floating point */ } else if (typeof a === 'string' && a.match('\.')) return new Fraction(parseFloat(a));
                else {
                    this.numerator = parseInt(a);
                    this.denominator = 1;
                }
            } else return undefined; // could not parse
        }
    }
    this.normalize();
};
Fraction.prototype.clone = function() {
    return new Fraction(this.numerator, this.denominator);
};
/* pretty-printer, converts fractions into whole numbers and fractions */ Fraction.prototype.toString = function() {
    if (this.denominator === 'NaN') return 'NaN';
    var wholepart = this.numerator / this.denominator > 0 ? Math.floor(this.numerator / this.denominator) : Math.ceil(this.numerator / this.denominator);
    var numerator = this.numerator % this.denominator;
    var denominator = this.denominator;
    var result = [];
    if (wholepart != 0) result.push(wholepart);
    if (numerator != 0) result.push((wholepart === 0 ? numerator : Math.abs(numerator)) + '/' + denominator);
    return result.length > 0 ? result.join(' ') : 0;
};
/* destructively rescale the fraction by some integral factor */ Fraction.prototype.rescale = function(factor) {
    this.numerator *= factor;
    this.denominator *= factor;
    return this;
};
Fraction.prototype.add = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone();
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator += b.numerator;
    return a.normalize();
};
Fraction.prototype.subtract = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) b = b.clone(); // we scale our argument destructively, so clone
    else b = new Fraction(b);
    td = a.denominator;
    a.rescale(b.denominator);
    b.rescale(td);
    a.numerator -= b.numerator;
    return a.normalize();
};
Fraction.prototype.multiply = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.numerator;
        a.denominator *= b.denominator;
    } else if (typeof b === 'number') a.numerator *= b;
    else return a.multiply(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.divide = function(b) {
    var a = this.clone();
    if (b instanceof Fraction) {
        a.numerator *= b.denominator;
        a.denominator *= b.numerator;
    } else if (typeof b === 'number') a.denominator *= b;
    else return a.divide(new Fraction(b));
    return a.normalize();
};
Fraction.prototype.equals = function(b) {
    if (!(b instanceof Fraction)) b = new Fraction(b);
    // fractions that are equal should have equal normalized forms
    var a = this.clone().normalize();
    var b = b.clone().normalize();
    return a.numerator === b.numerator && a.denominator === b.denominator;
};
/* Utility functions */ /* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */ Fraction.prototype.normalize = function() {
    var isFloat = function(n) {
        return typeof n === 'number' && (n > 0 && n % 1 > 0 && n % 1 < 1 || n < 0 && n % -1 < 0 && n % -1 > -1);
    };
    var roundToPlaces = function(n, places) {
        if (!places) return Math.round(n);
        else {
            var scalar = Math.pow(10, places);
            return Math.round(n * scalar) / scalar;
        }
    };
    return function() {
        // XXX hackish.  Is there a better way to address this issue?
        //
        /* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */ if (isFloat(this.denominator)) {
            var rounded = roundToPlaces(this.denominator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.denominator = Math.round(this.denominator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.numerator *= scaleup;
        }
        if (isFloat(this.numerator)) {
            var rounded = roundToPlaces(this.numerator, 9);
            var scaleup = Math.pow(10, rounded.toString().split('.')[1].length);
            this.numerator = Math.round(this.numerator * scaleup); // this !!! should be a whole number
            //this.numerator *= scaleup;
            this.denominator *= scaleup;
        }
        var gcf = Fraction.gcf(this.numerator, this.denominator);
        this.numerator /= gcf;
        this.denominator /= gcf;
        if (this.numerator < 0 && this.denominator < 0 || this.numerator > 0 && this.denominator < 0) {
            this.numerator *= -1;
            this.denominator *= -1;
        }
        return this;
    };
}();
/* Takes two numbers and returns their greatest common factor.
 */ Fraction.gcf = function(a, b) {
    var common_factors = [];
    var fa = Fraction.primeFactors(a);
    var fb = Fraction.primeFactors(b);
    // for each factor in fa
    // if it's also in fb
    // put it into the common factors
    fa.forEach(function(factor) {
        var i = fb.indexOf(factor);
        if (i >= 0) {
            common_factors.push(factor);
            fb.splice(i, 1); // remove from fb
        }
    });
    if (common_factors.length === 0) return 1;
    var gcf = function() {
        var r = common_factors[0];
        var i;
        for(i = 1; i < common_factors.length; i++)r = r * common_factors[i];
        return r;
    }();
    return gcf;
};
// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors = function(n) {
    var num = Math.abs(n);
    var factors = [];
    var _factor = 2; // first potential prime factor
    while(_factor * _factor <= num)if (num % _factor === 0) {
        factors.push(_factor); // so keep it
        num = num / _factor; // and divide our search point by it
    } else _factor++; // and increment
    if (num != 1) factors.push(num); //    so it too should be recorded
    return factors; // Return the prime factors
};
module.exports.Fraction = Fraction;

},{}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class view {
    _data;
    render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._partentElement.insertAdjacentHTML('afterbegin', markup);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDom = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDom.querySelectorAll('*'));
        const oldElements = Array.from(this._partentElement.querySelectorAll('*'));
        newElements.forEach((Element, i)=>{
            const currentElement = oldElements[i];
            if (!Element.isEqualNode(currentElement) && Element.firstChild?.nodeValue.trim() !== '') currentElement.textContent = Element.textContent;
            Element.isEqualNode(currentElement);
            if (!Element.isEqualNode(currentElement)) {
                console.log(Element.attributes);
                Array.from(Element.attributes).forEach((el)=>currentElement.setAttribute(el.name, el.value)
                );
            }
        });
    }
    _clear() {
        console.log(this._partentElement);
        this._partentElement.innerHTML = '';
    }
    renderspinner = function() {
        const markup = `
    <div class="spinner">
    <svg>
      <use href="${_iconsSvgDefault.default}#icon-loader"></use>
    </svg>
  </div>
  `;
        this._clear();
        console.log(this._partentElement);
        this._partentElement.insertAdjacentHTML('afterbegin', markup);
    };
    renderError(message = this._errorMessage) {
        const markup = `<div class="error">
            <div>
              <svg>
                <use href="${_iconsSvgDefault.default}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> `;
        this._partentElement.innerHTML = '';
        this._partentElement.insertAdjacentHTML('afterbegin', markup);
    }
    rendermessage(message = this._sucessMessage) {
        const markup = `<div class="message">
            <div>
              <svg>
                <use href="${_iconsSvgDefault.default}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div> `;
        this._partentElement.innerHTML = '';
        this._partentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = view;

},{"url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7Rpf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class searchView {
    _parentElement = document.querySelector('.search');
    getQuery() {
        const query = this._parentElement.querySelector('.search__field').value;
        this._clearinput();
        return query;
    }
    _clearinput() {
        this._parentElement.querySelector('.search__field').value = '';
    }
    addHandlerSearch(handler) {
        this._parentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new searchView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cMC5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _preview = require("./preview");
var _previewDefault = parcelHelpers.interopDefault(_preview);
class ResultView extends _viewDefault.default {
    _partentElement = document.querySelector('.results');
    _errorMessage = 'No recipes Found For Your Query ! Please Try again';
    _generateMarkup() {
        console.log(this._data);
        return this._data.map((result)=>_previewDefault.default.render(result, false)
        ).join('');
    }
}
exports.default = new ResultView();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","./preview":"dsNsG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dsNsG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class Previews extends _viewDefault.default {
    _partentElement = '';
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
    <li class="preview">
    <a class="preview__link  ${this._data.id === id ? 'preview__link--active' : ''}" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.image}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title} ...</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
        <div class="preview__user-generated ${this._data.key ? '' : 'hidden'}">
      
        <svg>
          <use href="${_iconsSvgDefault.default}#icon-user"></use>
        </svg>
  
  </div>
        
      </div>
    </a>
  </li>
`;
    }
}
exports.default = new Previews();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjsQn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _preview = require("./preview");
var _previewDefault = parcelHelpers.interopDefault(_preview);
class bookMarks extends _viewDefault.default {
    _partentElement = document.querySelector('.bookmarks__list');
    _errorMessage = 'No Bookmarks Found For Your Query ! Please Try again';
    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    _generateMarkup() {
        console.log(this._data);
        return this._data.map((bookMarks1)=>_previewDefault.default.render(bookMarks1, false)
        ).join('');
    }
}
exports.default = new bookMarks();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","./preview":"dsNsG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Vqbs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class pagenationView extends _viewDefault.default {
    _partentElement = document.querySelector('.pagination');
    _addHandlerClick(handler) {
        this._partentElement.addEventListener('click', (e)=>{
            const btn = e.target.closest('.btn--inline');
            console.log(btn);
            if (!btn) return;
            const GotoPage = +btn.dataset.goto;
            console.log(GotoPage);
            handler(GotoPage);
        });
    }
    _generateMarkup() {
        const CurrentPage = this._data.page;
        const numpages = Math.ceil(this._data.results.length / this._data.resultPerpage);
        // page 1
        if (CurrentPage === 1 && numpages > 1) return `<button data-goto="${CurrentPage + 1}" class="btn--inline pagination__btn--next">
      <span>page ${CurrentPage + 1}</span>
      <svg class="search__icon">
        <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
      </svg>
    </button>`;
        // page 2 - 5
        if (CurrentPage < numpages && CurrentPage > 1) return `<button data-goto="${CurrentPage - 1}" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>
      </svg>
      <span>Page ${CurrentPage - 1}</span>
    </button>
    <button data-goto="${CurrentPage + 1}"class="btn--inline pagination__btn--next">
    <span>Page ${CurrentPage + 1}</span>
    <svg class="search__icon">
      <use href="${_iconsSvgDefault.default}#icon-arrow-right"></use>
    </svg>
  </button>`;
        // last page
        if (CurrentPage === numpages && numpages > 1) return `<button data-goto="${CurrentPage - 1}"class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${_iconsSvgDefault.default}#icon-arrow-left"></use>
      </svg>
      <span>Page ${CurrentPage - 1}</span>
    </button>
   
    `;
        // only one page for the result
        return '';
    }
}
exports.default = new pagenationView();

},{"./View":"5cUXS","url:../../img/icons.svg":"loVOp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hEssc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("url:../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _preview = require("./preview");
var _previewDefault = parcelHelpers.interopDefault(_preview);
class AddRescipeViews extends _viewDefault.default {
    _sucessMessage = 'Recipe Was uploaded succesfully Thank You :)';
    _partentElement = document.querySelector('.upload');
    _Window = document.querySelector('.add-recipe-window');
    _Overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav__btn--add-recipe');
    _btnClose = document.querySelector('.btn--close-modal');
    constructor(){
        super();
        this._addHandlerShowWindow();
        this._addHandlerHideWindow();
    }
    togglemethod() {
        this._Overlay.classList.toggle('hidden');
        this._Window.classList.toggle('hidden');
    }
    _addHandlerShowWindow() {
        this._btnOpen.addEventListener('click', this.togglemethod.bind(this));
    }
    _addHandlerHideWindow() {
        this._btnClose.addEventListener('click', this.togglemethod.bind(this));
        this._Overlay.addEventListener('click', this.togglemethod.bind(this));
    }
    addhandlerSumbit(handler) {
        this._partentElement.addEventListener('submit', function(e) {
            e.preventDefault();
            const dataarr = [
                ...new FormData(this)
            ];
            const data = Object.fromEntries(dataarr);
            console.log(data);
            handler(data);
        });
    }
}
exports.default = new AddRescipeViews();

},{"url:../../img/icons.svg":"loVOp","./View":"5cUXS","./preview":"dsNsG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ddCAb","aenu9"], "aenu9", "parcelRequire7e89")

//# sourceMappingURL=index.e37f48ea.js.map
