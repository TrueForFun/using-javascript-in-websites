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
})({"2xOeA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6772f3d76ac81859";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
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
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3EPOV":[function(require,module,exports) {
var _popmotion = require("popmotion");
const swiper = new Swiper(`.swiper`, {
    speed: 400,
    spaceBetween: 100,
    effect: `cube`,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});
const ball = document.querySelector(".brand");
console.log({
    ball
});
const ballStyler = (0, _popmotion.styler)(ball);
const ballXY = (0, _popmotion.value)({
    x: 0,
    y: 0
}, ballStyler.set);
let activeAction;
let pointerTracker;
function startTracking() {
    activeAction = (0, _popmotion.physics)({
        velocity: ballXY.getVelocity(),
        friction: 0.6,
        springStrength: 400,
        to: ballXY.get(),
        restSpeed: false
    }).start(ballXY);
    pointerTracker = (0, _popmotion.pointer)(ballXY.get()).start((v)=>activeAction.setSpringTarget(v));
}
function stopTracking() {
    if (activeAction) activeAction.stop();
    if (pointerTracker) pointerTracker.stop();
    (0, _popmotion.spring)({
        velocity: ballXY.getVelocity(),
        from: ballXY.get(),
        stiffness: 300,
        damping: 10
    }).start(ballXY);
}
(0, _popmotion.listen)(ball, "mousedown touchstart").start(startTracking);
(0, _popmotion.listen)(document, "mouseup touchend").start(stopTracking);

},{"popmotion":"gniPK"}],"gniPK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "styler", ()=>(0, _stylefireDefault.default));
parcelHelpers.export(exports, "valueTypes", ()=>_styleValueTypes);
parcelHelpers.export(exports, "easing", ()=>_easing);
parcelHelpers.export(exports, "action", ()=>action);
parcelHelpers.export(exports, "multicast", ()=>multicast);
parcelHelpers.export(exports, "value", ()=>value);
parcelHelpers.export(exports, "decay", ()=>vectorDecay);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
parcelHelpers.export(exports, "everyFrame", ()=>frame);
parcelHelpers.export(exports, "physics", ()=>vectorPhysics);
parcelHelpers.export(exports, "spring", ()=>vectorSpring);
parcelHelpers.export(exports, "timeline", ()=>timeline);
parcelHelpers.export(exports, "tween", ()=>tween);
parcelHelpers.export(exports, "listen", ()=>listen);
parcelHelpers.export(exports, "pointer", ()=>index);
parcelHelpers.export(exports, "mouse", ()=>mouse);
parcelHelpers.export(exports, "multitouch", ()=>multitouch);
parcelHelpers.export(exports, "chain", ()=>chain);
parcelHelpers.export(exports, "composite", ()=>composite);
parcelHelpers.export(exports, "crossfade", ()=>crossfade);
parcelHelpers.export(exports, "delay", ()=>delay);
parcelHelpers.export(exports, "merge", ()=>merge);
parcelHelpers.export(exports, "parallel", ()=>parallel$1);
parcelHelpers.export(exports, "schedule", ()=>schedule);
parcelHelpers.export(exports, "stagger", ()=>stagger);
parcelHelpers.export(exports, "calc", ()=>calc);
parcelHelpers.export(exports, "transform", ()=>transformers);
parcelHelpers.export(exports, "css", ()=>css);
parcelHelpers.export(exports, "svg", ()=>svg);
parcelHelpers.export(exports, "Action", ()=>Action);
parcelHelpers.export(exports, "ValueReaction", ()=>ValueReaction);
var _tslib = require("tslib");
var _popcorn = require("@popmotion/popcorn");
var _framesync = require("framesync");
var _framesyncDefault = parcelHelpers.interopDefault(_framesync);
var _styleValueTypes = require("style-value-types");
var _heyListen = require("hey-listen");
var _easing = require("@popmotion/easing");
var _stylefire = require("stylefire");
var _stylefireDefault = parcelHelpers.interopDefault(_stylefire);
var Chainable = /*#__PURE__*/ function() {
    function Chainable(props) {
        if (props === void 0) props = {};
        this.props = props;
    }
    Chainable.prototype.applyMiddleware = function(middleware) {
        return this.create((0, _tslib.__assign)({}, this.props, {
            middleware: this.props.middleware ? [
                middleware
            ].concat(this.props.middleware) : [
                middleware
            ]
        }));
    };
    Chainable.prototype.pipe = function() {
        var funcs = [];
        for(var _i = 0; _i < arguments.length; _i++)funcs[_i] = arguments[_i];
        var pipedUpdate = funcs.length === 1 ? funcs[0] : (0, _popcorn.pipe).apply(void 0, funcs);
        return this.applyMiddleware(function(update) {
            return function(v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable.prototype.while = function(predicate) {
        return this.applyMiddleware(function(update, complete) {
            return function(v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable.prototype.filter = function(predicate) {
        return this.applyMiddleware(function(update) {
            return function(v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable;
}();
var Observer = /*#__PURE__*/ function() {
    function Observer(_a, observer) {
        var middleware = _a.middleware, onComplete = _a.onComplete;
        var _this = this;
        this.isActive = true;
        this.update = function(v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function() {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function(err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function(v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) middleware.forEach(function(m) {
            return _this.updateObserver = m(_this.updateObserver, _this.complete);
        });
    }
    return Observer;
}();
var createObserver = function(observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === "function") return new Observer({
        middleware: middleware,
        onComplete: onComplete
    }, {
        update: observerCandidate
    });
    else return new Observer({
        middleware: middleware,
        onComplete: onComplete
    }, observerCandidate);
};
var Action = /*#__PURE__*/ function(_super) {
    (0, _tslib.__extends)(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action.prototype.create = function(props) {
        return new Action(props);
    };
    Action.prototype.start = function(observerCandidate) {
        if (observerCandidate === void 0) observerCandidate = {};
        var isComplete = false;
        var subscription = {
            stop: function() {
                return undefined;
            }
        };
        var _a = this.props, init = _a.init, observerProps = (0, _tslib.__rest)(_a, [
            "init"
        ]);
        var observer = createObserver(observerCandidate, observerProps, function() {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? (0, _tslib.__assign)({}, subscription, api) : subscription;
        if (observerCandidate.registerParent) observerCandidate.registerParent(subscription);
        if (isComplete) subscription.stop();
        return subscription;
    };
    return Action;
}(Chainable);
var action = function(init) {
    return new Action({
        init: init
    });
};
var BaseMulticast = /*#__PURE__*/ function(_super) {
    (0, _tslib.__extends)(BaseMulticast, _super);
    function BaseMulticast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast.prototype.complete = function() {
        this.subscribers.forEach(function(subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast.prototype.error = function(err) {
        this.subscribers.forEach(function(subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast.prototype.update = function(v) {
        for(var i = 0; i < this.subscribers.length; i++)this.subscribers[i].update(v);
    };
    BaseMulticast.prototype.subscribe = function(observerCandidate) {
        var _this = this;
        var observer = createObserver(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function() {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast.prototype.stop = function() {
        if (this.parent) this.parent.stop();
    };
    BaseMulticast.prototype.registerParent = function(subscription) {
        this.stop();
        this.parent = subscription;
    };
    return BaseMulticast;
}(Chainable);
var Multicast = /*#__PURE__*/ function(_super) {
    (0, _tslib.__extends)(Multicast, _super);
    function Multicast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast.prototype.create = function(props) {
        return new Multicast(props);
    };
    return Multicast;
}(BaseMulticast);
var multicast = function() {
    return new Multicast();
};
var stepProgress = function(steps, progress$$1) {
    var segment = 1 / (steps - 1);
    var subsegment = 1 / (2 * (steps - 1));
    var percentProgressOfTarget = Math.min(progress$$1, 1);
    var subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
    var segmentProgressOfTarget = Math.floor((subsegmentProgressOfTarget + 1) / 2);
    return segmentProgressOfTarget * segment;
};
var calc = /*#__PURE__*/ Object.freeze({
    angle: (0, _popcorn.angle),
    degreesToRadians: (0, _popcorn.degreesToRadians),
    dilate: (0, _popcorn.dilate),
    distance: (0, _popcorn.distance),
    isPoint3D: (0, _popcorn.isPoint3D),
    isPoint: (0, _popcorn.isPoint),
    getValueFromProgress: (0, _popcorn.mix),
    pointFromAngleAndDistance: (0, _popcorn.pointFromVector),
    getProgressFromValue: (0, _popcorn.progress),
    radiansToDegrees: (0, _popcorn.radiansToDegrees),
    smooth: (0, _popcorn.smoothFrame),
    speedPerFrame: (0, _popcorn.velocityPerFrame),
    speedPerSecond: (0, _popcorn.velocityPerSecond),
    stepProgress: stepProgress
});
var isValueList = function(v) {
    return Array.isArray(v);
};
var isSingleValue = function(v) {
    var typeOfV = typeof v;
    return typeOfV === "string" || typeOfV === "number";
};
var ValueReaction = /*#__PURE__*/ function(_super) {
    (0, _tslib.__extends)(ValueReaction, _super);
    function ValueReaction(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function() {
            return (0, _framesyncDefault.default).postRender(_this.velocityCheck);
        };
        _this.velocityCheck = function(_a) {
            var timestamp = _a.timestamp;
            if (timestamp !== _this.lastUpdated) _this.prev = _this.current;
        };
        _this.prev = _this.current = props.value || 0;
        if (isSingleValue(_this.current)) {
            _this.updateCurrent = function(v) {
                return _this.current = v;
            };
            _this.getVelocityOfCurrent = function() {
                return _this.getSingleVelocity(_this.current, _this.prev);
            };
        } else if (isValueList(_this.current)) {
            _this.updateCurrent = function(v) {
                return _this.current = v.slice();
            };
            _this.getVelocityOfCurrent = function() {
                return _this.getListVelocity();
            };
        } else {
            _this.updateCurrent = function(v) {
                _this.current = {};
                for(var key in v)if (v.hasOwnProperty(key)) _this.current[key] = v[key];
            };
            _this.getVelocityOfCurrent = function() {
                return _this.getMapVelocity();
            };
        }
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction.prototype.create = function(props) {
        return new ValueReaction(props);
    };
    ValueReaction.prototype.get = function() {
        return this.current;
    };
    ValueReaction.prototype.getVelocity = function() {
        return this.getVelocityOfCurrent();
    };
    ValueReaction.prototype.update = function(v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        var _a = (0, _framesync.getFrameData)(), delta = _a.delta, timestamp = _a.timestamp;
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        (0, _framesyncDefault.default).postRender(this.scheduleVelocityCheck);
    };
    ValueReaction.prototype.subscribe = function(observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.update(this.current);
        return sub;
    };
    ValueReaction.prototype.getSingleVelocity = function(current, prev) {
        return typeof current === "number" && typeof prev === "number" ? (0, _popcorn.velocityPerSecond)(current - prev, this.timeDelta) : (0, _popcorn.velocityPerSecond)(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    ValueReaction.prototype.getListVelocity = function() {
        var _this = this;
        return this.current.map(function(c, i) {
            return _this.getSingleVelocity(c, _this.prev[i]);
        });
    };
    ValueReaction.prototype.getMapVelocity = function() {
        var velocity = {};
        for(var key in this.current)if (this.current.hasOwnProperty(key)) velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
        return velocity;
    };
    return ValueReaction;
}(BaseMulticast);
var value = function(value, initialSubscription) {
    return new ValueReaction({
        value: value,
        initialSubscription: initialSubscription
    });
};
var multi = function(_a) {
    var getCount = _a.getCount, getFirst = _a.getFirst, getOutput = _a.getOutput, mapApi = _a.mapApi, setProp = _a.setProp, startActions = _a.startActions;
    return function(actions) {
        return action(function(_a) {
            var update = _a.update, complete = _a.complete, error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function() {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function(a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function() {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) (0, _framesyncDefault.default).update(complete);
                        }
                    },
                    error: error,
                    update: function(v) {
                        setProp(output, name, v);
                        (0, _framesyncDefault.default).update(updateOutput, false, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function(api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};
var composite = /*#__PURE__*/ multi({
    getOutput: function() {
        return {};
    },
    getCount: function(subs) {
        return Object.keys(subs).length;
    },
    getFirst: function(subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function(subs, methodName) {
        return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return Object.keys(subs).reduce(function(output, propKey) {
                var _a;
                if (subs[propKey][methodName]) args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                return output;
            }, {});
        };
    },
    setProp: function(output, name, v) {
        return output[name] = v;
    },
    startActions: function(actions, starter) {
        return Object.keys(actions).reduce(function(subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});
var parallel = /*#__PURE__*/ multi({
    getOutput: function() {
        return [];
    },
    getCount: function(subs) {
        return subs.length;
    },
    getFirst: function(subs) {
        return subs[0];
    },
    mapApi: function(subs, methodName) {
        return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return subs.map(function(sub, i) {
                if (sub[methodName]) return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
            });
        };
    },
    setProp: function(output, name, v) {
        return output[name] = v;
    },
    startActions: function(actions, starter) {
        return actions.map(function(action, i) {
            return starter(action, i);
        });
    }
});
var parallel$1 = function() {
    var actions = [];
    for(var _i = 0; _i < arguments.length; _i++)actions[_i] = arguments[_i];
    return parallel(actions);
};
var createVectorTests = function(typeTests) {
    var testNames = Object.keys(typeTests);
    var isVectorProp = function(prop, key) {
        return prop !== undefined && !typeTests[key](prop);
    };
    var getVectorKeys = function(props) {
        return testNames.reduce(function(vectorKeys, key) {
            if (isVectorProp(props[key], key)) vectorKeys.push(key);
            return vectorKeys;
        }, []);
    };
    var testVectorProps = function(props) {
        return props && testNames.some(function(key) {
            return isVectorProp(props[key], key);
        });
    };
    return {
        getVectorKeys: getVectorKeys,
        testVectorProps: testVectorProps
    };
};
var unitTypes = [
    (0, _styleValueTypes.px),
    (0, _styleValueTypes.percent),
    (0, _styleValueTypes.degrees),
    (0, _styleValueTypes.vh),
    (0, _styleValueTypes.vw)
];
var findUnitType = function(prop) {
    return unitTypes.find(function(type) {
        return type.test(prop);
    });
};
var isUnitProp = function(prop) {
    return Boolean(findUnitType(prop));
};
var createAction = function(action, props) {
    return action(props);
};
var reduceArrayValue = function(i) {
    return function(props, key) {
        props[key] = props[key][i];
        return props;
    };
};
var createArrayAction = function(action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionList = props[firstVectorKey].map(function(v, i) {
        var childActionProps = vectorKeys.reduce(reduceArrayValue(i), (0, _tslib.__assign)({}, props));
        return getActionCreator(v)(action, childActionProps);
    });
    return parallel$1.apply(void 0, actionList);
};
var reduceObjectValue = function(key) {
    return function(props, propKey) {
        props[propKey] = props[propKey][key];
        return props;
    };
};
var createObjectAction = function(action, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionMap = Object.keys(props[firstVectorKey]).reduce(function(map, key) {
        var childActionProps = vectorKeys.reduce(reduceObjectValue(key), (0, _tslib.__assign)({}, props));
        map[key] = getActionCreator(props[firstVectorKey][key])(action, childActionProps);
        return map;
    }, {});
    return composite(actionMap);
};
var createUnitAction = function(action, _a) {
    var from = _a.from, to = _a.to, props = (0, _tslib.__rest)(_a, [
        "from",
        "to"
    ]);
    var unitType = findUnitType(from) || findUnitType(to);
    var transform = unitType.transform, parse = unitType.parse;
    return action((0, _tslib.__assign)({}, props, {
        from: typeof from === "string" ? parse(from) : from,
        to: typeof to === "string" ? parse(to) : to
    })).pipe(transform);
};
var createColorAction = function(action, _a) {
    var from = _a.from, to = _a.to, props = (0, _tslib.__rest)(_a, [
        "from",
        "to"
    ]);
    return action((0, _tslib.__assign)({}, props, {
        from: 0,
        to: 1
    })).pipe((0, _popcorn.mixColor)(from, to), (0, _styleValueTypes.color).transform);
};
var createComplexAction = function(action, _a) {
    var from = _a.from, to = _a.to, props = (0, _tslib.__rest)(_a, [
        "from",
        "to"
    ]);
    var valueTemplate = (0, _styleValueTypes.complex).createTransformer(from);
    (0, _heyListen.invariant)(valueTemplate(from) === (0, _styleValueTypes.complex).createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
    return action((0, _tslib.__assign)({}, props, {
        from: 0,
        to: 1
    })).pipe((0, _popcorn.mixArray)((0, _styleValueTypes.complex).parse(from), (0, _styleValueTypes.complex).parse(to)), valueTemplate);
};
var createVectorAction = function(action, typeTests) {
    var _a = createVectorTests(typeTests), testVectorProps = _a.testVectorProps, getVectorKeys = _a.getVectorKeys;
    var vectorAction = function(props) {
        var isVector = testVectorProps(props);
        if (!isVector) return action(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        return getActionCreator(testProp)(action, props, vectorKeys);
    };
    return vectorAction;
};
var getActionCreator = function(prop) {
    var actionCreator = createAction;
    if (typeof prop === "number") actionCreator = createAction;
    else if (Array.isArray(prop)) actionCreator = createArrayAction;
    else if (isUnitProp(prop)) actionCreator = createUnitAction;
    else if ((0, _styleValueTypes.color).test(prop)) actionCreator = createColorAction;
    else if ((0, _styleValueTypes.complex).test(prop)) actionCreator = createComplexAction;
    else if (typeof prop === "object") actionCreator = createObjectAction;
    return actionCreator;
};
var decay = function(props) {
    if (props === void 0) props = {};
    return action(function(_a) {
        var complete = _a.complete, update = _a.update;
        var _b = props.velocity, velocity = _b === void 0 ? 0 : _b, _c = props.from, from = _c === void 0 ? 0 : _c, _d = props.power, power = _d === void 0 ? 0.8 : _d, _e = props.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = props.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = typeof modifyTarget === "undefined" ? idealTarget : modifyTarget(idealTarget);
        var process = (0, _framesyncDefault.default).update(function(_a) {
            var frameDelta = _a.delta;
            elapsed += frameDelta;
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                (0, _framesync.cancelSync).update(process);
                complete();
            }
        }, true);
        return {
            stop: function() {
                return (0, _framesync.cancelSync).update(process);
            }
        };
    });
};
var vectorDecay = /*#__PURE__*/ createVectorAction(decay, {
    from: (0, _styleValueTypes.number).test,
    modifyTarget: function(func) {
        return typeof func === "function";
    },
    velocity: (0, _styleValueTypes.number).test
});
var frame = function() {
    return action(function(_a) {
        var update = _a.update;
        var initialTime = 0;
        var process = (0, _framesyncDefault.default).update(function(_a) {
            var timestamp = _a.timestamp;
            if (!initialTime) initialTime = timestamp;
            update(timestamp - initialTime);
        }, true, true);
        return {
            stop: function() {
                return (0, _framesync.cancelSync).update(process);
            }
        };
    });
};
var scrubber = function(_a) {
    var _b = _a.from, from = _b === void 0 ? 0 : _b, _c = _a.to, to = _c === void 0 ? 1 : _c, _d = _a.ease, ease = _d === void 0 ? (0, _easing.linear) : _d;
    return action(function(_a) {
        var update = _a.update;
        return {
            seek: function(progress$$1) {
                return update(progress$$1);
            }
        };
    }).pipe(ease, function(v) {
        return (0, _popcorn.mix)(from, to, v);
    });
};
var vectorScrubber = /*#__PURE__*/ createVectorAction(scrubber, {
    ease: function(func) {
        return typeof func === "function";
    },
    from: (0, _styleValueTypes.number).test,
    to: (0, _styleValueTypes.number).test
});
var clampProgress = /*#__PURE__*/ (0, _popcorn.clamp)(0, 1);
var tween = function(props) {
    if (props === void 0) props = {};
    return action(function(_a) {
        var update = _a.update, complete = _a.complete;
        var _b = props.duration, duration = _b === void 0 ? 300 : _b, _c = props.ease, ease = _c === void 0 ? (0, _easing.easeOut) : _c, _d = props.flip, flip = _d === void 0 ? 0 : _d, _e = props.loop, loop = _e === void 0 ? 0 : _e, _f = props.yoyo, yoyo = _f === void 0 ? 0 : _f;
        var _g = props.from, from = _g === void 0 ? 0 : _g, _h = props.to, to = _h === void 0 ? 1 : _h, _j = props.elapsed, elapsed = _j === void 0 ? 0 : _j, _k = props.playDirection, playDirection = _k === void 0 ? 1 : _k, _l = props.flipCount, flipCount = _l === void 0 ? 0 : _l, _m = props.yoyoCount, yoyoCount = _m === void 0 ? 0 : _m, _o = props.loopCount, loopCount = _o === void 0 ? 0 : _o;
        var playhead = vectorScrubber({
            from: from,
            to: to,
            ease: ease
        }).start(update);
        var currentProgress = 0;
        var process;
        var isActive = false;
        var reverseTween = function() {
            return playDirection *= -1;
        };
        var isTweenComplete = function() {
            var _a;
            var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            var isStepTaken = false;
            if (loop && loopCount < loop) {
                elapsed = 0;
                loopCount++;
                isStepTaken = true;
            } else if (flip && flipCount < flip) {
                elapsed = duration - elapsed;
                _a = [
                    to,
                    from
                ], from = _a[0], to = _a[1];
                playhead = vectorScrubber({
                    from: from,
                    to: to,
                    ease: ease
                }).start(update);
                flipCount++;
                isStepTaken = true;
            } else if (yoyo && yoyoCount < yoyo) {
                reverseTween();
                yoyoCount++;
                isStepTaken = true;
            }
            return !isStepTaken;
        };
        var updateTween = function() {
            currentProgress = clampProgress((0, _popcorn.progress)(0, duration, elapsed));
            playhead.seek(currentProgress);
        };
        var startTimer = function() {
            isActive = true;
            process = (0, _framesyncDefault.default).update(function(_a) {
                var delta = _a.delta;
                elapsed += delta * playDirection;
                updateTween();
                if (isTweenComplete() && complete) {
                    (0, _framesync.cancelSync).update(process);
                    (0, _framesyncDefault.default).update(complete, false, true);
                }
            }, true);
        };
        var stopTimer = function() {
            isActive = false;
            if (process) (0, _framesync.cancelSync).update(process);
        };
        startTimer();
        return {
            isActive: function() {
                return isActive;
            },
            getElapsed: function() {
                return (0, _popcorn.clamp)(0, duration, elapsed);
            },
            getProgress: function() {
                return currentProgress;
            },
            stop: function() {
                stopTimer();
            },
            pause: function() {
                stopTimer();
                return this;
            },
            resume: function() {
                if (!isActive) startTimer();
                return this;
            },
            seek: function(newProgress) {
                elapsed = (0, _popcorn.mix)(0, duration, newProgress);
                (0, _framesyncDefault.default).update(updateTween, false, true);
                return this;
            },
            reverse: function() {
                reverseTween();
                return this;
            }
        };
    });
};
var clampProgress$1 = /*#__PURE__*/ (0, _popcorn.clamp)(0, 1);
var defaultEasings = function(values, easing$$1) {
    return values.map(function() {
        return easing$$1 || (0, _easing.easeOut);
    }).splice(0, values.length - 1);
};
var defaultTimings = function(values) {
    var numValues = values.length;
    return values.map(function(value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function(input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function(scrub) {
        return scrub.start(update);
    });
    return function(v) {
        if (v <= input[0]) subs[0].seek(0);
        if (v >= input[finalInputIndex]) subs[finalScrubberIndex].seek(1);
        var i = 1;
        for(; i < rangeLength; i++){
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = (0, _popcorn.progress)(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress$1(progressInRange));
    };
};
var keyframes = function(_a) {
    var easings = _a.easings, _b = _a.ease, ease = _b === void 0 ? (0, _easing.linear) : _b, times = _a.times, values = _a.values, tweenProps = (0, _tslib.__rest)(_a, [
        "easings",
        "ease",
        "times",
        "values"
    ]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function(easing$$1, i) {
        return vectorScrubber({
            from: values[i],
            to: values[i + 1],
            ease: easing$$1
        });
    });
    return tween((0, _tslib.__assign)({}, tweenProps, {
        ease: ease
    })).applyMiddleware(function(update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};
var physics = function(props) {
    if (props === void 0) props = {};
    return action(function(_a) {
        var complete = _a.complete, update = _a.update;
        var _b = props.acceleration, acceleration = _b === void 0 ? 0 : _b, _c = props.friction, friction = _c === void 0 ? 0 : _c, _d = props.velocity, velocity = _d === void 0 ? 0 : _d, springStrength = props.springStrength, to = props.to;
        var _e = props.restSpeed, restSpeed = _e === void 0 ? 0.001 : _e, _f = props.from, from = _f === void 0 ? 0 : _f;
        var current = from;
        var process = (0, _framesyncDefault.default).update(function(_a) {
            var delta = _a.delta;
            var elapsed = Math.max(delta, 16);
            if (acceleration) velocity += (0, _popcorn.velocityPerFrame)(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * (0, _popcorn.velocityPerFrame)(springStrength, elapsed);
            }
            current += (0, _popcorn.velocityPerFrame)(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                (0, _framesync.cancelSync).update(process);
                complete();
            }
        }, true);
        return {
            set: function(v) {
                current = v;
                return this;
            },
            setAcceleration: function(v) {
                acceleration = v;
                return this;
            },
            setFriction: function(v) {
                friction = v;
                return this;
            },
            setSpringStrength: function(v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function(v) {
                to = v;
                return this;
            },
            setVelocity: function(v) {
                velocity = v;
                return this;
            },
            stop: function() {
                return (0, _framesync.cancelSync).update(process);
            }
        };
    });
};
var vectorPhysics = /*#__PURE__*/ createVectorAction(physics, {
    acceleration: (0, _styleValueTypes.number).test,
    friction: (0, _styleValueTypes.number).test,
    velocity: (0, _styleValueTypes.number).test,
    from: (0, _styleValueTypes.number).test,
    to: (0, _styleValueTypes.number).test,
    springStrength: (0, _styleValueTypes.number).test
});
var spring = function(props) {
    if (props === void 0) props = {};
    return action(function(_a) {
        var update = _a.update, complete = _a.complete;
        var _b = props.velocity, velocity = _b === void 0 ? 0.0 : _b;
        var _c = props.from, from = _c === void 0 ? 0.0 : _c, _d = props.to, to = _d === void 0 ? 0.0 : _d, _e = props.stiffness, stiffness = _e === void 0 ? 100 : _e, _f = props.damping, damping = _f === void 0 ? 10 : _f, _g = props.mass, mass = _g === void 0 ? 1.0 : _g, _h = props.restSpeed, restSpeed = _h === void 0 ? 0.01 : _h, _j = props.restDelta, restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0.0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var process = (0, _framesyncDefault.default).update(function(_a) {
            var timeDelta = _a.delta;
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = (0, _popcorn.velocityPerSecond)(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                (0, _framesync.cancelSync).update(process);
                complete();
            } else update(position);
        }, true);
        return {
            stop: function() {
                return (0, _framesync.cancelSync).update(process);
            }
        };
    });
};
var vectorSpring = /*#__PURE__*/ createVectorAction(spring, {
    from: (0, _styleValueTypes.number).test,
    to: (0, _styleValueTypes.number).test,
    stiffness: (0, _styleValueTypes.number).test,
    damping: (0, _styleValueTypes.number).test,
    mass: (0, _styleValueTypes.number).test,
    velocity: (0, _styleValueTypes.number).test
});
var DEFAULT_DURATION = 300;
var flattenTimings = function(instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === "number";
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function(item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function(instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function(props, def, i) {
    var duration = props.duration, easings = props.easings, times = props.times, values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push((0, _easing.linear));
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push((0, _easing.linear));
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push((0, _easing.linear));
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || (0, _easing.easeInOut));
    return props;
};
var timeline = function(instructions, _a) {
    var _b = _a === void 0 ? {} : _a, duration = _b.duration, elapsed = _b.elapsed, ease = _b.ease, loop = _b.loop, flip = _b.flip, yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function(instruction) {
        if (typeof instruction === "string") playhead += parseFloat(instruction);
        else if (typeof instruction === "number") playhead = instruction;
        else {
            var def = (0, _tslib.__assign)({}, instruction, {
                at: playhead
            });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for(var i = 0; i < numDefs; i++){
        var def = animationDefs[i];
        var track = def.track;
        if (track === undefined) throw new Error("No track defined");
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def);
    }
    var trackKeyframes = {};
    for(var key in tracks)if (tracks.hasOwnProperty(key)) {
        var keyframeProps = tracks[key].reduce(convertDefToProps, {
            duration: calculatedDuration,
            easings: [],
            times: [],
            values: []
        });
        trackKeyframes[key] = keyframes((0, _tslib.__assign)({}, keyframeProps, {
            duration: duration || calculatedDuration,
            ease: ease,
            elapsed: elapsed,
            loop: loop,
            yoyo: yoyo,
            flip: flip
        }));
    }
    return composite(trackKeyframes);
};
var listen = function(element, events, options) {
    return action(function(_a) {
        var update = _a.update;
        var eventNames = events.split(" ").map(function(eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function() {
                return eventNames.forEach(function(eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};
var defaultPointerPos = function() {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
var eventToPoint = function(e, point) {
    if (point === void 0) point = defaultPointerPos();
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};
var points = [
    /*#__PURE__*/ defaultPointerPos()
];
var isTouchDevice = false;
if (typeof document !== "undefined") {
    var updatePointsLocation = function(_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for(var i = 0; i < numTouches; i++){
            var thisTouch = touches[i];
            points.push(eventToPoint(thisTouch));
        }
    };
    listen(document, "touchstart touchmove", {
        passive: true,
        capture: true
    }).start(updatePointsLocation);
}
var multitouch = function(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.preventDefault, preventDefault = _c === void 0 ? true : _c, _d = _b.scale, scale = _d === void 0 ? 1.0 : _d, _e = _b.rotate, rotate = _e === void 0 ? 0.0 : _e;
    return action(function(_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0.0;
        var initialRotation = 0.0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0], secondTouch = points[1];
            initialDistance = (0, _popcorn.distance)(firstTouch, secondTouch);
            initialRotation = (0, _popcorn.angle)(firstTouch, secondTouch);
        }
        var updatePoint = function() {
            if (isGesture) {
                var firstTouch = points[0], secondTouch = points[1];
                var newDistance = (0, _popcorn.distance)(firstTouch, secondTouch);
                var newRotation = (0, _popcorn.angle)(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function(e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            (0, _framesyncDefault.default).update(updatePoint);
        };
        var updateOnMove = listen(document, "touchmove", {
            passive: !preventDefault
        }).start(onMove);
        if (isTouchDevice) (0, _framesyncDefault.default).update(updatePoint);
        return {
            stop: function() {
                (0, _framesync.cancelSync).update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getIsTouchDevice = function() {
    return isTouchDevice;
};
var point = /*#__PURE__*/ defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== "undefined") {
    var updatePointLocation = function(e) {
        isMouseDevice = true;
        eventToPoint(e, point);
    };
    listen(document, "mousedown mousemove", true).start(updatePointLocation);
}
var mouse = function(_a) {
    var _b = (_a === void 0 ? {} : _a).preventDefault, preventDefault = _b === void 0 ? true : _b;
    return action(function(_a) {
        var update = _a.update;
        var updatePoint = function() {
            return update(point);
        };
        var onMove = function(e) {
            if (preventDefault) e.preventDefault();
            (0, _framesyncDefault.default).update(updatePoint);
        };
        var updateOnMove = listen(document, "mousemove").start(onMove);
        if (isMouseDevice) (0, _framesyncDefault.default).update(updatePoint);
        return {
            stop: function() {
                (0, _framesync.cancelSync).update(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
var getFirstTouch = function(_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function(props) {
    if (props === void 0) props = {};
    return getIsTouchDevice() ? multitouch(props).pipe(function(_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse(props);
};
var index = function(_a) {
    if (_a === void 0) _a = {};
    var x = _a.x, y = _a.y, props = (0, _tslib.__rest)(_a, [
        "x",
        "y"
    ]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = (0, _popcorn.applyOffset)(x || 0);
        var applyYOffset_1 = (0, _popcorn.applyOffset)(y || 0);
        var delta_1 = {
            x: 0,
            y: 0
        };
        return pointer(props).pipe(function(point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else return pointer(props);
};
var chain = function() {
    var actions = [];
    for(var _i = 0; _i < arguments.length; _i++)actions[_i] = arguments[_i];
    return action(function(_a) {
        var update = _a.update, complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function() {
            current = actions[i].start({
                complete: function() {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function() {
                return current && current.stop();
            }
        };
    });
};
var crossfade = function(a, b) {
    return action(function(observer) {
        var balance = 0;
        var fadable = parallel$1(a, b).start((0, _tslib.__assign)({}, observer, {
            update: function(_a) {
                var va = _a[0], vb = _a[1];
                observer.update((0, _popcorn.mix)(va, vb, balance));
            }
        }));
        return {
            setBalance: function(v) {
                return balance = v;
            },
            stop: function() {
                return fadable.stop();
            }
        };
    });
};
var delay = function(timeToDelay) {
    return action(function(_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function() {
                return clearTimeout(timeout);
            }
        };
    });
};
var merge = function() {
    var actions = [];
    for(var _i = 0; _i < arguments.length; _i++)actions[_i] = arguments[_i];
    return action(function(observer) {
        var subs = actions.map(function(thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function() {
                return subs.forEach(function(sub) {
                    return sub.stop();
                });
            }
        };
    });
};
var schedule = function(scheduler, schedulee) {
    return action(function(_a) {
        var update = _a.update, complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function() {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function(v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function() {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};
var stagger = function(actions, interval) {
    var intervalIsNumber = typeof interval === "number";
    var actionsWithDelay = actions.map(function(a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain(delay(timeToDelay), a);
    });
    return parallel$1.apply(void 0, actionsWithDelay);
};
var appendUnit = function(unit) {
    return function(v) {
        return "" + v + unit;
    };
};
var steps = function(st, min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    return function(v) {
        var current = (0, _popcorn.progress)(min, max, v);
        return (0, _popcorn.mix)(min, max, stepProgress(st, current));
    };
};
var transformMap = function(childTransformers) {
    return function(v) {
        var output = (0, _tslib.__assign)({}, v);
        for(var key in childTransformers)if (childTransformers.hasOwnProperty(key)) {
            var childTransformer = childTransformers[key];
            output[key] = childTransformer(v[key]);
        }
        return output;
    };
};
var transformers = /*#__PURE__*/ Object.freeze({
    applyOffset: (0, _popcorn.applyOffset),
    clamp: (0, _popcorn.clamp),
    conditional: (0, _popcorn.conditional),
    interpolate: (0, _popcorn.interpolate),
    blendArray: (0, _popcorn.mixArray),
    blendColor: (0, _popcorn.mixColor),
    pipe: (0, _popcorn.pipe),
    smooth: (0, _popcorn.smooth),
    snap: (0, _popcorn.snap),
    generateStaticSpring: (0, _popcorn.springForce),
    nonlinearSpring: (0, _popcorn.springForceExpo),
    linearSpring: (0, _popcorn.springForceLinear),
    wrap: (0, _popcorn.wrap),
    appendUnit: appendUnit,
    steps: steps,
    transformMap: transformMap
});
var css = function(element, props) {
    (0, _heyListen.warning)(false, "css() is deprecated, use styler instead");
    return (0, _stylefireDefault.default)(element, props);
};
var svg = function(element, props) {
    (0, _heyListen.warning)(false, "svg() is deprecated, use styler instead");
    return (0, _stylefireDefault.default)(element, props);
};

},{"tslib":"9u4mT","@popmotion/popcorn":"46Qpe","framesync":"fmg1O","style-value-types":"f8zMr","hey-listen":"8yK8Z","@popmotion/easing":"jPIK5","stylefire":"fNDvw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9u4mT":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
parcelHelpers.export(exports, "__spread", ()=>__spread);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"46Qpe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnticipateEasing", ()=>(0, _easing.createAnticipateEasing));
parcelHelpers.export(exports, "createBackIn", ()=>(0, _easing.createBackIn));
parcelHelpers.export(exports, "createExpoIn", ()=>(0, _easing.createExpoIn));
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _easing.cubicBezier));
parcelHelpers.export(exports, "linear", ()=>(0, _easing.linear));
parcelHelpers.export(exports, "easeIn", ()=>(0, _easing.easeIn));
parcelHelpers.export(exports, "easeOut", ()=>(0, _easing.easeOut));
parcelHelpers.export(exports, "easeInOut", ()=>(0, _easing.easeInOut));
parcelHelpers.export(exports, "circIn", ()=>(0, _easing.circIn));
parcelHelpers.export(exports, "circOut", ()=>(0, _easing.circOut));
parcelHelpers.export(exports, "circInOut", ()=>(0, _easing.circInOut));
parcelHelpers.export(exports, "backIn", ()=>(0, _easing.backIn));
parcelHelpers.export(exports, "backOut", ()=>(0, _easing.backOut));
parcelHelpers.export(exports, "backInOut", ()=>(0, _easing.backInOut));
parcelHelpers.export(exports, "anticipate", ()=>(0, _easing.anticipate));
parcelHelpers.export(exports, "reversed", ()=>(0, _easing.reversed));
parcelHelpers.export(exports, "mirrored", ()=>(0, _easing.mirrored));
parcelHelpers.export(exports, "angle", ()=>angle);
parcelHelpers.export(exports, "applyOffset", ()=>applyOffset);
parcelHelpers.export(exports, "clamp", ()=>clamp$1);
parcelHelpers.export(exports, "conditional", ()=>conditional);
parcelHelpers.export(exports, "degreesToRadians", ()=>degreesToRadians);
parcelHelpers.export(exports, "dilate", ()=>dilate);
parcelHelpers.export(exports, "distance", ()=>distance);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
parcelHelpers.export(exports, "isPoint", ()=>isPoint);
parcelHelpers.export(exports, "isPoint3D", ()=>isPoint3D);
parcelHelpers.export(exports, "mix", ()=>mix);
parcelHelpers.export(exports, "mixArray", ()=>mixArray);
parcelHelpers.export(exports, "mixColor", ()=>mixColor);
parcelHelpers.export(exports, "mixComplex", ()=>mixComplex);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "pointFromVector", ()=>pointFromVector);
parcelHelpers.export(exports, "progress", ()=>progress);
parcelHelpers.export(exports, "radiansToDegrees", ()=>radiansToDegrees);
parcelHelpers.export(exports, "smooth", ()=>smooth);
parcelHelpers.export(exports, "smoothFrame", ()=>smoothFrame);
parcelHelpers.export(exports, "snap", ()=>snap);
parcelHelpers.export(exports, "springForce", ()=>springForce);
parcelHelpers.export(exports, "springForceExpo", ()=>springForceExpo);
parcelHelpers.export(exports, "springForceLinear", ()=>springForceLinear);
parcelHelpers.export(exports, "steps", ()=>steps);
parcelHelpers.export(exports, "toDecimal", ()=>toDecimal);
parcelHelpers.export(exports, "velocityPerFrame", ()=>velocityPerFrame);
parcelHelpers.export(exports, "velocityPerSecond", ()=>velocityPerSecond);
parcelHelpers.export(exports, "wrap", ()=>wrap$1);
var _styleValueTypes = require("style-value-types");
var _heyListen = require("hey-listen");
var _framesync = require("framesync");
var _easing = require("@popmotion/easing");
var zeroPoint = {
    x: 0,
    y: 0,
    z: 0
};
var isNum = function(v) {
    return typeof v === "number";
};
var radiansToDegrees = function(radians) {
    return radians * 180 / Math.PI;
};
var angle = function(a, b) {
    if (b === void 0) b = zeroPoint;
    return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};
var applyOffset = function(from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    return function(v) {
        if (hasReceivedFrom) return v - from + to;
        else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
};
var curryRange = function(func) {
    return function(min, max, v) {
        return v !== undefined ? func(min, max, v) : function(cv) {
            return func(min, max, cv);
        };
    };
};
var clamp = function(min, max, v) {
    return Math.min(Math.max(v, min), max);
};
var clamp$1 = curryRange(clamp);
var conditional = function(check, apply) {
    return function(v) {
        return check(v) ? apply(v) : v;
    };
};
var degreesToRadians = function(degrees) {
    return degrees * Math.PI / 180;
};
var dilate = function(a, b, dilation) {
    return a + (b - a) * dilation;
};
var isPoint = function(point) {
    return point.hasOwnProperty("x") && point.hasOwnProperty("y");
};
var isPoint3D = function(point) {
    return isPoint(point) && point.hasOwnProperty("z");
};
var distance1D = function(a, b) {
    return Math.abs(a - b);
};
var distance = function(a, b) {
    if (b === void 0) b = zeroPoint;
    if (isNum(a) && isNum(b)) return distance1D(a, b);
    else if (isPoint(a) && isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = isPoint3D(a) && isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
};
var progress = function(from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
var mix = function(from, to, progress) {
    return -progress * from + progress * to + from;
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var mixLinearColor = function(from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
var colorTypes = [
    (0, _styleValueTypes.hex),
    (0, _styleValueTypes.rgba),
    (0, _styleValueTypes.hsla)
];
var getColorType = function(v) {
    return colorTypes.find(function(type) {
        return type.test(v);
    });
};
var mixColor = function(from, to) {
    var fromColorType = getColorType(from);
    var toColorType = getColorType(to);
    (0, _heyListen.invariant)(fromColorType.transform === toColorType.transform, "Both colors must be Hex and/or RGBA, or both must be HSLA");
    var fromColor = fromColorType.parse(from);
    var toColor = toColorType.parse(to);
    var blended = __assign({}, fromColor);
    var mixFunc = fromColorType === (0, _styleValueTypes.hsla) ? mix : mixLinearColor;
    return function(v) {
        for(var key in blended)if (key !== "alpha") blended[key] = mixFunc(fromColor[key], toColor[key], v);
        blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
        return fromColorType.transform(blended);
    };
};
var combineFunctions = function(a, b) {
    return function(v) {
        return b(a(v));
    };
};
var pipe = function() {
    var transformers = [];
    for(var _i = 0; _i < arguments.length; _i++)transformers[_i] = arguments[_i];
    return transformers.reduce(combineFunctions);
};
var mixArray = function(from, to) {
    var output = from.slice();
    var numValues = output.length;
    var blendValue = from.map(function(fromThis, i) {
        var toThis = to[i];
        if (isNum(fromThis)) return function(v) {
            return mix(fromThis, toThis, v);
        };
        else if ((0, _styleValueTypes.color).test(fromThis)) return mixColor(fromThis, toThis);
        else return mixComplex(fromThis, toThis);
    });
    return function(v) {
        for(var i = 0; i < numValues; i++)output[i] = blendValue[i](v);
        return output;
    };
};
var mixComplex = function(from, to) {
    var valueTemplate = (0, _styleValueTypes.complex).createTransformer(from);
    (0, _heyListen.invariant)(valueTemplate(from) === (0, _styleValueTypes.complex).createTransformer(to)(from), "Values '" + from + "' and '" + to + "' are of different format, or a value might have changed value type.");
    return pipe(mixArray((0, _styleValueTypes.complex).parse(from), (0, _styleValueTypes.complex).parse(to)), valueTemplate);
};
var mixNumber = curryRange(mix);
var getMixer = function(v) {
    return typeof v === "number" ? mixNumber : (0, _styleValueTypes.color).test(v) ? mixColor : mixComplex;
};
var slowInterpolate = function(input, output, rangeLength, rangeEasing) {
    var finalIndex = rangeLength - 1;
    if (input[0] > input[finalIndex]) {
        input.reverse();
        output.reverse();
    }
    var mixerFactories = Array(finalIndex).fill(getMixer(output[0]));
    var mixers = mixerFactories.map(function(factory, i) {
        return factory(output[i], output[i + 1]);
    });
    return function(v) {
        if (v <= input[0]) return output[0];
        if (v >= input[finalIndex]) return output[finalIndex];
        var i = 1;
        for(; i < rangeLength; i++){
            if (input[i] > v || i === finalIndex) break;
        }
        var progressInRange = progress(input[i - 1], input[i], v);
        var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
        return mixers[i - 1](easedProgress);
    };
};
var fastInterpolate = function(minA, maxA, minB, maxB) {
    return function(v) {
        return (v - minA) * (maxB - minB) / (maxA - minA) + minB;
    };
};
var interpolate = function(input, output, rangeEasing) {
    var rangeLength = input.length;
    return rangeLength === 2 && typeof output[0] === "number" ? fastInterpolate(input[0], input[1], output[0], output[1]) : slowInterpolate(input, output, rangeLength, rangeEasing);
};
var pointFromVector = function(origin, angle, distance) {
    angle = degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};
var toDecimal = function(num, precision) {
    if (precision === void 0) precision = 2;
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};
var smoothFrame = function(prevValue, nextValue, duration, smoothing) {
    if (smoothing === void 0) smoothing = 0;
    return toDecimal(prevValue + duration * (nextValue - prevValue) / Math.max(smoothing, duration));
};
var smooth = function(strength) {
    if (strength === void 0) strength = 50;
    var previousValue = 0;
    var lastUpdated = 0;
    return function(v) {
        var currentFramestamp = (0, _framesync.getFrameData)().timestamp;
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? smoothFrame(previousValue, v, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
};
var snap = function(points) {
    if (typeof points === "number") return function(v) {
        return Math.round(v / points) * points;
    };
    else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function(v) {
            var lastDistance = Math.abs(points[0] - v);
            for(i_1 = 1; i_1 < numPoints_1; i_1++){
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0) return point;
                if (distance > lastDistance) return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1) return point;
                lastDistance = distance;
            }
        };
    }
};
var identity = function(v) {
    return v;
};
var springForce = function(alterDisplacement) {
    if (alterDisplacement === void 0) alterDisplacement = identity;
    return curryRange(function(constant, origin, v) {
        var displacement = origin - v;
        var springModifiedDisplacement = -(0 - constant + 1) * (0 - alterDisplacement(Math.abs(displacement)));
        return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
    });
};
var springForceLinear = springForce();
var springForceExpo = springForce(Math.sqrt);
var velocityPerFrame = function(xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
};
var velocityPerSecond = function(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
};
var wrap = function(min, max, v) {
    var rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};
var wrap$1 = curryRange(wrap);
var clampProgress = clamp$1(0, 1);
var steps = function(steps, direction) {
    if (direction === void 0) direction = "end";
    return function(progress) {
        progress = direction === "end" ? Math.min(progress, 0.999) : Math.max(progress, 0.001);
        var expanded = progress * steps;
        var rounded = direction === "end" ? Math.floor(expanded) : Math.ceil(expanded);
        return clampProgress(rounded / steps);
    };
};

},{"style-value-types":"f8zMr","hey-listen":"8yK8Z","framesync":"fmg1O","@popmotion/easing":"jPIK5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f8zMr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alpha", ()=>alpha);
parcelHelpers.export(exports, "color", ()=>color);
parcelHelpers.export(exports, "complex", ()=>complex);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "hex", ()=>hex);
parcelHelpers.export(exports, "hsla", ()=>hsla);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "percent", ()=>percent);
parcelHelpers.export(exports, "progressPercentage", ()=>progressPercentage);
parcelHelpers.export(exports, "px", ()=>px);
parcelHelpers.export(exports, "rgbUnit", ()=>rgbUnit);
parcelHelpers.export(exports, "rgba", ()=>rgba);
parcelHelpers.export(exports, "scale", ()=>scale);
parcelHelpers.export(exports, "vh", ()=>vh);
parcelHelpers.export(exports, "vw", ()=>vw);
var _tslib = require("tslib");
var clamp = function(min, max) {
    return function(v) {
        return Math.max(Math.min(v, max), min);
    };
};
var sanitize = function(v) {
    return v % 1 ? Number(v.toFixed(5)) : v;
};
var floatRegex = /(-)?(\d[\d\.]*)/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
var number = {
    test: function(v) {
        return typeof v === "number";
    },
    parse: parseFloat,
    transform: function(v) {
        return v;
    }
};
var alpha = (0, _tslib.__assign)((0, _tslib.__assign)({}, number), {
    transform: clamp(0, 1)
});
var scale = (0, _tslib.__assign)((0, _tslib.__assign)({}, number), {
    default: 1
});
var createUnitType = function(unit) {
    return {
        test: function(v) {
            return typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1;
        },
        parse: parseFloat,
        transform: function(v) {
            return "" + v + unit;
        }
    };
};
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = (0, _tslib.__assign)((0, _tslib.__assign)({}, percent), {
    parse: function(v) {
        return percent.parse(v) / 100;
    },
    transform: function(v) {
        return percent.transform(v * 100);
    }
});
var getValueFromFunctionString = function(value) {
    return value.substring(value.indexOf("(") + 1, value.lastIndexOf(")"));
};
var clampRgbUnit = clamp(0, 255);
var isRgba = function(v) {
    return v.red !== undefined;
};
var isHsla = function(v) {
    return v.hue !== undefined;
};
function getValuesAsArray(value) {
    return getValueFromFunctionString(value).replace(/(,|\/)/g, " ").split(/ \s*/);
}
var splitColorValues = function(terms) {
    return function(v) {
        if (typeof v !== "string") return v;
        var values = {};
        var valuesArray = getValuesAsArray(v);
        for(var i = 0; i < 4; i++)values[terms[i]] = valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        return values;
    };
};
var rgbaTemplate = function(_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
};
var hslaTemplate = function(_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha + ")";
};
var rgbUnit = (0, _tslib.__assign)((0, _tslib.__assign)({}, number), {
    transform: function(v) {
        return Math.round(clampRgbUnit(v));
    }
});
function isColorString(color, colorType) {
    return color.startsWith(colorType) && singleColorRegex.test(color);
}
var rgba = {
    test: function(v) {
        return typeof v === "string" ? isColorString(v, "rgb") : isRgba(v);
    },
    parse: splitColorValues([
        "red",
        "green",
        "blue",
        "alpha"
    ]),
    transform: function(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hsla = {
    test: function(v) {
        return typeof v === "string" ? isColorString(v, "hsl") : isHsla(v);
    },
    parse: splitColorValues([
        "hue",
        "saturation",
        "lightness",
        "alpha"
    ]),
    transform: function(_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha$1 = _b === void 0 ? 1 : _b;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(sanitize(saturation)),
            lightness: percent.transform(sanitize(lightness)),
            alpha: sanitize(alpha.transform(alpha$1))
        });
    }
};
var hex = (0, _tslib.__assign)((0, _tslib.__assign)({}, rgba), {
    test: function(v) {
        return typeof v === "string" && isColorString(v, "#");
    },
    parse: function(v) {
        var r = "";
        var g = "";
        var b = "";
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        } else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    }
});
var color = {
    test: function(v) {
        return typeof v === "string" && singleColorRegex.test(v) || isRgba(v) || isHsla(v);
    },
    parse: function(v) {
        if (rgba.test(v)) return rgba.parse(v);
        else if (hsla.test(v)) return hsla.parse(v);
        else if (hex.test(v)) return hex.parse(v);
        return v;
    },
    transform: function(v) {
        if (isRgba(v)) return rgba.transform(v);
        else if (isHsla(v)) return hsla.transform(v);
        return v;
    }
};
var COLOR_TOKEN = "${c}";
var NUMBER_TOKEN = "${n}";
var convertNumbersToZero = function(v) {
    return typeof v === "number" ? 0 : v;
};
var complex = {
    test: function(v) {
        if (typeof v !== "string" || !isNaN(v)) return false;
        var numValues = 0;
        var foundNumbers = v.match(floatRegex);
        var foundColors = v.match(colorRegex);
        if (foundNumbers) numValues += foundNumbers.length;
        if (foundColors) numValues += foundColors.length;
        return numValues > 0;
    },
    parse: function(v) {
        var input = v;
        var parsed = [];
        var foundColors = input.match(colorRegex);
        if (foundColors) {
            input = input.replace(colorRegex, COLOR_TOKEN);
            parsed.push.apply(parsed, foundColors.map(color.parse));
        }
        var foundNumbers = input.match(floatRegex);
        if (foundNumbers) parsed.push.apply(parsed, foundNumbers.map(number.parse));
        return parsed;
    },
    createTransformer: function(prop) {
        var template = prop;
        var token = 0;
        var foundColors = prop.match(colorRegex);
        var numColors = foundColors ? foundColors.length : 0;
        if (foundColors) for(var i = 0; i < numColors; i++){
            template = template.replace(foundColors[i], COLOR_TOKEN);
            token++;
        }
        var foundNumbers = template.match(floatRegex);
        var numNumbers = foundNumbers ? foundNumbers.length : 0;
        if (foundNumbers) for(var i = 0; i < numNumbers; i++){
            template = template.replace(foundNumbers[i], NUMBER_TOKEN);
            token++;
        }
        return function(v) {
            var output = template;
            for(var i = 0; i < token; i++)output = output.replace(i < numColors ? COLOR_TOKEN : NUMBER_TOKEN, i < numColors ? color.transform(v[i]) : sanitize(v[i]));
            return output;
        };
    },
    getAnimatableNone: function(target) {
        var parsedTarget = complex.parse(target);
        var targetTransformer = complex.createTransformer(target);
        return targetTransformer(parsedTarget.map(convertNumbersToZero));
    }
};

},{"tslib":"laJP1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"laJP1":[function(require,module,exports) {
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
parcelHelpers.export(exports, "__spread", ()=>__spread);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yK8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var warning = function() {};
var invariant = function() {};
warning = function(check, message) {
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = function(check, message) {
    if (!check) throw new Error(message);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fmg1O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelSync", ()=>cancelSync);
parcelHelpers.export(exports, "getFrameData", ()=>getFrameData);
var _heyListen = require("hey-listen");
var prevTime = 0;
var onNextFrame = typeof window !== "undefined" && window.requestAnimationFrame !== undefined ? function(callback) {
    return window.requestAnimationFrame(callback);
} : function(callback) {
    var timestamp = Date.now();
    var timeToCall = Math.max(0, 16.7 - (timestamp - prevTime));
    prevTime = timestamp + timeToCall;
    setTimeout(function() {
        return callback(prevTime);
    }, timeToCall);
};
var createStep = function(setRunNextFrame) {
    var processToRun = [];
    var processToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    var cancelled = new WeakSet();
    var toKeepAlive = new WeakSet();
    var renderStep = {
        cancel: function(process) {
            var indexOfCallback = processToRunNextFrame.indexOf(process);
            cancelled.add(process);
            if (indexOfCallback !== -1) processToRunNextFrame.splice(indexOfCallback, 1);
        },
        process: function(frame) {
            var _a;
            isProcessing = true;
            _a = [
                processToRunNextFrame,
                processToRun
            ], processToRun = _a[0], processToRunNextFrame = _a[1];
            processToRunNextFrame.length = 0;
            numThisFrame = processToRun.length;
            if (numThisFrame) {
                var process_1;
                for(i = 0; i < numThisFrame; i++){
                    process_1 = processToRun[i];
                    process_1(frame);
                    if (toKeepAlive.has(process_1) === true && !cancelled.has(process_1)) {
                        renderStep.schedule(process_1);
                        setRunNextFrame(true);
                    }
                }
            }
            isProcessing = false;
        },
        schedule: function(process, keepAlive, immediate) {
            if (keepAlive === void 0) keepAlive = false;
            if (immediate === void 0) immediate = false;
            (0, _heyListen.invariant)(typeof process === "function", "Argument must be a function");
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;
            cancelled.delete(process);
            if (keepAlive) toKeepAlive.add(process);
            if (buffer.indexOf(process) === -1) {
                buffer.push(process);
                if (addToCurrentBuffer) numThisFrame = processToRun.length;
            }
        }
    };
    return renderStep;
};
var maxElapsed = 40;
var defaultElapsed = 1 / 60 * 1000;
var useDefaultElapsed = true;
var willRunNextFrame = false;
var isProcessing = false;
var frame = {
    delta: 0,
    timestamp: 0
};
var stepsOrder = [
    "read",
    "update",
    "preRender",
    "render",
    "postRender"
];
var setWillRunNextFrame = function(willRun) {
    return willRunNextFrame = willRun;
};
var steps = /*#__PURE__*/ stepsOrder.reduce(function(acc, key) {
    acc[key] = createStep(setWillRunNextFrame);
    return acc;
}, {});
var sync = /*#__PURE__*/ stepsOrder.reduce(function(acc, key) {
    var step = steps[key];
    acc[key] = function(process, keepAlive, immediate) {
        if (keepAlive === void 0) keepAlive = false;
        if (immediate === void 0) immediate = false;
        if (!willRunNextFrame) startLoop();
        step.schedule(process, keepAlive, immediate);
        return process;
    };
    return acc;
}, {});
var cancelSync = /*#__PURE__*/ stepsOrder.reduce(function(acc, key) {
    acc[key] = steps[key].cancel;
    return acc;
}, {});
var processStep = function(stepId) {
    return steps[stepId].process(frame);
};
var processFrame = function(timestamp) {
    willRunNextFrame = false;
    frame.delta = useDefaultElapsed ? defaultElapsed : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
    if (!useDefaultElapsed) defaultElapsed = frame.delta;
    frame.timestamp = timestamp;
    isProcessing = true;
    stepsOrder.forEach(processStep);
    isProcessing = false;
    if (willRunNextFrame) {
        useDefaultElapsed = false;
        onNextFrame(processFrame);
    }
};
var startLoop = function() {
    willRunNextFrame = true;
    useDefaultElapsed = true;
    if (!isProcessing) onNextFrame(processFrame);
};
var getFrameData = function() {
    return frame;
};
exports.default = sync;

},{"hey-listen":"8yK8Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jPIK5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reversed", ()=>reversed);
parcelHelpers.export(exports, "mirrored", ()=>mirrored);
parcelHelpers.export(exports, "createReversedEasing", ()=>createReversedEasing);
parcelHelpers.export(exports, "createMirroredEasing", ()=>createMirroredEasing);
parcelHelpers.export(exports, "createExpoIn", ()=>createExpoIn);
parcelHelpers.export(exports, "createBackIn", ()=>createBackIn);
parcelHelpers.export(exports, "createAnticipateEasing", ()=>createAnticipateEasing);
parcelHelpers.export(exports, "linear", ()=>linear);
parcelHelpers.export(exports, "easeIn", ()=>easeIn);
parcelHelpers.export(exports, "easeOut", ()=>easeOut);
parcelHelpers.export(exports, "easeInOut", ()=>easeInOut);
parcelHelpers.export(exports, "circIn", ()=>circIn);
parcelHelpers.export(exports, "circOut", ()=>circOut);
parcelHelpers.export(exports, "circInOut", ()=>circInOut);
parcelHelpers.export(exports, "backIn", ()=>backIn);
parcelHelpers.export(exports, "backOut", ()=>backOut);
parcelHelpers.export(exports, "backInOut", ()=>backInOut);
parcelHelpers.export(exports, "anticipate", ()=>anticipate);
parcelHelpers.export(exports, "bounceOut", ()=>bounceOut);
parcelHelpers.export(exports, "bounceIn", ()=>bounceIn);
parcelHelpers.export(exports, "bounceInOut", ()=>bounceInOut);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var reversed = function(easing) {
    return function(p) {
        return 1 - easing(1 - p);
    };
};
var mirrored = function(easing) {
    return function(p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
var createReversedEasing = reversed;
var createMirroredEasing = mirrored;
var createExpoIn = function(power) {
    return function(p) {
        return Math.pow(p, power);
    };
};
var createBackIn = function(power) {
    return function(p) {
        return p * p * ((power + 1) * p - power);
    };
};
var createAnticipateEasing = function(power) {
    var backEasing = createBackIn(power);
    return function(p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
var linear = function(p) {
    return p;
};
var easeIn = /*#__PURE__*/ createExpoIn(2);
var easeOut = /*#__PURE__*/ reversed(easeIn);
var easeInOut = /*#__PURE__*/ mirrored(easeIn);
var circIn = function(p) {
    return 1 - Math.sin(Math.acos(p));
};
var circOut = /*#__PURE__*/ reversed(circIn);
var circInOut = /*#__PURE__*/ mirrored(circOut);
var backIn = /*#__PURE__*/ createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = /*#__PURE__*/ reversed(backIn);
var backInOut = /*#__PURE__*/ mirrored(backIn);
var anticipate = /*#__PURE__*/ createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var BOUNCE_FIRST_THRESHOLD = 4.0 / 11.0;
var BOUNCE_SECOND_THRESHOLD = 8.0 / 11.0;
var BOUNCE_THIRD_THRESHOLD = 0.9;
var ca = 4356.0 / 361.0;
var cb = 35442.0 / 1805.0;
var cc = 16061.0 / 1805.0;
var bounceOut = function(p) {
    var p2 = p * p;
    return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = function(p) {
    return 1.0 - bounceOut(1.0 - p);
};
var bounceInOut = function(p) {
    return p < 0.5 ? 0.5 * (1.0 - bounceOut(1.0 - p * 2.0)) : 0.5 * bounceOut(p * 2.0 - 1.0) + 0.5;
};
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1.0 / (K_SPLINE_TABLE_SIZE - 1.0);
var FLOAT_32_SUPPORTED = typeof Float32Array !== "undefined";
var a = function(a1, a2) {
    return 1.0 - 3.0 * a2 + 3.0 * a1;
};
var b = function(a1, a2) {
    return 3.0 * a2 - 6.0 * a1;
};
var c = function(a1) {
    return 3.0 * a1;
};
var getSlope = function(t, a1, a2) {
    return 3.0 * a(a1, a2) * t * t + 2.0 * b(a1, a2) * t + c(a1);
};
var calcBezier = function(t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var binarySubdivide = function(aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2.0;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0.0) aB = currentT;
            else aA = currentT;
        }while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
        return currentT;
    };
    var newtonRaphsonIterate = function(aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for(; i < NEWTON_ITERATIONS; ++i){
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0.0) return aGuessT;
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function() {
        for(var i = 0; i < K_SPLINE_TABLE_SIZE; ++i)sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
    };
    var getTForX = function(aX) {
        var intervalStart = 0.0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0.0;
        var guessForT = 0.0;
        var initialSlope = 0.0;
        for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += K_SAMPLE_STEP_SIZE;
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(aX, guessForT);
        else if (initialSlope === 0.0) return guessForT;
        else return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
    };
    calcSampleValues();
    var resolver = function(aX) {
        var returnValue;
        if (mX1 === mY1 && mX2 === mY2) returnValue = aX;
        else if (aX === 0) returnValue = 0;
        else if (aX === 1) returnValue = 1;
        else returnValue = calcBezier(getTForX(aX), mY1, mY2);
        return returnValue;
    };
    return resolver;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNDvw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createStylerFactory", ()=>createStyler);
parcelHelpers.export(exports, "buildStyleProperty", ()=>buildStyleProperty);
parcelHelpers.export(exports, "isTransformProp", ()=>isTransformProp);
var _framesync = require("framesync");
var _framesyncDefault = parcelHelpers.interopDefault(_framesync);
var _styleValueTypes = require("style-value-types");
var _heyListen = require("hey-listen");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }
    return t;
}
var createStyler = function(_a) {
    var onRead = _a.onRead, onRender = _a.onRender, _b = _a.uncachedValues, uncachedValues = _b === void 0 ? new Set() : _b, _c = _a.useCache, useCache = _c === void 0 ? true : _c;
    return function(props) {
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        var setValue = function(key, value) {
            var currentValue = state[key];
            state[key] = value;
            if (state[key] !== currentValue) {
                if (changedValues.indexOf(key) === -1) changedValues.push(key);
                if (!hasChanged) {
                    hasChanged = true;
                    (0, _framesyncDefault.default).render(render);
                }
            }
        };
        function render(forceRender) {
            if (forceRender === void 0) forceRender = false;
            if (forceRender === true || hasChanged) {
                onRender(state, props, changedValues);
                hasChanged = false;
                changedValues.length = 0;
            }
            return this;
        }
        return {
            get: function(key) {
                return key ? useCache && !uncachedValues.has(key) && state[key] !== undefined ? state[key] : onRead(key, props) : state;
            },
            set: function(values, value) {
                if (typeof values === "string") {
                    if (value !== undefined) setValue(values, value);
                    else return function(v) {
                        return setValue(values, v);
                    };
                } else {
                    for(var key in values)if (values.hasOwnProperty(key)) setValue(key, values[key]);
                }
                return this;
            },
            render: render
        };
    };
};
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
var setDomAttrs = function(element, attrs) {
    for(var key in attrs)if (attrs.hasOwnProperty(key)) element.setAttribute(key, attrs[key]);
};
var camelCache = /*#__PURE__*/ new Map();
var dashCache = /*#__PURE__*/ new Map();
var prefixes = [
    "Webkit",
    "Moz",
    "O",
    "ms",
    ""
];
var numPrefixes = prefixes.length;
var isBrowser = typeof document !== "undefined";
var testElement;
var setDashPrefix = function(key, prefixed) {
    return dashCache.set(key, camelToDash(prefixed));
};
var testPrefix = function(key) {
    testElement = testElement || document.createElement("div");
    for(var i = 0; i < numPrefixes; i++){
        var prefix = prefixes[i];
        var noPrefix = prefix === "";
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style || noPrefix) {
            camelCache.set(key, prefixedPropertyName);
            setDashPrefix(key, "" + (noPrefix ? "" : "-") + camelToDash(prefixedPropertyName));
        }
    }
};
var setServerProperty = function(key) {
    return setDashPrefix(key, key);
};
var prefixer = function(key, asDashCase) {
    if (asDashCase === void 0) asDashCase = false;
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key)) isBrowser ? testPrefix(key) : setServerProperty(key);
    return cache.get(key) || key;
};
var axes = [
    "",
    "X",
    "Y",
    "Z"
];
var order = [
    "scale",
    "rotate",
    "skew",
    "transformPerspective"
];
var transformProps = /*#__PURE__*/ order.reduce(function(acc, key) {
    return axes.reduce(function(axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, [
    "x",
    "y",
    "z"
]);
var transformPropDictionary = /*#__PURE__*/ transformProps.reduce(function(dict, key) {
    dict[key] = true;
    return dict;
}, {});
var isTransformProp = function(key) {
    return transformPropDictionary[key] === true;
};
var sortTransformProps = function(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
};
var isTransformOriginProp = function(key) {
    return key === "originX" || key === "originY";
};
var valueTypes = {
    color: (0, _styleValueTypes.color),
    backgroundColor: (0, _styleValueTypes.color),
    outlineColor: (0, _styleValueTypes.color),
    fill: (0, _styleValueTypes.color),
    stroke: (0, _styleValueTypes.color),
    borderColor: (0, _styleValueTypes.color),
    borderTopColor: (0, _styleValueTypes.color),
    borderRightColor: (0, _styleValueTypes.color),
    borderBottomColor: (0, _styleValueTypes.color),
    borderLeftColor: (0, _styleValueTypes.color),
    borderWidth: (0, _styleValueTypes.px),
    borderTopWidth: (0, _styleValueTypes.px),
    borderRightWidth: (0, _styleValueTypes.px),
    borderBottomWidth: (0, _styleValueTypes.px),
    borderLeftWidth: (0, _styleValueTypes.px),
    borderRadius: (0, _styleValueTypes.px),
    borderTopLeftRadius: (0, _styleValueTypes.px),
    borderTopRightRadius: (0, _styleValueTypes.px),
    borderBottomRightRadius: (0, _styleValueTypes.px),
    borderBottomLeftRadius: (0, _styleValueTypes.px),
    width: (0, _styleValueTypes.px),
    maxWidth: (0, _styleValueTypes.px),
    height: (0, _styleValueTypes.px),
    maxHeight: (0, _styleValueTypes.px),
    top: (0, _styleValueTypes.px),
    right: (0, _styleValueTypes.px),
    bottom: (0, _styleValueTypes.px),
    left: (0, _styleValueTypes.px),
    padding: (0, _styleValueTypes.px),
    paddingTop: (0, _styleValueTypes.px),
    paddingRight: (0, _styleValueTypes.px),
    paddingBottom: (0, _styleValueTypes.px),
    paddingLeft: (0, _styleValueTypes.px),
    margin: (0, _styleValueTypes.px),
    marginTop: (0, _styleValueTypes.px),
    marginRight: (0, _styleValueTypes.px),
    marginBottom: (0, _styleValueTypes.px),
    marginLeft: (0, _styleValueTypes.px),
    rotate: (0, _styleValueTypes.degrees),
    rotateX: (0, _styleValueTypes.degrees),
    rotateY: (0, _styleValueTypes.degrees),
    rotateZ: (0, _styleValueTypes.degrees),
    scale: (0, _styleValueTypes.scale),
    scaleX: (0, _styleValueTypes.scale),
    scaleY: (0, _styleValueTypes.scale),
    scaleZ: (0, _styleValueTypes.scale),
    skew: (0, _styleValueTypes.degrees),
    skewX: (0, _styleValueTypes.degrees),
    skewY: (0, _styleValueTypes.degrees),
    distance: (0, _styleValueTypes.px),
    x: (0, _styleValueTypes.px),
    y: (0, _styleValueTypes.px),
    z: (0, _styleValueTypes.px),
    perspective: (0, _styleValueTypes.px),
    opacity: (0, _styleValueTypes.alpha),
    originX: (0, _styleValueTypes.percent),
    originY: (0, _styleValueTypes.percent),
    originZ: (0, _styleValueTypes.px)
};
var getValueType = function(key) {
    return valueTypes[key];
};
var SCROLL_LEFT = "scrollLeft";
var SCROLL_TOP = "scrollTop";
var scrollKeys = /*#__PURE__*/ new Set([
    SCROLL_LEFT,
    SCROLL_TOP
]);
var blacklist = /*#__PURE__*/ new Set([
    SCROLL_LEFT,
    SCROLL_TOP,
    "transform"
]);
var aliasMap = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
};
var isCustomTemplate = function(v) {
    return typeof v === "function";
};
var buildTransform = function(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration) {
    var transformString = "";
    var transformHasZ = false;
    transformKeys.sort(sortTransformProps);
    var numTransformKeys = transformKeys.length;
    for(var i = 0; i < numTransformKeys; i++){
        var key = transformKeys[i];
        transformString += (aliasMap[key] || key) + "(" + transform[key] + ") ";
        transformHasZ = key === "z" ? true : transformHasZ;
    }
    if (!transformHasZ && enableHardwareAcceleration) transformString += "translateZ(0)";
    else transformString = transformString.trim();
    if (isCustomTemplate(state.transform)) transformString = state.transform(transform, transformString);
    else if (transformIsDefault) transformString = "none";
    return transformString;
};
var buildStyleProperty = function(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, isDashCase) {
    if (enableHardwareAcceleration === void 0) enableHardwareAcceleration = true;
    if (styles === void 0) styles = {};
    if (transform === void 0) transform = {};
    if (transformOrigin === void 0) transformOrigin = {};
    if (transformKeys === void 0) transformKeys = [];
    if (isDashCase === void 0) isDashCase = false;
    var transformIsDefault = true;
    var hasTransform = false;
    var hasTransformOrigin = false;
    for(var key in state){
        var value = state[key];
        var valueType = getValueType(key);
        var valueAsType = typeof value === "number" && valueType ? valueType.transform(value) : value;
        if (isTransformProp(key)) {
            hasTransform = true;
            transform[key] = valueAsType;
            transformKeys.push(key);
            if (transformIsDefault) {
                if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) transformIsDefault = false;
            }
        } else if (isTransformOriginProp(key)) {
            transformOrigin[key] = valueAsType;
            hasTransformOrigin = true;
        } else if (!blacklist.has(key) || !isCustomTemplate(valueAsType)) styles[prefixer(key, isDashCase)] = valueAsType;
    }
    if (hasTransform || typeof state.transform === "function") styles.transform = buildTransform(state, transform, transformKeys, transformIsDefault, enableHardwareAcceleration);
    if (hasTransformOrigin) styles.transformOrigin = (transformOrigin.originX || 0) + " " + (transformOrigin.originY || 0) + " " + (transformOrigin.originZ || 0);
    return styles;
};
var createStyleBuilder = function(enableHardwareAcceleration) {
    if (enableHardwareAcceleration === void 0) enableHardwareAcceleration = true;
    var styles = {};
    var transform = {};
    var transformOrigin = {};
    var transformKeys = [];
    return function(state) {
        transformKeys.length = 0;
        buildStyleProperty(state, enableHardwareAcceleration, styles, transform, transformOrigin, transformKeys, true);
        return styles;
    };
};
var cssStyler = /*#__PURE__*/ createStyler({
    onRead: function(key, _a) {
        var element = _a.element, preparseOutput = _a.preparseOutput;
        var valueType = getValueType(key);
        if (isTransformProp(key)) return valueType ? valueType.default || 0 : 0;
        else if (scrollKeys.has(key)) return element[key];
        else {
            var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer(key, true)) || 0;
            return preparseOutput && valueType && valueType.parse ? valueType.parse(domValue) : domValue;
        }
    },
    onRender: function(state, _a, changedValues) {
        var element = _a.element, buildStyles = _a.buildStyles;
        Object.assign(element.style, buildStyles(state));
        if (changedValues.indexOf(SCROLL_LEFT) !== -1) element.scrollLeft = state.scrollLeft;
        if (changedValues.indexOf(SCROLL_TOP) !== -1) element.scrollTop = state.scrollTop;
    },
    uncachedValues: scrollKeys
});
var css = function(element, _a) {
    if (_a === void 0) _a = {};
    var enableHardwareAcceleration = _a.enableHardwareAcceleration, props = __rest(_a, [
        "enableHardwareAcceleration"
    ]);
    return cssStyler(__assign({
        element: element,
        buildStyles: createStyleBuilder(enableHardwareAcceleration),
        preparseOutput: true
    }, props));
};
var camelCaseAttributes = /*#__PURE__*/ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues"
]);
var ZERO_NOT_ZERO = 0.0000001;
var percentToPixels = function(percent$$1, length) {
    return percent$$1 / 100 * length + "px";
};
var build = function(state, dimensions, isPath, pathLength) {
    var hasTransform = false;
    var hasDashArray = false;
    var props = {};
    var dashArrayStyles = isPath ? {
        pathLength: "0",
        pathSpacing: "" + pathLength
    } : undefined;
    var scale$$1 = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
    var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale$$1 || 1;
    var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
    var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
    var scaleTransformX = -transformOriginX * (scale$$1 * 1);
    var scaleTransformY = -transformOriginY * (scaleY * 1);
    var scaleReplaceX = transformOriginX / scale$$1;
    var scaleReplaceY = transformOriginY / scaleY;
    var transform = {
        translate: "translate(" + state.x + ", " + state.y + ") ",
        scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale$$1 + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
        rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
        skewX: "skewX(" + state.skewX + ") ",
        skewY: "skewY(" + state.skewY + ") "
    };
    for(var key in state)if (state.hasOwnProperty(key)) {
        var value = state[key];
        if (isTransformProp(key)) hasTransform = true;
        else if (isPath && (key === "pathLength" || key === "pathSpacing") && typeof value === "number") {
            hasDashArray = true;
            dashArrayStyles[key] = percentToPixels(value, pathLength);
        } else if (isPath && key === "pathOffset") props["stroke-dashoffset"] = percentToPixels(-value, pathLength);
        else {
            var attrKey = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
            props[attrKey] = value;
        }
    }
    if (hasDashArray) props["stroke-dasharray"] = dashArrayStyles.pathLength + " " + dashArrayStyles.pathSpacing;
    if (hasTransform) {
        props.transform = "";
        for(var key in transform)if (transform.hasOwnProperty(key)) {
            var defaultValue = key === "scale" ? "1" : "0";
            props.transform += transform[key].replace(/undefined/g, defaultValue);
        }
    }
    return props;
};
var int = /*#__PURE__*/ __assign({}, (0, _styleValueTypes.number), {
    transform: Math.round
});
var valueTypes$1 = {
    fill: (0, _styleValueTypes.color),
    stroke: (0, _styleValueTypes.color),
    scale: (0, _styleValueTypes.scale),
    scaleX: (0, _styleValueTypes.scale),
    scaleY: (0, _styleValueTypes.scale),
    opacity: (0, _styleValueTypes.alpha),
    fillOpacity: (0, _styleValueTypes.alpha),
    strokeOpacity: (0, _styleValueTypes.alpha),
    numOctaves: int
};
var getValueType$1 = function(key) {
    return valueTypes$1[key];
};
var getDimensions = function(element) {
    return typeof element.getBBox === "function" ? element.getBBox() : element.getBoundingClientRect();
};
var getSVGElementDimensions = function(element) {
    try {
        return getDimensions(element);
    } catch (e) {
        return {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    }
};
var svgStyler = /*#__PURE__*/ createStyler({
    onRead: function(key, _a) {
        var element = _a.element;
        if (!isTransformProp(key)) return element.getAttribute(key);
        else {
            var valueType = getValueType$1(key);
            return valueType ? valueType.default : 0;
        }
    },
    onRender: function(state, _a) {
        var dimensions = _a.dimensions, element = _a.element, isPath = _a.isPath, pathLength = _a.pathLength;
        setDomAttrs(element, build(state, dimensions, isPath, pathLength));
    }
});
var svg = function(element) {
    var dimensions = getSVGElementDimensions(element);
    var props = {
        element: element,
        dimensions: dimensions,
        isPath: false
    };
    if (element.tagName === "path") {
        props.isPath = true;
        props.pathLength = element.getTotalLength();
    }
    return svgStyler(props);
};
var viewport = /*#__PURE__*/ createStyler({
    useCache: false,
    onRead: function(key) {
        return key === "scrollTop" ? window.pageYOffset : window.pageXOffset;
    },
    onRender: function(_a) {
        var _b = _a.scrollTop, scrollTop = _b === void 0 ? 0 : _b, _c = _a.scrollLeft, scrollLeft = _c === void 0 ? 0 : _c;
        return window.scrollTo(scrollLeft, scrollTop);
    }
});
var cache = /*#__PURE__*/ new WeakMap();
var createDOMStyler = function(node, props) {
    var styler;
    if (node instanceof HTMLElement) styler = css(node, props);
    else if (node instanceof SVGElement) styler = svg(node);
    else if (node === window) styler = viewport(node);
    (0, _heyListen.invariant)(styler !== undefined, "No valid node provided. Node must be HTMLElement, SVGElement or window.");
    cache.set(node, styler);
    return styler;
};
var getStyler = function(node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function index(nodeOrSelector, props) {
    var node = typeof nodeOrSelector === "string" ? document.querySelector(nodeOrSelector) : nodeOrSelector;
    return getStyler(node, props);
}
exports.default = index;

},{"framesync":"fmg1O","style-value-types":"f8zMr","hey-listen":"8yK8Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2xOeA","3EPOV"], "3EPOV", "parcelRequire4ee3")

//# sourceMappingURL=index.6ac81859.js.map
