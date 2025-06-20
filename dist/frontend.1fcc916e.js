// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"iUuJv":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "47f455d51fcc916e";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
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
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fILKw":[function(require,module,exports,__globalThis) {
//main.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mainScss = require("./styles/main.scss");
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _routerJs = require("./Router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
var _headerJs = require("./components/Header.js");
var _toastJs = require("./components/Toast.js");
console.log("[main.js] Clearing root element");
const rootEl = document.getElementById("root");
rootEl.innerHTML = "";
console.log("[main.js] Initializing App");
(0, _appJsDefault.default).init().catch((err)=>{
    rootEl.innerHTML = `<p style="color:red;">App failed to load: ${err.message}</p>`;
    console.error("[main.js] App init failed:", err);
});
console.log("[main.js] Initializing Router");
(0, _routerJsDefault.default).init().catch((err)=>{
    console.error("[main.js] Router init failed:", err);
});

},{"./styles/main.scss":"bo7w8","./App.js":"hh6uc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./Router.js":"b5tFI","./components/Header.js":"3PJ6N","./components/Toast.js":"eSyC4"}],"bo7w8":[function() {},{}],"hh6uc":[function(require,module,exports,__globalThis) {
//app.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("./Router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
const App = {
    // Switch base URL depending on environment
    apiBase: window.location.hostname === "localhost" ? "http://localhost:3000/api" : "https://chinwag-backend.onrender.com/api",
    rootEl: null,
    async init () {
        this.rootEl = document.getElementById("root");
        if (!this.rootEl) {
            console.error("[App] Root element #root not found");
            throw new Error("Root element #root not found");
        }
        console.log("[App] Initialising with apiBase:", this.apiBase);
        await (0, _routerJsDefault.default).init();
    }
};
exports.default = App;

},{"./Router.js":"b5tFI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b5tFI":[function(require,module,exports,__globalThis) {
// router.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gotoRoute", ()=>gotoRoute);
parcelHelpers.export(exports, "anchorRoute", ()=>anchorRoute);
var _signInJs = require("./views/SignIn.js");
var _signInJsDefault = parcelHelpers.interopDefault(_signInJs);
var _signUpJs = require("./views/SignUp.js");
var _signUpJsDefault = parcelHelpers.interopDefault(_signUpJs);
var _guestGuideJs = require("./views/GuestGuide.js");
var _guestGuideJsDefault = parcelHelpers.interopDefault(_guestGuideJs);
var _hostGuideJs = require("./views/HostGuide.js");
var _hostGuideJsDefault = parcelHelpers.interopDefault(_hostGuideJs);
var _profileJs = require("./views/Profile.js");
var _profileJsDefault = parcelHelpers.interopDefault(_profileJs);
var _guestHomeJs = require("./views/GuestHome.js");
var _guestHomeJsDefault = parcelHelpers.interopDefault(_guestHomeJs);
var _hostHomeJs = require("./views/HostHome.js");
var _hostHomeJsDefault = parcelHelpers.interopDefault(_hostHomeJs);
var _guestBookingsJs = require("./views/GuestBookings.js");
var _guestBookingsJsDefault = parcelHelpers.interopDefault(_guestBookingsJs);
var _hostBookingsJs = require("./views/HostBookings.js");
var _hostBookingsJsDefault = parcelHelpers.interopDefault(_hostBookingsJs);
var _authJs = require("./Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
const Router = {
    routes: {
        "/signin": (0, _signInJsDefault.default),
        "/signup": (0, _signUpJsDefault.default),
        "/guest-guide": (0, _guestGuideJsDefault.default),
        "/host-guide": (0, _hostGuideJsDefault.default),
        "/profile": (0, _profileJsDefault.default),
        "/guest-home": (0, _guestHomeJsDefault.default),
        "/host-home": (0, _hostHomeJsDefault.default),
        "/guest-bookings": (0, _guestBookingsJsDefault.default),
        "/host-bookings": (0, _hostBookingsJsDefault.default)
    },
    async init () {
        window.addEventListener("popstate", ()=>this.route());
        await this.route();
    },
    async route () {
        const path = window.location.pathname;
        console.log("[Router] Routing to:", path);
        const View = this.routes[path] || (0, _signInJsDefault.default);
        const isAuthenticated = await (0, _authJsDefault.default).check();
        if (!isAuthenticated && ![
            "/signin",
            "/signup"
        ].includes(path)) {
            gotoRoute("/signin");
            return;
        }
        if (isAuthenticated) {
            const { accessLevel } = (0, _authJsDefault.default).currentUser;
            if (path === "/guest-guide" && accessLevel !== 1) {
                gotoRoute("/host-home");
                return;
            }
            if (path === "/host-guide" && accessLevel !== 2) {
                gotoRoute("/guest-home");
                return;
            }
            if (path === "/guest-home" && accessLevel !== 1) {
                gotoRoute("/host-home");
                return;
            }
            if (path === "/host-home" && accessLevel !== 2) {
                gotoRoute("/guest-home");
                return;
            }
            if (path === "/guest-bookings" && accessLevel !== 1) {
                gotoRoute("/host-home");
                return;
            }
            if (path === "/host-bookings" && accessLevel !== 2) {
                gotoRoute("/guest-home");
                return;
            }
        }
        const view = new View();
        view.init();
        view.render();
    }
};
function gotoRoute(path) {
    console.log("[Router] Navigating to:", path);
    history.pushState({}, "", path);
    Router.route();
}
function anchorRoute(e) {
    e.preventDefault();
    const path = e.currentTarget.getAttribute("href");
    if (path) {
        console.log("[Router] Anchor route to:", path);
        gotoRoute(path);
    }
}
exports.default = Router;

},{"./views/SignIn.js":"85knE","./views/SignUp.js":"jPeMQ","./views/GuestGuide.js":"fdhWh","./views/HostGuide.js":"Kckvv","./views/Profile.js":"2fU3z","./views/GuestHome.js":"kXOFZ","./views/HostHome.js":"d2S5w","./views/GuestBookings.js":"66jdU","./views/HostBookings.js":"bmUJu","./Auth.js":"aJFb5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"85knE":[function(require,module,exports,__globalThis) {
// views/SignIn.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
class SignInView {
    constructor(){
        this.loading = false;
    }
    init() {
        document.title = "Sign In - Chinwag";
        console.log("[SignInView] init() called");
        this.render();
    }
    async submitHandler(e) {
        e.preventDefault();
        if (this.loading) return;
        this.loading = true;
        this.render();
        const form = e.target;
        const email = form.querySelector('[name="email"]').value.trim();
        const password = form.querySelector('[name="password"]').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.querySelector("app-toast")?.show("Please enter a valid email address.", "warning");
            this.loading = false;
            this.render();
            return;
        }
        try {
            await (0, _authJsDefault.default).signIn({
                email,
                password
            });
        } catch (err) {
            this.loading = false;
            console.error("[SignInView] Login error:", err);
            if (err.message.includes("User doesn't exist")) {
                document.querySelector("app-toast")?.show("No account found. Redirecting to Sign Up...", "warning");
                setTimeout(()=>(0, _routerJs.gotoRoute)("/signup"), 2000);
            } else if (err.message.includes("Password or email is incorrect")) document.querySelector("app-toast")?.show("Incorrect email or password.", "warning");
            else document.querySelector("app-toast")?.show(`Login failed: ${err.message}`, "error");
            this.render();
        }
    }
    render() {
        console.log("[SignInView] render() called");
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="page-content page-centered" role="main">
          <h1>Sign In</h1>
          <div class="form-wrapper" aria-label="Sign In Form">
            <form @submit=${this.submitHandler.bind(this)}>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autocomplete="email"
                  aria-required="true"
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  required
                  autocomplete="current-password"
                  aria-required="true"
                />
              </label>
              <button
                type="submit"
                class="button primary"
                ?disabled=${this.loading}
                aria-label="Submit Sign In"
              >
                ${this.loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <p>
              Don't have an account?
              <a
                href="/signup"
                @click=${(e)=>{
            e.preventDefault();
            (0, _routerJs.gotoRoute)("/signup");
        }}
                aria-label="Go to Sign Up"
              >
                Sign Up
              </a>
            </p>
          </div>
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = SignInView;

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Router.js":"b5tFI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l15as":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>j);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>A);
parcelHelpers.export(exports, "render", ()=>D);
parcelHelpers.export(exports, "svg", ()=>b);
var t;
const i = window, s = i.trustedTypes, e = s ? s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, o = "$lit$", n = `lit$${(Math.random() + "").slice(9)}$`, l = "?" + n, h = `<${l}>`, r = document, u = ()=>r.createComment(""), d = (t)=>null === t || "object" != typeof t && "function" != typeof t, c = Array.isArray, v = (t)=>c(t) || "function" == typeof (null == t ? void 0 : t[Symbol.iterator]), a = "[ \t\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, _ = /-->/g, m = />/g, p = RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), g = /'/g, $ = /"/g, y = /^(?:script|style|textarea|title)$/i, w = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = w(1), b = w(2), T = Symbol.for("lit-noChange"), A = Symbol.for("lit-nothing"), E = new WeakMap, C = r.createTreeWalker(r, 129, null, !1);
function P(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e ? e.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, e = [];
    let l, r = 2 === i ? "<svg>" : "", u = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let d, c, v = -1, a = 0;
        for(; a < s.length && (u.lastIndex = a, c = u.exec(s), null !== c);)a = u.lastIndex, u === f ? "!--" === c[1] ? u = _ : void 0 !== c[1] ? u = m : void 0 !== c[2] ? (y.test(c[2]) && (l = RegExp("</" + c[2], "g")), u = p) : void 0 !== c[3] && (u = p) : u === p ? ">" === c[0] ? (u = null != l ? l : f, v = -1) : void 0 === c[1] ? v = -2 : (v = u.lastIndex - c[2].length, d = c[1], u = void 0 === c[3] ? p : '"' === c[3] ? $ : g) : u === $ || u === g ? u = p : u === _ || u === m ? u = f : (u = p, l = void 0);
        const w = u === p && t[i + 1].startsWith("/>") ? " " : "";
        r += u === f ? s + h : v >= 0 ? (e.push(d), s.slice(0, v) + o + s.slice(v) + n + w) : s + n + (-2 === v ? (e.push(void 0), i) : w);
    }
    return [
        P(t, r + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        e
    ];
};
class N {
    constructor({ strings: t, _$litType$: i }, e){
        let h;
        this.parts = [];
        let r = 0, d = 0;
        const c = t.length - 1, v = this.parts, [a, f] = V(t, i);
        if (this.el = N.createElement(a, e), C.currentNode = this.el.content, 2 === i) {
            const t = this.el.content, i = t.firstChild;
            i.remove(), t.append(...i.childNodes);
        }
        for(; null !== (h = C.nextNode()) && v.length < c;){
            if (1 === h.nodeType) {
                if (h.hasAttributes()) {
                    const t = [];
                    for (const i of h.getAttributeNames())if (i.endsWith(o) || i.startsWith(n)) {
                        const s = f[d++];
                        if (t.push(i), void 0 !== s) {
                            const t = h.getAttribute(s.toLowerCase() + o).split(n), i = /([.?@])?(.*)/.exec(s);
                            v.push({
                                type: 1,
                                index: r,
                                name: i[2],
                                strings: t,
                                ctor: "." === i[1] ? H : "?" === i[1] ? L : "@" === i[1] ? z : k
                            });
                        } else v.push({
                            type: 6,
                            index: r
                        });
                    }
                    for (const i of t)h.removeAttribute(i);
                }
                if (y.test(h.tagName)) {
                    const t = h.textContent.split(n), i = t.length - 1;
                    if (i > 0) {
                        h.textContent = s ? s.emptyScript : "";
                        for(let s = 0; s < i; s++)h.append(t[s], u()), C.nextNode(), v.push({
                            type: 2,
                            index: ++r
                        });
                        h.append(t[i], u());
                    }
                }
            } else if (8 === h.nodeType) {
                if (h.data === l) v.push({
                    type: 2,
                    index: r
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = h.data.indexOf(n, t + 1));)v.push({
                        type: 7,
                        index: r
                    }), t += n.length - 1;
                }
            }
            r++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    var o, n, l, h;
    if (i === T) return i;
    let r = void 0 !== e ? null === (o = s._$Co) || void 0 === o ? void 0 : o[e] : s._$Cl;
    const u = d(i) ? void 0 : i._$litDirective$;
    return (null == r ? void 0 : r.constructor) !== u && (null === (n = null == r ? void 0 : r._$AO) || void 0 === n || n.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r._$AT(t, s, e)), void 0 !== e ? (null !== (l = (h = s)._$Co) && void 0 !== l ? l : h._$Co = [])[e] = r : s._$Cl = r), void 0 !== r && (i = S(t, r._$AS(t, i.values), r, e)), i;
}
class M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        var i;
        const { el: { content: s }, parts: e } = this._$AD, o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : r).importNode(s, !0);
        C.currentNode = o;
        let n = C.nextNode(), l = 0, h = 0, u = e[0];
        for(; void 0 !== u;){
            if (l === u.index) {
                let i;
                2 === u.type ? i = new R(n, n.nextSibling, this, t) : 1 === u.type ? i = new u.ctor(n, u.name, u.strings, this, t) : 6 === u.type && (i = new Z(n, this, t)), this._$AV.push(i), u = e[++h];
            }
            l !== (null == u ? void 0 : u.index) && (n = C.nextNode(), l++);
        }
        return C.currentNode = r, o;
    }
    v(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    constructor(t, i, s, e){
        var o;
        this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cp = null === (o = null == e ? void 0 : e.isConnected) || void 0 === o || o;
    }
    get _$AU() {
        var t, i;
        return null !== (i = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) && void 0 !== i ? i : this._$Cp;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === (null == t ? void 0 : t.nodeType) && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), d(t) ? t === A || null == t || "" === t ? (this._$AH !== A && this._$AR(), this._$AH = A) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : v(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== A && d(this._$AH) ? this._$AA.nextSibling.data = t : this.$(r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        var i;
        const { values: s, _$litType$: e } = t, o = "number" == typeof e ? this._$AC(t) : (void 0 === e.el && (e.el = N.createElement(P(e.h, e.h[0]), this.options)), e);
        if ((null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === o) this._$AH.v(s);
        else {
            const t = new M(o, this), i = t.u(this.options);
            t.v(s), this.$(i), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = E.get(t.strings);
        return void 0 === i && E.set(t.strings, i = new N(t)), i;
    }
    T(t) {
        c(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const o of t)e === i.length ? i.push(s = new R(this.k(u()), this.k(u()), this, this.options)) : s = i[e], s._$AI(o), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        var s;
        for(null === (s = this._$AP) || void 0 === s || s.call(this, !1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        var i;
        void 0 === this._$AM && (this._$Cp = t, null === (i = this._$AP) || void 0 === i || i.call(this, t));
    }
}
class k {
    constructor(t, i, s, e, o){
        this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = A;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t, i = this, s, e) {
        const o = this.strings;
        let n = !1;
        if (void 0 === o) t = S(this, t, i, 0), n = !d(t) || t !== this._$AH && t !== T, n && (this._$AH = t);
        else {
            const e = t;
            let l, h;
            for(t = o[0], l = 0; l < o.length - 1; l++)h = S(this, e[s + l], i, l), h === T && (h = this._$AH[l]), n || (n = !d(h) || h !== this._$AH[l]), h === A ? t = A : t !== A && (t += (null != h ? h : "") + o[l + 1]), this._$AH[l] = h;
        }
        n && !e && this.j(t);
    }
    j(t) {
        t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === A ? void 0 : t;
    }
}
const I = s ? s.emptyScript : "";
class L extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        t && t !== A ? this.element.setAttribute(this.name, I) : this.element.removeAttribute(this.name);
    }
}
class z extends k {
    constructor(t, i, s, e, o){
        super(t, i, s, e, o), this.type = 5;
    }
    _$AI(t, i = this) {
        var s;
        if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A) === T) return;
        const e = this._$AH, o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive, n = t !== A && (e === A || o);
        o && this.element.removeEventListener(this.name, this, e), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        var i, s;
        "function" == typeof this._$AH ? this._$AH.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this._$AH.handleEvent(t);
    }
}
class Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        S(this, t);
    }
}
const j = {
    O: o,
    P: n,
    A: l,
    C: 1,
    M: V,
    L: M,
    R: v,
    D: S,
    I: R,
    V: k,
    H: L,
    N: z,
    U: H,
    F: Z
}, B = i.litHtmlPolyfillSupport;
null == B || B(N, R), (null !== (t = i.litHtmlVersions) && void 0 !== t ? t : i.litHtmlVersions = []).push("2.8.0");
const D = (t, i, s)=>{
    var e, o;
    const n = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
    let l = n._$litPart$;
    if (void 0 === l) {
        const t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;
        n._$litPart$ = l = new R(i.insertBefore(u(), t), t, void 0, null != s ? s : {});
    }
    return l._$AI(t), l;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
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
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"aJFb5":[function(require,module,exports,__globalThis) {
// auth.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// 👇 Utility for checking if token is expired (can be reused in apiFetch)
parcelHelpers.export(exports, "isTokenExpired", ()=>isTokenExpired);
var _routerJs = require("./Router.js");
var _toastJs = require("./components/Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
const Auth = {
    currentUser: null,
    async signIn ({ email, password }) {
        try {
            console.log("[Auth] Attempting sign-in to:", `${(0, _appJsDefault.default).apiBase}/auth/signin`);
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/auth/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                const errorData = await response.text();
                console.error("[Auth] Sign-in response:", errorData);
                try {
                    const jsonError = JSON.parse(errorData);
                    throw new Error(jsonError.message || "Sign-in failed");
                } catch  {
                    throw new Error("Server returned invalid response");
                }
            }
            const { accessToken, user } = await response.json();
            localStorage.setItem("token", accessToken);
            this.currentUser = user;
            (0, _toastJsDefault.default).show("Welcome back!");
            (0, _routerJs.gotoRoute)(user.isFirstLogin ? user.accessLevel === 1 ? "/guest-guide" : "/host-guide" : user.accessLevel === 1 ? "/guest-home" : "/host-home");
        } catch (err) {
            console.error("[Auth] signIn failed:", err.message);
            throw err;
        }
    },
    async signUp ({ firstName, lastName, email, password, accessLevel }) {
        try {
            console.log("[Auth] Attempting sign-up to:", `${(0, _appJsDefault.default).apiBase}/auth/signup`);
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    accessLevel
                })
            });
            if (!response.ok) {
                const errorData = await response.text();
                console.error("[Auth] Sign-up response:", errorData);
                try {
                    const jsonError = JSON.parse(errorData);
                    throw new Error(jsonError.message || "Sign-up failed");
                } catch  {
                    throw new Error("Server returned invalid response");
                }
            }
            const { accessToken, user } = await response.json();
            localStorage.setItem("token", accessToken);
            this.currentUser = user;
            (0, _toastJsDefault.default).show("Account created!");
            (0, _routerJs.gotoRoute)(user.accessLevel === 1 ? "/guest-guide" : "/host-guide");
        } catch (err) {
            console.error("[Auth] signUp failed:", err.message);
            throw err;
        }
    },
    async check () {
        const token = localStorage.getItem("token");
        if (!token || isTokenExpired(token)) {
            console.warn("[Auth] Token missing or expired");
            this.signOut();
            return false;
        }
        try {
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/auth/validate`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) {
                console.warn("[Auth] Token invalid on server");
                this.signOut();
                return false;
            }
            this.currentUser = await response.json();
            return true;
        } catch (err) {
            console.error("[Auth] check failed:", err.message);
            this.signOut();
            return false;
        }
    },
    signOut () {
        localStorage.removeItem("token");
        this.currentUser = null;
        (0, _toastJsDefault.default).show("Signed out");
        (0, _routerJs.gotoRoute)("/signin");
    }
};
function isTokenExpired(token) {
    try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.exp * 1000 < Date.now();
    } catch (err) {
        console.error("[Auth] Failed to decode token:", err);
        return true;
    }
}
exports.default = Auth;

},{"./Router.js":"b5tFI","./components/Toast.js":"eSyC4","./App.js":"hh6uc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eSyC4":[function(require,module,exports,__globalThis) {
// Toast.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
class AppToast extends (0, _lit.LitElement) {
    static properties = {
        message: {
            type: String
        },
        type: {
            type: String,
            attribute: "data-type"
        },
        visible: {
            type: Boolean,
            reflect: true
        }
    };
    constructor(){
        super();
        this.message = "";
        this.type = "info";
        this.visible = false;
    }
    show(message, type = "info") {
        this.message = message;
        this.type = type;
        this.visible = true;
        setTimeout(()=>{
            this.visible = false;
        }, 3000);
    }
    render() {
        return (0, _lit.html)`<span>${this.message}</span>`;
    }
}
// Prevent multiple registrations
if (!customElements.get("app-toast")) customElements.define("app-toast", AppToast);
exports.default = AppToast;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","lit":"hh14x"}],"hh14x":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _reactiveElement = require("@lit/reactive-element");
var _litHtml = require("lit-html");
var _litElementJs = require("lit-element/lit-element.js");
parcelHelpers.exportAll(_litElementJs, exports);
var _isServerJs = require("lit-html/is-server.js");
parcelHelpers.exportAll(_isServerJs, exports);

},{"@lit/reactive-element":"c9cs8","lit-html":"l15as","lit-element/lit-element.js":"aJ236","lit-html/is-server.js":"4BoSu","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c9cs8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>(0, _cssTagJs.CSSResult));
parcelHelpers.export(exports, "adoptStyles", ()=>(0, _cssTagJs.adoptStyles));
parcelHelpers.export(exports, "css", ()=>(0, _cssTagJs.css));
parcelHelpers.export(exports, "getCompatibleStyle", ()=>(0, _cssTagJs.getCompatibleStyle));
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>(0, _cssTagJs.supportsAdoptingStyleSheets));
parcelHelpers.export(exports, "unsafeCSS", ()=>(0, _cssTagJs.unsafeCSS));
parcelHelpers.export(exports, "ReactiveElement", ()=>u);
parcelHelpers.export(exports, "defaultConverter", ()=>n);
parcelHelpers.export(exports, "notEqual", ()=>a);
var _cssTagJs = require("./css-tag.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var s;
const e = window, r = e.trustedTypes, h = r ? r.emptyScript : "", o = e.reactiveElementPolyfillSupport, n = {
    toAttribute (t, i) {
        switch(i){
            case Boolean:
                t = t ? h : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, i) {
        let s = t;
        switch(i){
            case Boolean:
                s = null !== t;
                break;
            case Number:
                s = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    s = JSON.parse(t);
                } catch (t) {
                    s = null;
                }
        }
        return s;
    }
}, a = (t, i)=>i !== t && (i == i || t == t), l = {
    attribute: !0,
    type: String,
    converter: n,
    reflect: !1,
    hasChanged: a
}, d = "finalized";
class u extends HTMLElement {
    constructor(){
        super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this._$Eu();
    }
    static addInitializer(t) {
        var i;
        this.finalize(), (null !== (i = this.h) && void 0 !== i ? i : this.h = []).push(t);
    }
    static get observedAttributes() {
        this.finalize();
        const t = [];
        return this.elementProperties.forEach((i, s)=>{
            const e = this._$Ep(s, i);
            void 0 !== e && (this._$Ev.set(e, s), t.push(e));
        }), t;
    }
    static createProperty(t, i = l) {
        if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
            const s = "symbol" == typeof t ? Symbol() : "__" + t, e = this.getPropertyDescriptor(t, s, i);
            void 0 !== e && Object.defineProperty(this.prototype, t, e);
        }
    }
    static getPropertyDescriptor(t, i, s) {
        return {
            get () {
                return this[i];
            },
            set (e) {
                const r = this[t];
                this[i] = e, this.requestUpdate(t, r, s);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) || l;
    }
    static finalize() {
        if (this.hasOwnProperty(d)) return !1;
        this[d] = !0;
        const t = Object.getPrototypeOf(this);
        if (t.finalize(), void 0 !== t.h && (this.h = [
            ...t.h
        ]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
            const t = this.properties, i = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t)
            ];
            for (const s of i)this.createProperty(s, t[s]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), !0;
    }
    static finalizeStyles(i) {
        const s = [];
        if (Array.isArray(i)) {
            const e = new Set(i.flat(1 / 0).reverse());
            for (const i of e)s.unshift((0, _cssTagJs.getCompatibleStyle)(i));
        } else void 0 !== i && s.push((0, _cssTagJs.getCompatibleStyle)(i));
        return s;
    }
    static _$Ep(t, i) {
        const s = i.attribute;
        return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    _$Eu() {
        var t;
        this._$E_ = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (t = this.constructor.h) || void 0 === t || t.forEach((t)=>t(this));
    }
    addController(t) {
        var i, s;
        (null !== (i = this._$ES) && void 0 !== i ? i : this._$ES = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
    }
    removeController(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.splice(this._$ES.indexOf(t) >>> 0, 1);
    }
    _$Eg() {
        this.constructor.elementProperties.forEach((t, i)=>{
            this.hasOwnProperty(i) && (this._$Ei.set(i, this[i]), delete this[i]);
        });
    }
    createRenderRoot() {
        var t;
        const s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
        return (0, _cssTagJs.adoptStyles)(s, this.constructor.elementStyles), s;
    }
    connectedCallback() {
        var t;
        void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        var t;
        null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
            var i;
            return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
        });
    }
    attributeChangedCallback(t, i, s) {
        this._$AK(t, s);
    }
    _$EO(t, i, s = l) {
        var e;
        const r = this.constructor._$Ep(t, s);
        if (void 0 !== r && !0 === s.reflect) {
            const h = (void 0 !== (null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) ? s.converter : n).toAttribute(i, s.type);
            this._$El = t, null == h ? this.removeAttribute(r) : this.setAttribute(r, h), this._$El = null;
        }
    }
    _$AK(t, i) {
        var s;
        const e = this.constructor, r = e._$Ev.get(t);
        if (void 0 !== r && this._$El !== r) {
            const t = e.getPropertyOptions(r), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== (null === (s = t.converter) || void 0 === s ? void 0 : s.fromAttribute) ? t.converter : n;
            this._$El = r, this[r] = h.fromAttribute(i, t.type), this._$El = null;
        }
    }
    requestUpdate(t, i, s) {
        let e = !0;
        void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || a)(this[t], i) ? (this._$AL.has(t) || this._$AL.set(t, i), !0 === s.reflect && this._$El !== t && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(t, s))) : e = !1), !this.isUpdatePending && e && (this._$E_ = this._$Ej());
    }
    async _$Ej() {
        this.isUpdatePending = !0;
        try {
            await this._$E_;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Ei && (this._$Ei.forEach((t, i)=>this[i] = t), this._$Ei = void 0);
        let i = !1;
        const s = this._$AL;
        try {
            i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this._$ES) || void 0 === t || t.forEach((t)=>{
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
            }), this.update(s)) : this._$Ek();
        } catch (t) {
            throw i = !1, this._$Ek(), t;
        }
        i && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        var i;
        null === (i = this._$ES) || void 0 === i || i.forEach((t)=>{
            var i;
            return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
        }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$Ek() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$E_;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        void 0 !== this._$EC && (this._$EC.forEach((t, i)=>this._$EO(i, this[i], t)), this._$EC = void 0), this._$Ek();
    }
    updated(t) {}
    firstUpdated(t) {}
}
u[d] = !0, u.elementProperties = new Map, u.elementStyles = [], u.shadowRootOptions = {
    mode: "open"
}, null == o || o({
    ReactiveElement: u
}), (null !== (s = e.reactiveElementVersions) && void 0 !== s ? s : e.reactiveElementVersions = []).push("1.6.3");

},{"./css-tag.js":"8ZIf7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8ZIf7":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSResult", ()=>o);
parcelHelpers.export(exports, "adoptStyles", ()=>S);
parcelHelpers.export(exports, "css", ()=>i);
parcelHelpers.export(exports, "getCompatibleStyle", ()=>c);
parcelHelpers.export(exports, "supportsAdoptingStyleSheets", ()=>e);
parcelHelpers.export(exports, "unsafeCSS", ()=>r);
const t = window, e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s = Symbol(), n = new WeakMap;
class o {
    constructor(t, e, n){
        if (this._$cssResult$ = !0, n !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if (e && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = n.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && n.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const r = (t)=>new o("string" == typeof t ? t : t + "", void 0, s), i = (t, ...e)=>{
    const n = 1 === t.length ? t[0] : e.reduce((e, s, n)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[n + 1], t[0]);
    return new o(n, t, s);
}, S = (s, n)=>{
    e ? s.adoptedStyleSheets = n.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet) : n.forEach((e)=>{
        const n = document.createElement("style"), o = t.litNonce;
        void 0 !== o && n.setAttribute("nonce", o), n.textContent = e.cssText, s.appendChild(n);
    });
}, c = e ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return r(e);
    })(t) : t;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aJ236":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LitElement", ()=>s);
parcelHelpers.export(exports, "UpdatingElement", ()=>r);
parcelHelpers.export(exports, "_$LE", ()=>h);
var _reactiveElement = require("@lit/reactive-element");
parcelHelpers.exportAll(_reactiveElement, exports);
var _litHtml = require("lit-html");
parcelHelpers.exportAll(_litHtml, exports);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var l, o;
const r = (0, _reactiveElement.ReactiveElement);
class s extends (0, _reactiveElement.ReactiveElement) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        var t, e;
        const i = super.createRenderRoot();
        return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = i.firstChild), i;
    }
    update(t) {
        const i = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, _litHtml.render)(i, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t;
        super.connectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
    }
    disconnectedCallback() {
        var t;
        super.disconnectedCallback(), null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
    }
    render() {
        return 0, _litHtml.noChange;
    }
}
s.finalized = !0, s._$litElement$ = !0, null === (l = globalThis.litElementHydrateSupport) || void 0 === l || l.call(globalThis, {
    LitElement: s
});
const n = globalThis.litElementPolyfillSupport;
null == n || n({
    LitElement: s
});
const h = {
    _$AK: (t, e, i)=>{
        t._$AK(e, i);
    },
    _$AL: (t)=>t._$AL
};
(null !== (o = globalThis.litElementVersions) && void 0 !== o ? o : globalThis.litElementVersions = []).push("3.3.3");

},{"@lit/reactive-element":"c9cs8","lit-html":"l15as","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4BoSu":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isServer", ()=>o);
const o = !1;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jPeMQ":[function(require,module,exports,__globalThis) {
// views/signup.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _apiFetchJs = require("../apiFetch.js");
var _apiFetchJsDefault = parcelHelpers.interopDefault(_apiFetchJs);
class SignUpView {
    constructor(){
        this.loading = false;
        this.passwordMismatch = false;
    }
    init() {
        document.title = "Sign Up - Chinwag";
        this.render();
    }
    async submitHandler(e) {
        e.preventDefault();
        if (this.loading) return;
        this.loading = true;
        this.passwordMismatch = false;
        const form = e.target;
        const firstName = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="firstName"]').value.trim());
        const lastName = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="lastName"]').value.trim());
        const email = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="email"]').value.trim());
        const password = form.querySelector('[name="password"]').value;
        const confirmPassword = form.querySelector('[name="confirmPassword"]').value;
        const accessLevel = parseInt(form.querySelector('[name="accessLevel"]').value);
        if (password !== confirmPassword) {
            this.passwordMismatch = true;
            this.loading = false;
            this.render();
            document.querySelector("app-toast")?.show("Passwords do not match", "error");
            return;
        }
        try {
            const response = await (0, _apiFetchJsDefault.default)(`${(0, _appJsDefault.default).apiBase}/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    accessLevel
                })
            });
            if (!response.ok) throw new Error((await response.json()).message);
            const { accessToken, user } = await response.json();
            localStorage.setItem("token", accessToken);
            (0, _authJsDefault.default).currentUser = user;
            document.querySelector("app-toast")?.show("Account created!", "info");
            (0, _routerJs.gotoRoute)(user.accessLevel === 1 ? "/guest-guide" : "/host-guide");
        } catch (err) {
            this.loading = false;
            document.querySelector("app-toast")?.show(`Sign-up failed: ${err.message || "Please try again."}`, "error");
            console.error("[SignUp] Submit failed:", err);
            this.render();
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="page-content page-centered" role="main">
          <h1>Create Your Account</h1>
          <div class="form-wrapper" aria-label="Sign Up Form">
            <form @submit=${this.submitHandler.bind(this)}>
              <label>
                First Name
                <input name="firstName" required autocomplete="given-name" />
              </label>
              <label>
                Last Name
                <input name="lastName" required autocomplete="family-name" />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autocomplete="email"
                />
              </label>
              <label>
                Password
                <input
                  name="password"
                  type="password"
                  required
                  autocomplete="new-password"
                  class=${this.passwordMismatch ? "invalid" : ""}
                />
                ${this.passwordMismatch ? (0, _litHtml.html)`<span>Passwords do not match</span>` : ""}
              </label>
              <label>
                Confirm Password
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  autocomplete="new-password"
                  class=${this.passwordMismatch ? "invalid" : ""}
                />
                ${this.passwordMismatch ? (0, _litHtml.html)`<span>Passwords do not match</span>` : ""}
              </label>
              <fieldset>
                <legend>Register as</legend>
                <label>
                  <input type="radio" name="accessLevel" value="1" checked />
                  Guest
                </label>
                <label>
                  <input type="radio" name="accessLevel" value="2" />
                  Host
                </label>
              </fieldset>
              <button
                type="submit"
                class="button primary"
                ?disabled=${this.loading}
              >
                ${this.loading ? "Signing Up..." : "Sign Up"}
              </button>
            </form>
            <p>
              Already have an account?
              <a
                href="/signin"
                @click=${(e)=>{
            e.preventDefault();
            (0, _routerJs.gotoRoute)("/signin");
        }}
                aria-label="Go to Sign In"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = SignUpView;

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Router.js":"b5tFI","dompurify":"1IHUz","../apiFetch.js":"96g6P","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1IHUz":[function(require,module,exports,__globalThis) {
/*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    'use strict';
    const { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object;
    let { freeze, seal, create } = Object; // eslint-disable-line import/no-mutable-exports
    let { apply, construct } = typeof Reflect !== 'undefined' && Reflect;
    if (!freeze) freeze = function freeze(x) {
        return x;
    };
    if (!seal) seal = function seal(x) {
        return x;
    };
    if (!apply) apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
    };
    if (!construct) construct = function construct(Func, args) {
        return new Func(...args);
    };
    const arrayForEach = unapply(Array.prototype.forEach);
    const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
    const arrayPop = unapply(Array.prototype.pop);
    const arrayPush = unapply(Array.prototype.push);
    const arraySplice = unapply(Array.prototype.splice);
    const stringToLowerCase = unapply(String.prototype.toLowerCase);
    const stringToString = unapply(String.prototype.toString);
    const stringMatch = unapply(String.prototype.match);
    const stringReplace = unapply(String.prototype.replace);
    const stringIndexOf = unapply(String.prototype.indexOf);
    const stringTrim = unapply(String.prototype.trim);
    const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
    const regExpTest = unapply(RegExp.prototype.test);
    const typeErrorCreate = unconstruct(TypeError);
    /**
   * Creates a new function that calls the given function with a specified thisArg and arguments.
   *
   * @param func - The function to be wrapped and called.
   * @returns A new function that calls the given function with a specified thisArg and arguments.
   */ function unapply(func) {
        return function(thisArg) {
            if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
            return apply(func, thisArg, args);
        };
    }
    /**
   * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
   *
   * @param func - The constructor function to be wrapped and called.
   * @returns A new function that constructs an instance of the given constructor function with the provided arguments.
   */ function unconstruct(func) {
        return function() {
            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
            return construct(func, args);
        };
    }
    /**
   * Add properties to a lookup table
   *
   * @param set - The set to which elements will be added.
   * @param array - The array containing elements to be added to the set.
   * @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
   * @returns The modified set with added elements.
   */ function addToSet(set, array) {
        let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
        if (setPrototypeOf) // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
        let l = array.length;
        while(l--){
            let element = array[l];
            if (typeof element === 'string') {
                const lcElement = transformCaseFunc(element);
                if (lcElement !== element) {
                    // Config presets (e.g. tags.js, attrs.js) are immutable.
                    if (!isFrozen(array)) array[l] = lcElement;
                    element = lcElement;
                }
            }
            set[element] = true;
        }
        return set;
    }
    /**
   * Clean up an array to harden against CSPP
   *
   * @param array - The array to be cleaned.
   * @returns The cleaned version of the array
   */ function cleanArray(array) {
        for(let index = 0; index < array.length; index++){
            const isPropertyExist = objectHasOwnProperty(array, index);
            if (!isPropertyExist) array[index] = null;
        }
        return array;
    }
    /**
   * Shallow clone an object
   *
   * @param object - The object to be cloned.
   * @returns A new object that copies the original.
   */ function clone(object) {
        const newObject = create(null);
        for (const [property, value] of entries(object)){
            const isPropertyExist = objectHasOwnProperty(object, property);
            if (isPropertyExist) {
                if (Array.isArray(value)) newObject[property] = cleanArray(value);
                else if (value && typeof value === 'object' && value.constructor === Object) newObject[property] = clone(value);
                else newObject[property] = value;
            }
        }
        return newObject;
    }
    /**
   * This method automatically checks if the prop is function or getter and behaves accordingly.
   *
   * @param object - The object to look up the getter function in its prototype chain.
   * @param prop - The property name for which to find the getter function.
   * @returns The getter function found in the prototype chain or a fallback function.
   */ function lookupGetter(object, prop) {
        while(object !== null){
            const desc = getOwnPropertyDescriptor(object, prop);
            if (desc) {
                if (desc.get) return unapply(desc.get);
                if (typeof desc.value === 'function') return unapply(desc.value);
            }
            object = getPrototypeOf(object);
        }
        function fallbackValue() {
            return null;
        }
        return fallbackValue;
    }
    const html$1 = freeze([
        'a',
        'abbr',
        'acronym',
        'address',
        'area',
        'article',
        'aside',
        'audio',
        'b',
        'bdi',
        'bdo',
        'big',
        'blink',
        'blockquote',
        'body',
        'br',
        'button',
        'canvas',
        'caption',
        'center',
        'cite',
        'code',
        'col',
        'colgroup',
        'content',
        'data',
        'datalist',
        'dd',
        'decorator',
        'del',
        'details',
        'dfn',
        'dialog',
        'dir',
        'div',
        'dl',
        'dt',
        'element',
        'em',
        'fieldset',
        'figcaption',
        'figure',
        'font',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'head',
        'header',
        'hgroup',
        'hr',
        'html',
        'i',
        'img',
        'input',
        'ins',
        'kbd',
        'label',
        'legend',
        'li',
        'main',
        'map',
        'mark',
        'marquee',
        'menu',
        'menuitem',
        'meter',
        'nav',
        'nobr',
        'ol',
        'optgroup',
        'option',
        'output',
        'p',
        'picture',
        'pre',
        'progress',
        'q',
        'rp',
        'rt',
        'ruby',
        's',
        'samp',
        'section',
        'select',
        'shadow',
        'small',
        'source',
        'spacer',
        'span',
        'strike',
        'strong',
        'style',
        'sub',
        'summary',
        'sup',
        'table',
        'tbody',
        'td',
        'template',
        'textarea',
        'tfoot',
        'th',
        'thead',
        'time',
        'tr',
        'track',
        'tt',
        'u',
        'ul',
        'var',
        'video',
        'wbr'
    ]);
    const svg$1 = freeze([
        'svg',
        'a',
        'altglyph',
        'altglyphdef',
        'altglyphitem',
        'animatecolor',
        'animatemotion',
        'animatetransform',
        'circle',
        'clippath',
        'defs',
        'desc',
        'ellipse',
        'filter',
        'font',
        'g',
        'glyph',
        'glyphref',
        'hkern',
        'image',
        'line',
        'lineargradient',
        'marker',
        'mask',
        'metadata',
        'mpath',
        'path',
        'pattern',
        'polygon',
        'polyline',
        'radialgradient',
        'rect',
        'stop',
        'style',
        'switch',
        'symbol',
        'text',
        'textpath',
        'title',
        'tref',
        'tspan',
        'view',
        'vkern'
    ]);
    const svgFilters = freeze([
        'feBlend',
        'feColorMatrix',
        'feComponentTransfer',
        'feComposite',
        'feConvolveMatrix',
        'feDiffuseLighting',
        'feDisplacementMap',
        'feDistantLight',
        'feDropShadow',
        'feFlood',
        'feFuncA',
        'feFuncB',
        'feFuncG',
        'feFuncR',
        'feGaussianBlur',
        'feImage',
        'feMerge',
        'feMergeNode',
        'feMorphology',
        'feOffset',
        'fePointLight',
        'feSpecularLighting',
        'feSpotLight',
        'feTile',
        'feTurbulence'
    ]);
    // List of SVG elements that are disallowed by default.
    // We still need to know them so that we can do namespace
    // checks properly in case one wants to add them to
    // allow-list.
    const svgDisallowed = freeze([
        'animate',
        'color-profile',
        'cursor',
        'discard',
        'font-face',
        'font-face-format',
        'font-face-name',
        'font-face-src',
        'font-face-uri',
        'foreignobject',
        'hatch',
        'hatchpath',
        'mesh',
        'meshgradient',
        'meshpatch',
        'meshrow',
        'missing-glyph',
        'script',
        'set',
        'solidcolor',
        'unknown',
        'use'
    ]);
    const mathMl$1 = freeze([
        'math',
        'menclose',
        'merror',
        'mfenced',
        'mfrac',
        'mglyph',
        'mi',
        'mlabeledtr',
        'mmultiscripts',
        'mn',
        'mo',
        'mover',
        'mpadded',
        'mphantom',
        'mroot',
        'mrow',
        'ms',
        'mspace',
        'msqrt',
        'mstyle',
        'msub',
        'msup',
        'msubsup',
        'mtable',
        'mtd',
        'mtext',
        'mtr',
        'munder',
        'munderover',
        'mprescripts'
    ]);
    // Similarly to SVG, we want to know all MathML elements,
    // even those that we disallow by default.
    const mathMlDisallowed = freeze([
        'maction',
        'maligngroup',
        'malignmark',
        'mlongdiv',
        'mscarries',
        'mscarry',
        'msgroup',
        'mstack',
        'msline',
        'msrow',
        'semantics',
        'annotation',
        'annotation-xml',
        'mprescripts',
        'none'
    ]);
    const text = freeze([
        '#text'
    ]);
    const html = freeze([
        'accept',
        'action',
        'align',
        'alt',
        'autocapitalize',
        'autocomplete',
        'autopictureinpicture',
        'autoplay',
        'background',
        'bgcolor',
        'border',
        'capture',
        'cellpadding',
        'cellspacing',
        'checked',
        'cite',
        'class',
        'clear',
        'color',
        'cols',
        'colspan',
        'controls',
        'controlslist',
        'coords',
        'crossorigin',
        'datetime',
        'decoding',
        'default',
        'dir',
        'disabled',
        'disablepictureinpicture',
        'disableremoteplayback',
        'download',
        'draggable',
        'enctype',
        'enterkeyhint',
        'face',
        'for',
        'headers',
        'height',
        'hidden',
        'high',
        'href',
        'hreflang',
        'id',
        'inputmode',
        'integrity',
        'ismap',
        'kind',
        'label',
        'lang',
        'list',
        'loading',
        'loop',
        'low',
        'max',
        'maxlength',
        'media',
        'method',
        'min',
        'minlength',
        'multiple',
        'muted',
        'name',
        'nonce',
        'noshade',
        'novalidate',
        'nowrap',
        'open',
        'optimum',
        'pattern',
        'placeholder',
        'playsinline',
        'popover',
        'popovertarget',
        'popovertargetaction',
        'poster',
        'preload',
        'pubdate',
        'radiogroup',
        'readonly',
        'rel',
        'required',
        'rev',
        'reversed',
        'role',
        'rows',
        'rowspan',
        'spellcheck',
        'scope',
        'selected',
        'shape',
        'size',
        'sizes',
        'span',
        'srclang',
        'start',
        'src',
        'srcset',
        'step',
        'style',
        'summary',
        'tabindex',
        'title',
        'translate',
        'type',
        'usemap',
        'valign',
        'value',
        'width',
        'wrap',
        'xmlns',
        'slot'
    ]);
    const svg = freeze([
        'accent-height',
        'accumulate',
        'additive',
        'alignment-baseline',
        'amplitude',
        'ascent',
        'attributename',
        'attributetype',
        'azimuth',
        'basefrequency',
        'baseline-shift',
        'begin',
        'bias',
        'by',
        'class',
        'clip',
        'clippathunits',
        'clip-path',
        'clip-rule',
        'color',
        'color-interpolation',
        'color-interpolation-filters',
        'color-profile',
        'color-rendering',
        'cx',
        'cy',
        'd',
        'dx',
        'dy',
        'diffuseconstant',
        'direction',
        'display',
        'divisor',
        'dur',
        'edgemode',
        'elevation',
        'end',
        'exponent',
        'fill',
        'fill-opacity',
        'fill-rule',
        'filter',
        'filterunits',
        'flood-color',
        'flood-opacity',
        'font-family',
        'font-size',
        'font-size-adjust',
        'font-stretch',
        'font-style',
        'font-variant',
        'font-weight',
        'fx',
        'fy',
        'g1',
        'g2',
        'glyph-name',
        'glyphref',
        'gradientunits',
        'gradienttransform',
        'height',
        'href',
        'id',
        'image-rendering',
        'in',
        'in2',
        'intercept',
        'k',
        'k1',
        'k2',
        'k3',
        'k4',
        'kerning',
        'keypoints',
        'keysplines',
        'keytimes',
        'lang',
        'lengthadjust',
        'letter-spacing',
        'kernelmatrix',
        'kernelunitlength',
        'lighting-color',
        'local',
        'marker-end',
        'marker-mid',
        'marker-start',
        'markerheight',
        'markerunits',
        'markerwidth',
        'maskcontentunits',
        'maskunits',
        'max',
        'mask',
        'media',
        'method',
        'mode',
        'min',
        'name',
        'numoctaves',
        'offset',
        'operator',
        'opacity',
        'order',
        'orient',
        'orientation',
        'origin',
        'overflow',
        'paint-order',
        'path',
        'pathlength',
        'patterncontentunits',
        'patterntransform',
        'patternunits',
        'points',
        'preservealpha',
        'preserveaspectratio',
        'primitiveunits',
        'r',
        'rx',
        'ry',
        'radius',
        'refx',
        'refy',
        'repeatcount',
        'repeatdur',
        'restart',
        'result',
        'rotate',
        'scale',
        'seed',
        'shape-rendering',
        'slope',
        'specularconstant',
        'specularexponent',
        'spreadmethod',
        'startoffset',
        'stddeviation',
        'stitchtiles',
        'stop-color',
        'stop-opacity',
        'stroke-dasharray',
        'stroke-dashoffset',
        'stroke-linecap',
        'stroke-linejoin',
        'stroke-miterlimit',
        'stroke-opacity',
        'stroke',
        'stroke-width',
        'style',
        'surfacescale',
        'systemlanguage',
        'tabindex',
        'tablevalues',
        'targetx',
        'targety',
        'transform',
        'transform-origin',
        'text-anchor',
        'text-decoration',
        'text-rendering',
        'textlength',
        'type',
        'u1',
        'u2',
        'unicode',
        'values',
        'viewbox',
        'visibility',
        'version',
        'vert-adv-y',
        'vert-origin-x',
        'vert-origin-y',
        'width',
        'word-spacing',
        'wrap',
        'writing-mode',
        'xchannelselector',
        'ychannelselector',
        'x',
        'x1',
        'x2',
        'xmlns',
        'y',
        'y1',
        'y2',
        'z',
        'zoomandpan'
    ]);
    const mathMl = freeze([
        'accent',
        'accentunder',
        'align',
        'bevelled',
        'close',
        'columnsalign',
        'columnlines',
        'columnspan',
        'denomalign',
        'depth',
        'dir',
        'display',
        'displaystyle',
        'encoding',
        'fence',
        'frame',
        'height',
        'href',
        'id',
        'largeop',
        'length',
        'linethickness',
        'lspace',
        'lquote',
        'mathbackground',
        'mathcolor',
        'mathsize',
        'mathvariant',
        'maxsize',
        'minsize',
        'movablelimits',
        'notation',
        'numalign',
        'open',
        'rowalign',
        'rowlines',
        'rowspacing',
        'rowspan',
        'rspace',
        'rquote',
        'scriptlevel',
        'scriptminsize',
        'scriptsizemultiplier',
        'selection',
        'separator',
        'separators',
        'stretchy',
        'subscriptshift',
        'supscriptshift',
        'symmetric',
        'voffset',
        'width',
        'xmlns'
    ]);
    const xml = freeze([
        'xlink:href',
        'xml:id',
        'xlink:title',
        'xml:space',
        'xmlns:xlink'
    ]);
    // eslint-disable-next-line unicorn/better-regex
    const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
    const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
    const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm); // eslint-disable-line unicorn/better-regex
    const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/); // eslint-disable-line no-useless-escape
    const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
    const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
    );
    const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
    );
    const DOCTYPE_NAME = seal(/^html$/i);
    const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
    var EXPRESSIONS = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        ARIA_ATTR: ARIA_ATTR,
        ATTR_WHITESPACE: ATTR_WHITESPACE,
        CUSTOM_ELEMENT: CUSTOM_ELEMENT,
        DATA_ATTR: DATA_ATTR,
        DOCTYPE_NAME: DOCTYPE_NAME,
        ERB_EXPR: ERB_EXPR,
        IS_ALLOWED_URI: IS_ALLOWED_URI,
        IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
        MUSTACHE_EXPR: MUSTACHE_EXPR,
        TMPLIT_EXPR: TMPLIT_EXPR
    });
    /* eslint-disable @typescript-eslint/indent */ // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
    const NODE_TYPE = {
        element: 1,
        attribute: 2,
        text: 3,
        cdataSection: 4,
        entityReference: 5,
        // Deprecated
        entityNode: 6,
        // Deprecated
        progressingInstruction: 7,
        comment: 8,
        document: 9,
        documentType: 10,
        documentFragment: 11,
        notation: 12 // Deprecated
    };
    const getGlobal = function getGlobal() {
        return typeof window === 'undefined' ? null : window;
    };
    /**
   * Creates a no-op policy for internal use only.
   * Don't export this function outside this module!
   * @param trustedTypes The policy factory.
   * @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
   * @return The policy created (or null, if Trusted Types
   * are not supported or creating the policy failed).
   */ const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
        if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') return null;
        // Allow the callers to control the unique policy name
        // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
        // Policy creation with duplicate names throws in Trusted Types.
        let suffix = null;
        const ATTR_NAME = 'data-tt-policy-suffix';
        if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
        const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
        try {
            return trustedTypes.createPolicy(policyName, {
                createHTML (html) {
                    return html;
                },
                createScriptURL (scriptUrl) {
                    return scriptUrl;
                }
            });
        } catch (_) {
            // Policy creation failed (most likely another DOMPurify script has
            // already run). Skip creating the policy, as this will only cause errors
            // if TT are enforced.
            console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
            return null;
        }
    };
    const _createHooksMap = function _createHooksMap() {
        return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: []
        };
    };
    function createDOMPurify() {
        let window1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
        const DOMPurify = (root)=>createDOMPurify(root);
        DOMPurify.version = '3.2.6';
        DOMPurify.removed = [];
        if (!window1 || !window1.document || window1.document.nodeType !== NODE_TYPE.document || !window1.Element) {
            // Not running in a browser, provide a factory function
            // so that you can pass your own Window
            DOMPurify.isSupported = false;
            return DOMPurify;
        }
        let { document } = window1;
        const originalDocument = document;
        const currentScript = originalDocument.currentScript;
        const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap = window1.NamedNodeMap || window1.MozNamedAttrMap, HTMLFormElement, DOMParser, trustedTypes } = window1;
        const ElementPrototype = Element.prototype;
        const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
        const remove = lookupGetter(ElementPrototype, 'remove');
        const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
        const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
        const getParentNode = lookupGetter(ElementPrototype, 'parentNode');
        // As per issue #47, the web-components registry is inherited by a
        // new document created via createHTMLDocument. As per the spec
        // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
        // a new empty registry is used when creating a template contents owner
        // document, so we use that as our parent document to ensure nothing
        // is inherited.
        if (typeof HTMLTemplateElement === 'function') {
            const template = document.createElement('template');
            if (template.content && template.content.ownerDocument) document = template.content.ownerDocument;
        }
        let trustedTypesPolicy;
        let emptyHTML = '';
        const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = document;
        const { importNode } = originalDocument;
        let hooks = _createHooksMap();
        /**
     * Expose whether this browser supports running the full DOMPurify.
     */ DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
        const { MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, DATA_ATTR, ARIA_ATTR, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, CUSTOM_ELEMENT } = EXPRESSIONS;
        let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
        /**
     * We consider the elements and attributes below to be safe. Ideally
     * don't add any new ones but feel free to remove unwanted ones.
     */ /* allowed element names */ let ALLOWED_TAGS = null;
        const DEFAULT_ALLOWED_TAGS = addToSet({}, [
            ...html$1,
            ...svg$1,
            ...svgFilters,
            ...mathMl$1,
            ...text
        ]);
        /* Allowed attribute names */ let ALLOWED_ATTR = null;
        const DEFAULT_ALLOWED_ATTR = addToSet({}, [
            ...html,
            ...svg,
            ...mathMl,
            ...xml
        ]);
        /*
     * Configure how DOMPurify should handle custom elements and their attributes as well as customized built-in elements.
     * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
     * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
     * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
     */ let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
            tagNameCheck: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: null
            },
            attributeNameCheck: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: true,
                configurable: false,
                enumerable: true,
                value: false
            }
        }));
        /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */ let FORBID_TAGS = null;
        /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */ let FORBID_ATTR = null;
        /* Decide if ARIA attributes are okay */ let ALLOW_ARIA_ATTR = true;
        /* Decide if custom data attributes are okay */ let ALLOW_DATA_ATTR = true;
        /* Decide if unknown protocols are okay */ let ALLOW_UNKNOWN_PROTOCOLS = false;
        /* Decide if self-closing tags in attributes are allowed.
     * Usually removed due to a mXSS issue in jQuery 3.0 */ let ALLOW_SELF_CLOSE_IN_ATTR = true;
        /* Output should be safe for common template engines.
     * This means, DOMPurify removes data attributes, mustaches and ERB
     */ let SAFE_FOR_TEMPLATES = false;
        /* Output should be safe even for XML used within HTML and alike.
     * This means, DOMPurify removes comments when containing risky content.
     */ let SAFE_FOR_XML = true;
        /* Decide if document with <html>... should be returned */ let WHOLE_DOCUMENT = false;
        /* Track whether config is already set on this instance of DOMPurify. */ let SET_CONFIG = false;
        /* Decide if all elements (e.g. style, script) must be children of
     * document.body. By default, browsers might move them to document.head */ let FORCE_BODY = false;
        /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
     * string (or a TrustedHTML object if Trusted Types are supported).
     * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
     */ let RETURN_DOM = false;
        /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
     * string  (or a TrustedHTML object if Trusted Types are supported) */ let RETURN_DOM_FRAGMENT = false;
        /* Try to return a Trusted Type object instead of a string, return a string in
     * case Trusted Types are not supported  */ let RETURN_TRUSTED_TYPE = false;
        /* Output should be free from DOM clobbering attacks?
     * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
     */ let SANITIZE_DOM = true;
        /* Achieve full DOM Clobbering protection by isolating the namespace of named
     * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
     *
     * HTML/DOM spec rules that enable DOM Clobbering:
     *   - Named Access on Window (§7.3.3)
     *   - DOM Tree Accessors (§3.1.5)
     *   - Form Element Parent-Child Relations (§4.10.3)
     *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
     *   - HTMLCollection (§4.2.10.2)
     *
     * Namespace isolation is implemented by prefixing `id` and `name` attributes
     * with a constant string, i.e., `user-content-`
     */ let SANITIZE_NAMED_PROPS = false;
        const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
        /* Keep element content when removing element? */ let KEEP_CONTENT = true;
        /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
     * of importing it into a new Document and returning a sanitized copy */ let IN_PLACE = false;
        /* Allow usage of profiles like html, svg and mathMl */ let USE_PROFILES = {};
        /* Tags to ignore content of when KEEP_CONTENT is true */ let FORBID_CONTENTS = null;
        const DEFAULT_FORBID_CONTENTS = addToSet({}, [
            'annotation-xml',
            'audio',
            'colgroup',
            'desc',
            'foreignobject',
            'head',
            'iframe',
            'math',
            'mi',
            'mn',
            'mo',
            'ms',
            'mtext',
            'noembed',
            'noframes',
            'noscript',
            'plaintext',
            'script',
            'style',
            'svg',
            'template',
            'thead',
            'title',
            'video',
            'xmp'
        ]);
        /* Tags that are safe for data: URIs */ let DATA_URI_TAGS = null;
        const DEFAULT_DATA_URI_TAGS = addToSet({}, [
            'audio',
            'video',
            'img',
            'source',
            'image',
            'track'
        ]);
        /* Attributes safe for values like "javascript:" */ let URI_SAFE_ATTRIBUTES = null;
        const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
            'alt',
            'class',
            'for',
            'id',
            'label',
            'name',
            'pattern',
            'placeholder',
            'role',
            'summary',
            'title',
            'value',
            'style',
            'xmlns'
        ]);
        const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
        const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
        const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
        /* Document namespace */ let NAMESPACE = HTML_NAMESPACE;
        let IS_EMPTY_INPUT = false;
        /* Allowed XHTML+XML namespaces */ let ALLOWED_NAMESPACES = null;
        const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
            MATHML_NAMESPACE,
            SVG_NAMESPACE,
            HTML_NAMESPACE
        ], stringToString);
        let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
            'mi',
            'mo',
            'mn',
            'ms',
            'mtext'
        ]);
        let HTML_INTEGRATION_POINTS = addToSet({}, [
            'annotation-xml'
        ]);
        // Certain elements are allowed in both SVG and HTML
        // namespace. We need to specify them explicitly
        // so that they don't get erroneously deleted from
        // HTML namespace.
        const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
            'title',
            'style',
            'font',
            'a',
            'script'
        ]);
        /* Parsing of strict XHTML documents */ let PARSER_MEDIA_TYPE = null;
        const SUPPORTED_PARSER_MEDIA_TYPES = [
            'application/xhtml+xml',
            'text/html'
        ];
        const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
        let transformCaseFunc = null;
        /* Keep a reference to config to pass to hooks */ let CONFIG = null;
        /* Ideally, do not touch anything below this line */ /* ______________________________________________ */ const formElement = document.createElement('form');
        const isRegexOrFunction = function isRegexOrFunction(testValue) {
            return testValue instanceof RegExp || testValue instanceof Function;
        };
        /**
     * _parseConfig
     *
     * @param cfg optional config literal
     */ // eslint-disable-next-line complexity
        const _parseConfig = function _parseConfig() {
            let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (CONFIG && CONFIG === cfg) return;
            /* Shield configuration object from tampering */ if (!cfg || typeof cfg !== 'object') cfg = {};
            /* Shield configuration object from prototype pollution */ cfg = clone(cfg);
            PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
            SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
            // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
            transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
            /* Set configuration parameters */ ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
            ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
            ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
            URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
            DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
            FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
            FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
            FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
            USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
            ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
            ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
            ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
            ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
            SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
            SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
            WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
            RETURN_DOM = cfg.RETURN_DOM || false; // Default false
            RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
            RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
            FORCE_BODY = cfg.FORCE_BODY || false; // Default false
            SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
            SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
            KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
            IN_PLACE = cfg.IN_PLACE || false; // Default false
            IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
            NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
            MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
            HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
            CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
            if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
            if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
            if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
            if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
            /* Parse profile info */ if (USE_PROFILES) {
                ALLOWED_TAGS = addToSet({}, text);
                ALLOWED_ATTR = [];
                if (USE_PROFILES.html === true) {
                    addToSet(ALLOWED_TAGS, html$1);
                    addToSet(ALLOWED_ATTR, html);
                }
                if (USE_PROFILES.svg === true) {
                    addToSet(ALLOWED_TAGS, svg$1);
                    addToSet(ALLOWED_ATTR, svg);
                    addToSet(ALLOWED_ATTR, xml);
                }
                if (USE_PROFILES.svgFilters === true) {
                    addToSet(ALLOWED_TAGS, svgFilters);
                    addToSet(ALLOWED_ATTR, svg);
                    addToSet(ALLOWED_ATTR, xml);
                }
                if (USE_PROFILES.mathMl === true) {
                    addToSet(ALLOWED_TAGS, mathMl$1);
                    addToSet(ALLOWED_ATTR, mathMl);
                    addToSet(ALLOWED_ATTR, xml);
                }
            }
            /* Merge configuration parameters */ if (cfg.ADD_TAGS) {
                if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
                addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
            }
            if (cfg.ADD_ATTR) {
                if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
                addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
            }
            if (cfg.ADD_URI_SAFE_ATTR) addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
            if (cfg.FORBID_CONTENTS) {
                if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
                addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
            }
            /* Add #text in case KEEP_CONTENT is set to true */ if (KEEP_CONTENT) ALLOWED_TAGS['#text'] = true;
            /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */ if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
                'html',
                'head',
                'body'
            ]);
            /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */ if (ALLOWED_TAGS.table) {
                addToSet(ALLOWED_TAGS, [
                    'tbody'
                ]);
                delete FORBID_TAGS.tbody;
            }
            if (cfg.TRUSTED_TYPES_POLICY) {
                if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                // Overwrite existing TrustedTypes policy.
                trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
                // Sign local variables required by `sanitize`.
                emptyHTML = trustedTypesPolicy.createHTML('');
            } else {
                // Uninitialized policy, attempt to initialize the internal dompurify policy.
                if (trustedTypesPolicy === undefined) trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
                // If creating the internal policy succeeded sign internal variables.
                if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') emptyHTML = trustedTypesPolicy.createHTML('');
            }
            // Prevent further manipulation of configuration.
            // Not available in IE8, Safari 5, etc.
            if (freeze) freeze(cfg);
            CONFIG = cfg;
        };
        /* Keep track of all possible SVG and MathML tags
     * so that we can perform the namespace checks
     * correctly. */ const ALL_SVG_TAGS = addToSet({}, [
            ...svg$1,
            ...svgFilters,
            ...svgDisallowed
        ]);
        const ALL_MATHML_TAGS = addToSet({}, [
            ...mathMl$1,
            ...mathMlDisallowed
        ]);
        /**
     * @param element a DOM element whose namespace is being checked
     * @returns Return false if the element has a
     *  namespace that a spec-compliant parser would never
     *  return. Return true otherwise.
     */ const _checkValidNamespace = function _checkValidNamespace(element) {
            let parent = getParentNode(element);
            // In JSDOM, if we're inside shadow DOM, then parentNode
            // can be null. We just simulate parent in this case.
            if (!parent || !parent.tagName) parent = {
                namespaceURI: NAMESPACE,
                tagName: 'template'
            };
            const tagName = stringToLowerCase(element.tagName);
            const parentTagName = stringToLowerCase(parent.tagName);
            if (!ALLOWED_NAMESPACES[element.namespaceURI]) return false;
            if (element.namespaceURI === SVG_NAMESPACE) {
                // The only way to switch from HTML namespace to SVG
                // is via <svg>. If it happens via any other tag, then
                // it should be killed.
                if (parent.namespaceURI === HTML_NAMESPACE) return tagName === 'svg';
                // The only way to switch from MathML to SVG is via`
                // svg if parent is either <annotation-xml> or MathML
                // text integration points.
                if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
                // We only allow elements that are defined in SVG
                // spec. All others are disallowed in SVG namespace.
                return Boolean(ALL_SVG_TAGS[tagName]);
            }
            if (element.namespaceURI === MATHML_NAMESPACE) {
                // The only way to switch from HTML namespace to MathML
                // is via <math>. If it happens via any other tag, then
                // it should be killed.
                if (parent.namespaceURI === HTML_NAMESPACE) return tagName === 'math';
                // The only way to switch from SVG to MathML is via
                // <math> and HTML integration points
                if (parent.namespaceURI === SVG_NAMESPACE) return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
                // We only allow elements that are defined in MathML
                // spec. All others are disallowed in MathML namespace.
                return Boolean(ALL_MATHML_TAGS[tagName]);
            }
            if (element.namespaceURI === HTML_NAMESPACE) {
                // The only way to switch from SVG to HTML is via
                // HTML integration points, and from MathML to HTML
                // is via MathML text integration points
                if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
                if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
                // We disallow tags that are specific for MathML
                // or SVG and should never appear in HTML namespace
                return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
            }
            // For XHTML and XML documents that support custom namespaces
            if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) return true;
            // The code should never reach this place (this means
            // that the element somehow got namespace that is not
            // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
            // Return false just in case.
            return false;
        };
        /**
     * _forceRemove
     *
     * @param node a DOM node
     */ const _forceRemove = function _forceRemove(node) {
            arrayPush(DOMPurify.removed, {
                element: node
            });
            try {
                // eslint-disable-next-line unicorn/prefer-dom-node-remove
                getParentNode(node).removeChild(node);
            } catch (_) {
                remove(node);
            }
        };
        /**
     * _removeAttribute
     *
     * @param name an Attribute name
     * @param element a DOM node
     */ const _removeAttribute = function _removeAttribute(name, element) {
            try {
                arrayPush(DOMPurify.removed, {
                    attribute: element.getAttributeNode(name),
                    from: element
                });
            } catch (_) {
                arrayPush(DOMPurify.removed, {
                    attribute: null,
                    from: element
                });
            }
            element.removeAttribute(name);
            // We void attribute values for unremovable "is" attributes
            if (name === 'is') {
                if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
                    _forceRemove(element);
                } catch (_) {}
                else try {
                    element.setAttribute(name, '');
                } catch (_) {}
            }
        };
        /**
     * _initDocument
     *
     * @param dirty - a string of dirty markup
     * @return a DOM, filled with the dirty markup
     */ const _initDocument = function _initDocument(dirty) {
            /* Create a HTML document */ let doc = null;
            let leadingWhitespace = null;
            if (FORCE_BODY) dirty = '<remove></remove>' + dirty;
            else {
                /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */ const matches = stringMatch(dirty, /^[\r\n\t ]+/);
                leadingWhitespace = matches && matches[0];
            }
            if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
            const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
            /*
       * Use the DOMParser API by default, fallback later if needs be
       * DOMParser not work for svg when has multiple root element.
       */ if (NAMESPACE === HTML_NAMESPACE) try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {}
            /* Use createHTMLDocument in case DOMParser is not available */ if (!doc || !doc.documentElement) {
                doc = implementation.createDocument(NAMESPACE, 'template', null);
                try {
                    doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
                } catch (_) {
                // Syntax error if dirtyPayload is invalid xml
                }
            }
            const body = doc.body || doc.documentElement;
            if (dirty && leadingWhitespace) body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
            /* Work on whole document or just its body */ if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
            return WHOLE_DOCUMENT ? doc.documentElement : body;
        };
        /**
     * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
     *
     * @param root The root element or node to start traversing on.
     * @return The created NodeIterator
     */ const _createNodeIterator = function _createNodeIterator(root) {
            return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
            NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
        };
        /**
     * _isClobbered
     *
     * @param element element to check for clobbering attacks
     * @return true if clobbered, false if safe
     */ const _isClobbered = function _isClobbered(element) {
            return element instanceof HTMLFormElement && (typeof element.nodeName !== 'string' || typeof element.textContent !== 'string' || typeof element.removeChild !== 'function' || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== 'function' || typeof element.setAttribute !== 'function' || typeof element.namespaceURI !== 'string' || typeof element.insertBefore !== 'function' || typeof element.hasChildNodes !== 'function');
        };
        /**
     * Checks whether the given object is a DOM node.
     *
     * @param value object to check whether it's a DOM node
     * @return true is object is a DOM node
     */ const _isNode = function _isNode(value) {
            return typeof Node === 'function' && value instanceof Node;
        };
        function _executeHooks(hooks, currentNode, data) {
            arrayForEach(hooks, (hook)=>{
                hook.call(DOMPurify, currentNode, data, CONFIG);
            });
        }
        /**
     * _sanitizeElements
     *
     * @protect nodeName
     * @protect textContent
     * @protect removeChild
     * @param currentNode to check for permission to exist
     * @return true if node was killed, false if left alive
     */ const _sanitizeElements = function _sanitizeElements(currentNode) {
            let content = null;
            /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
            /* Check if element is clobbered or can clobber */ if (_isClobbered(currentNode)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Now let's check the element's type and name */ const tagName = transformCaseFunc(currentNode.nodeName);
            /* Execute a hook if present */ _executeHooks(hooks.uponSanitizeElement, currentNode, {
                tagName,
                allowedTags: ALLOWED_TAGS
            });
            /* Detect mXSS attempts abusing namespace confusion */ if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Remove any occurrence of processing instructions */ if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
                _forceRemove(currentNode);
                return true;
            }
            /* Remove any kind of possibly harmful comments */ if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Remove element if anything forbids its presence */ if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                /* Check if we have a custom element to handle */ if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
                    if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
                    if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) return false;
                }
                /* Keep content except for bad-listed elements */ if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                    const parentNode = getParentNode(currentNode) || currentNode.parentNode;
                    const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                    if (childNodes && parentNode) {
                        const childCount = childNodes.length;
                        for(let i = childCount - 1; i >= 0; --i){
                            const childClone = cloneNode(childNodes[i], true);
                            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
                            parentNode.insertBefore(childClone, getNextSibling(currentNode));
                        }
                    }
                }
                _forceRemove(currentNode);
                return true;
            }
            /* Check whether element has a valid namespace */ if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Make sure that older browsers don't get fallback-tag mXSS */ if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
                _forceRemove(currentNode);
                return true;
            }
            /* Sanitize element content to be template-safe */ if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
                /* Get the element's text content */ content = currentNode.textContent;
                arrayForEach([
                    MUSTACHE_EXPR,
                    ERB_EXPR,
                    TMPLIT_EXPR
                ], (expr)=>{
                    content = stringReplace(content, expr, ' ');
                });
                if (currentNode.textContent !== content) {
                    arrayPush(DOMPurify.removed, {
                        element: currentNode.cloneNode()
                    });
                    currentNode.textContent = content;
                }
            }
            /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeElements, currentNode, null);
            return false;
        };
        /**
     * _isValidAttribute
     *
     * @param lcTag Lowercase tag name of containing element.
     * @param lcName Lowercase attribute name.
     * @param value Attribute value.
     * @return Returns true if `value` is valid, otherwise false.
     */ // eslint-disable-next-line complexity
        const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
            /* Make sure attribute cannot clobber */ if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) return false;
            /* Allow valid data-* attributes: At least one character after "-"
          (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
          XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
          We don't need to check the value; it's always URI safe. */ if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ;
            else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ;
            else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
                if (// First condition does a very basic check if a) it's basically a valid custom element tagname AND
                // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
                _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || // Alternative, second condition checks if it's an `is`-attribute, AND
                // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
                lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;
                else return false;
            /* Check value is safe. First, is attr inert? If so, is safe */ } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
            else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ;
            else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;
            else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ;
            else if (value) return false;
            return true;
        };
        /**
     * _isBasicCustomElement
     * checks if at least one dash is included in tagName, and it's not the first char
     * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
     *
     * @param tagName name of the tag of the node to sanitize
     * @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
     */ const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
            return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
        };
        /**
     * _sanitizeAttributes
     *
     * @protect attributes
     * @protect nodeName
     * @protect removeAttribute
     * @protect setAttribute
     *
     * @param currentNode to sanitize
     */ const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
            /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
            const { attributes } = currentNode;
            /* Check if we have attributes; if not we might have a text node */ if (!attributes || _isClobbered(currentNode)) return;
            const hookEvent = {
                attrName: '',
                attrValue: '',
                keepAttr: true,
                allowedAttributes: ALLOWED_ATTR,
                forceKeepAttr: undefined
            };
            let l = attributes.length;
            /* Go backwards over all attributes; safely remove bad ones */ while(l--){
                const attr = attributes[l];
                const { name, namespaceURI, value: attrValue } = attr;
                const lcName = transformCaseFunc(name);
                const initValue = attrValue;
                let value = name === 'value' ? initValue : stringTrim(initValue);
                /* Execute a hook if present */ hookEvent.attrName = lcName;
                hookEvent.attrValue = value;
                hookEvent.keepAttr = true;
                hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
                _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
                value = hookEvent.attrValue;
                /* Full DOM Clobbering protection via namespace isolation,
         * Prefix id and name attributes with `user-content-`
         */ if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
                    // Remove the attribute with this value
                    _removeAttribute(name, currentNode);
                    // Prefix the value and later re-create the attribute with the sanitized value
                    value = SANITIZE_NAMED_PROPS_PREFIX + value;
                }
                /* Work around a security issue with comments inside attributes */ if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
                    _removeAttribute(name, currentNode);
                    continue;
                }
                /* Did the hooks approve of the attribute? */ if (hookEvent.forceKeepAttr) continue;
                /* Did the hooks approve of the attribute? */ if (!hookEvent.keepAttr) {
                    _removeAttribute(name, currentNode);
                    continue;
                }
                /* Work around a security issue in jQuery 3.0 */ if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                    _removeAttribute(name, currentNode);
                    continue;
                }
                /* Sanitize attribute content to be template-safe */ if (SAFE_FOR_TEMPLATES) arrayForEach([
                    MUSTACHE_EXPR,
                    ERB_EXPR,
                    TMPLIT_EXPR
                ], (expr)=>{
                    value = stringReplace(value, expr, ' ');
                });
                /* Is `value` valid for this attribute? */ const lcTag = transformCaseFunc(currentNode.nodeName);
                if (!_isValidAttribute(lcTag, lcName, value)) {
                    _removeAttribute(name, currentNode);
                    continue;
                }
                /* Handle attributes that require Trusted Types */ if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
                    if (namespaceURI) ;
                    else switch(trustedTypes.getAttributeType(lcTag, lcName)){
                        case 'TrustedHTML':
                            value = trustedTypesPolicy.createHTML(value);
                            break;
                        case 'TrustedScriptURL':
                            value = trustedTypesPolicy.createScriptURL(value);
                            break;
                    }
                }
                /* Handle invalid data-* attribute set by try-catching it */ if (value !== initValue) try {
                    if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
                    else /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */ currentNode.setAttribute(name, value);
                    if (_isClobbered(currentNode)) _forceRemove(currentNode);
                    else arrayPop(DOMPurify.removed);
                } catch (_) {
                    _removeAttribute(name, currentNode);
                }
            }
            /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
        };
        /**
     * _sanitizeShadowDOM
     *
     * @param fragment to iterate over recursively
     */ const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
            let shadowNode = null;
            const shadowIterator = _createNodeIterator(fragment);
            /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
            while(shadowNode = shadowIterator.nextNode()){
                /* Execute a hook if present */ _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
                /* Sanitize tags and elements */ _sanitizeElements(shadowNode);
                /* Check attributes next */ _sanitizeAttributes(shadowNode);
                /* Deep shadow DOM detected */ if (shadowNode.content instanceof DocumentFragment) _sanitizeShadowDOM(shadowNode.content);
            }
            /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
        };
        // eslint-disable-next-line complexity
        DOMPurify.sanitize = function(dirty) {
            let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            let body = null;
            let importedNode = null;
            let currentNode = null;
            let returnNode = null;
            /* Make sure we have a string to sanitize.
        DO NOT return early, as this will return the wrong type if
        the user has requested a DOM object rather than a string */ IS_EMPTY_INPUT = !dirty;
            if (IS_EMPTY_INPUT) dirty = '<!-->';
            /* Stringify, in case dirty is an object */ if (typeof dirty !== 'string' && !_isNode(dirty)) {
                if (typeof dirty.toString === 'function') {
                    dirty = dirty.toString();
                    if (typeof dirty !== 'string') throw typeErrorCreate('dirty is not a string, aborting');
                } else throw typeErrorCreate('toString is not a function');
            }
            /* Return dirty HTML if DOMPurify cannot run */ if (!DOMPurify.isSupported) return dirty;
            /* Assign config vars */ if (!SET_CONFIG) _parseConfig(cfg);
            /* Clean up removed elements */ DOMPurify.removed = [];
            /* Check if dirty is correctly typed for IN_PLACE */ if (typeof dirty === 'string') IN_PLACE = false;
            if (IN_PLACE) /* Do some early pre-sanitization to avoid unsafe root nodes */ {
                if (dirty.nodeName) {
                    const tagName = transformCaseFunc(dirty.nodeName);
                    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
                }
            } else if (dirty instanceof Node) {
                /* If dirty is a DOM element, append to an empty document to avoid
           elements being stripped by the parser */ body = _initDocument('<!---->');
                importedNode = body.ownerDocument.importNode(dirty, true);
                if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') /* Node is already a body, use as is */ body = importedNode;
                else if (importedNode.nodeName === 'HTML') body = importedNode;
                else // eslint-disable-next-line unicorn/prefer-dom-node-append
                body.appendChild(importedNode);
            } else {
                /* Exit directly if we have nothing to do */ if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
                dirty.indexOf('<') === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
                /* Initialize the document to work on */ body = _initDocument(dirty);
                /* Check we have a DOM node from the data */ if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
            }
            /* Remove first element node (ours) if FORCE_BODY is set */ if (body && FORCE_BODY) _forceRemove(body.firstChild);
            /* Get node iterator */ const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
            /* Now start iterating over the created document */ while(currentNode = nodeIterator.nextNode()){
                /* Sanitize tags and elements */ _sanitizeElements(currentNode);
                /* Check attributes next */ _sanitizeAttributes(currentNode);
                /* Shadow DOM detected, sanitize it */ if (currentNode.content instanceof DocumentFragment) _sanitizeShadowDOM(currentNode.content);
            }
            /* If we sanitized `dirty` in-place, return it. */ if (IN_PLACE) return dirty;
            /* Return sanitized string or DOM */ if (RETURN_DOM) {
                if (RETURN_DOM_FRAGMENT) {
                    returnNode = createDocumentFragment.call(body.ownerDocument);
                    while(body.firstChild)// eslint-disable-next-line unicorn/prefer-dom-node-append
                    returnNode.appendChild(body.firstChild);
                } else returnNode = body;
                if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) /*
            AdoptNode() is not used because internal state is not reset
            (e.g. the past names map of a HTMLFormElement), this is safe
            in theory but we would rather not risk another attack vector.
            The state that is cloned by importNode() is explicitly defined
            by the specs.
          */ returnNode = importNode.call(originalDocument, returnNode, true);
                return returnNode;
            }
            let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
            /* Serialize doctype if allowed */ if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
            /* Sanitize final string template-safe */ if (SAFE_FOR_TEMPLATES) arrayForEach([
                MUSTACHE_EXPR,
                ERB_EXPR,
                TMPLIT_EXPR
            ], (expr)=>{
                serializedHTML = stringReplace(serializedHTML, expr, ' ');
            });
            return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
        };
        DOMPurify.setConfig = function() {
            let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _parseConfig(cfg);
            SET_CONFIG = true;
        };
        DOMPurify.clearConfig = function() {
            CONFIG = null;
            SET_CONFIG = false;
        };
        DOMPurify.isValidAttribute = function(tag, attr, value) {
            /* Initialize shared config vars if necessary. */ if (!CONFIG) _parseConfig({});
            const lcTag = transformCaseFunc(tag);
            const lcName = transformCaseFunc(attr);
            return _isValidAttribute(lcTag, lcName, value);
        };
        DOMPurify.addHook = function(entryPoint, hookFunction) {
            if (typeof hookFunction !== 'function') return;
            arrayPush(hooks[entryPoint], hookFunction);
        };
        DOMPurify.removeHook = function(entryPoint, hookFunction) {
            if (hookFunction !== undefined) {
                const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
                return index === -1 ? undefined : arraySplice(hooks[entryPoint], index, 1)[0];
            }
            return arrayPop(hooks[entryPoint]);
        };
        DOMPurify.removeHooks = function(entryPoint) {
            hooks[entryPoint] = [];
        };
        DOMPurify.removeAllHooks = function() {
            hooks = _createHooksMap();
        };
        return DOMPurify;
    }
    var purify = createDOMPurify();
    return purify;
});

},{}],"96g6P":[function(require,module,exports,__globalThis) {
// apiFetch.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _authJs = require("./Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("./Router.js");
async function apiFetch(url, options = {}) {
    const token = localStorage.getItem("token");
    if (token && (0, _authJs.isTokenExpired)(token)) {
        document.querySelector("app-toast")?.show("Session expired. Please sign in again.", "error");
        (0, _authJsDefault.default).signOut();
        (0, _routerJs.gotoRoute)("/signin");
        throw new Error("JWT expired");
    }
    options.headers = options.headers || {};
    if (token) options.headers.Authorization = `Bearer ${token}`;
    if (!(options.body instanceof FormData)) options.headers["Content-Type"] = "application/json";
    try {
        const res = await fetch(url, options);
        if (res.status === 401 || res.status === 403) {
            document.querySelector("app-toast")?.show("Unauthorized. Please sign in again.", "error");
            (0, _authJsDefault.default).signOut();
            (0, _routerJs.gotoRoute)("/signin");
            throw new Error("Unauthorized or expired token");
        }
        return res;
    } catch (err) {
        document.querySelector("app-toast")?.show("Network error \u2013 please check your connection.", "error");
        console.error("[apiFetch] Error:", err);
        throw err;
    }
}
exports.default = apiFetch;

},{"./Auth.js":"aJFb5","./Router.js":"b5tFI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fdhWh":[function(require,module,exports,__globalThis) {
// views/GuestGuide.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
class GuestGuideView {
    async init() {
        document.title = "Welcome to Chinwag - Guest";
        if (!(0, _authJsDefault.default).currentUser || (0, _authJsDefault.default).currentUser.accessLevel !== 1) {
            (0, _routerJs.gotoRoute)("/signin");
            return;
        }
        this.render();
    }
    async handleGetStarted() {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/users/${(0, _authJsDefault.default).currentUser.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isFirstLogin: false
                })
            });
            if (!response.ok) throw new Error("Failed to update user");
            (0, _authJsDefault.default).currentUser.isFirstLogin = false;
            (0, _routerJs.gotoRoute)("/guest-home");
        } catch (err) {
            document.querySelector("app-toast")?.show("Error getting started", "error");
            console.error(err);
            this.render();
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="guide-page">
          <div class="guide-header"></div>
          <div class="guide-content">
            <div class="guide-text-block">
              <h1 class="guide-title">Welcome!</h1>
              <p class="guide-subtitle">
                ${(0, _dompurifyDefault.default).sanitize("We\u2019re so glad you\u2019re here. Chinwag connects people who crave meaningful, in-person experiences over a shared meal \u2014 no awkward planning or group chats required.")}
              </p>
              <h2 class="guide-heading">What is Chinwag?</h2>
              <p class="guide-text">
                ${(0, _dompurifyDefault.default).sanitize("Chinwag helps you find and join communal dining tables hosted at local cafes and restaurants. Whether you\u2019re new in town or just want to shake up your social routine, Chinwag makes it easy to connect \u2014 no algorithms or matching required.")}
              </p>
            </div>
            <div class="guide-features">
              <div class="guide-card">
                <h4>🍽️ Meet new people</h4>
                <p>No planning, no pressure — just show up.</p>
              </div>
              <div class="guide-card">
                <h4>🗓️ Spontaneous plans</h4>
                <p>Join an event tonight or this weekend.</p>
              </div>
              <div class="guide-card">
                <h4>🧭 The unexpected</h4>
                <p>Discover great venues and better convo.</p>
              </div>
            </div>
            <div class="guide-cta">
              <button
                class="button primary large"
                @click=${this.handleGetStarted.bind(this)}
                aria-label="Get Started as a Guest"
              >
                Get Started
              </button>
            </div>
          </div>
          <div class="guide-footer"></div>
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = GuestGuideView;

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Router.js":"b5tFI","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"Kckvv":[function(require,module,exports,__globalThis) {
// views/HostGuide.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
class HostGuideView {
    async init() {
        document.title = "Welcome to Chinwag - Host";
        if (!(0, _authJsDefault.default).currentUser || (0, _authJsDefault.default).currentUser.accessLevel !== 2) {
            (0, _routerJs.gotoRoute)("/signin");
            return;
        }
        this.render();
    }
    async handleGetStarted() {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/users/${(0, _authJsDefault.default).currentUser.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isFirstLogin: false
                })
            });
            if (!response.ok) throw new Error("Failed to update user");
            (0, _authJsDefault.default).currentUser.isFirstLogin = false;
            (0, _routerJs.gotoRoute)("/host-home");
        } catch (err) {
            document.querySelector("app-toast")?.show("Error getting started", "error");
            console.error(err);
            this.render();
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="guide-page">
          <div class="guide-header"></div>
          <div class="guide-content">
            <div class="guide-text-block">
              <h1 class="guide-title">Welcome!</h1>
              <p class="guide-subtitle">
                ${(0, _dompurifyDefault.default).sanitize("We\u2019re thrilled to have your venue on board. Chinwag is here to help you turn underused tables into new revenue \u2014 and make your space a destination for community.")}
              </p>
              <h2 class="guide-heading">What is Chinwag?</h2>
              <p class="guide-text">
                ${(0, _dompurifyDefault.default).sanitize("Chinwag is a social dining platform where people join communal tables at local venues. For you, it\u2019s a low-effort way to increase bookings, especially during quiet periods.")}
              </p>
            </div>
            <div class="guide-features">
              <div class="guide-card">
                <h4>📅 Fill seats</h4>
                <p>Boost off-peak bookings with communal tables.</p>
              </div>
              <div class="guide-card">
                <h4>🛠️ List in seconds</h4>
                <p>Duplicate past events to post in seconds.</p>
              </div>
              <div class="guide-card">
                <h4>📊 Reach a new audience</h4>
                <p>Attract spontaneous diners and social groups.</p>
              </div>
            </div>
            <div class="guide-cta">
              <button
                class="button primary large"
                @click=${this.handleGetStarted.bind(this)}
                aria-label="Get Started as a Host"
              >
                Get Started
              </button>
            </div>
          </div>
          <div class="guide-footer"></div>
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = HostGuideView;

},{"../App.js":"hh6uc","../Auth.js":"aJFb5","../Router.js":"b5tFI","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","lit-html":"l15as"}],"2fU3z":[function(require,module,exports,__globalThis) {
// views/profile.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _apiFetchJs = require("../apiFetch.js");
var _apiFetchJsDefault = parcelHelpers.interopDefault(_apiFetchJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _defaultavatarPng = require("../images/defaultavatar.png");
var _defaultavatarPngDefault = parcelHelpers.interopDefault(_defaultavatarPng);
class ProfileView {
    constructor(){
        this.user = null;
        this.loading = true;
        this.saving = false;
        this.passwordMismatch = false;
        this.avatarPreview = (0, _defaultavatarPngDefault.default);
        this.selectedFile = null;
        this.fileLoading = false;
    }
    init() {
        document.title = "Profile - Chinwag";
        this.fetchUser();
    }
    disconnectedCallback() {
        if (this.avatarPreview.startsWith("blob:")) URL.revokeObjectURL(this.avatarPreview);
    }
    getSafeAvatarUrl(avatar) {
        if (typeof avatar === "string" && avatar.startsWith("/uploads")) return `${(0, _appJsDefault.default).apiBase.replace("/api", "")}${avatar}`;
        return 0, _defaultavatarPngDefault.default;
    }
    async fetchUser() {
        try {
            console.log("[ProfileView] Fetching user for ID:", (0, _authJsDefault.default).currentUser.id);
            const response = await (0, _apiFetchJsDefault.default)(`${(0, _appJsDefault.default).apiBase}/users/${(0, _authJsDefault.default).currentUser.id}`);
            if (!response.ok) throw new Error("Failed to fetch profile");
            this.user = await response.json();
            this.avatarPreview = this.getSafeAvatarUrl(this.user.avatar);
            this.loading = false;
            this.render();
        } catch (err) {
            this.loading = false;
            console.error("[ProfileView] Fetch error:", err);
            this.render();
        }
    }
    handleAvatarChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        this.fileLoading = true;
        this.render();
        const validTypes = [
            "image/png",
            "image/jpeg"
        ];
        const maxSize = 2097152;
        if (!validTypes.includes(file.type)) {
            document.querySelector("app-toast")?.show("Please select a PNG or JPEG image", "error");
            this.fileLoading = false;
            this.render();
            return;
        }
        if (file.size > maxSize) {
            document.querySelector("app-toast")?.show("Image must be smaller than 2MB", "error");
            this.fileLoading = false;
            this.render();
            return;
        }
        if (this.avatarPreview.startsWith("blob:")) URL.revokeObjectURL(this.avatarPreview);
        this.selectedFile = file;
        this.avatarPreview = URL.createObjectURL(file);
        this.fileLoading = false;
        this.render();
    }
    resetAvatarPreview() {
        if (this.avatarPreview.startsWith("blob:")) URL.revokeObjectURL(this.avatarPreview);
        this.selectedFile = null;
        this.avatarPreview = this.getSafeAvatarUrl(this.user.avatar);
        this.render();
    }
    async submitHandler(e) {
        e.preventDefault();
        if (this.saving) return;
        this.saving = true;
        this.render();
        const form = e.target;
        const firstName = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="firstName"]').value.trim());
        const lastName = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="lastName"]').value.trim());
        const email = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="email"]').value.trim());
        const newPassword = form.querySelector('[name="newPassword"]').value;
        const confirmPassword = form.querySelector('[name="confirmPassword"]').value;
        if (newPassword && newPassword !== confirmPassword) {
            this.passwordMismatch = true;
            this.saving = false;
            this.render();
            return;
        }
        try {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            if (this.selectedFile) formData.append("avatar", this.selectedFile);
            if (newPassword) formData.append("password", newPassword);
            const response = await (0, _apiFetchJsDefault.default)(`${(0, _appJsDefault.default).apiBase}/users/${(0, _authJsDefault.default).currentUser.id}`, {
                method: "PUT",
                body: formData
            });
            if (!response.ok) throw new Error((await response.json()).message);
            const updatedUser = await response.json();
            (0, _authJsDefault.default).currentUser = {
                ...(0, _authJsDefault.default).currentUser,
                ...updatedUser
            };
            this.user = updatedUser;
            if (this.avatarPreview.startsWith("blob:")) URL.revokeObjectURL(this.avatarPreview);
            this.avatarPreview = this.getSafeAvatarUrl(updatedUser.avatar);
            this.selectedFile = null;
            this.passwordMismatch = false;
            this.saving = false;
            document.querySelector("app-toast")?.show("Profile updated", "info");
            this.render();
        } catch (err) {
            this.saving = false;
            document.querySelector("app-toast")?.show(err.message || "Failed to update profile", "error");
            console.error("[ProfileView] Update error:", err);
            this.render();
        }
    }
    render() {
        if (typeof this.avatarPreview !== "string") {
            console.warn("[ProfileView] avatarPreview is not a string:", this.avatarPreview);
            this.avatarPreview = (0, _defaultavatarPngDefault.default);
        }
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="page-content">
          ${this.loading ? (0, _litHtml.html)`<div>Loading...</div>` : (0, _litHtml.html)`
                <h1>Your Profile</h1>
                <div class="avatar-section">
                  <div class="avatar-wrapper">
                    <img
                      src="${this.avatarPreview}"
                      alt="User Avatar"
                      class="avatar-preview"
                      @error=${(e)=>{
            console.error("[ProfileView] Image load error for src:", e.target.src);
            e.target.src = (0, _defaultavatarPngDefault.default);
        }}
                    />
                  </div>
                  <div class="avatar-controls">
                    <label class="upload-button">
                      <input
                        name="avatar"
                        type="file"
                        accept="image/png,image/jpeg"
                        @change=${this.handleAvatarChange.bind(this)}
                        ?disabled=${this.fileLoading}
                      />
                      <button ?disabled=${this.fileLoading}>
                        Choose Image
                      </button>
                    </label>
                    ${this.selectedFile ? (0, _litHtml.html)`
                          <button @click=${this.resetAvatarPreview.bind(this)}>
                            Remove Selected Image
                          </button>
                        ` : ""}
                  </div>
                </div>
                <div class="form-wrapper">
                  <form @submit=${this.submitHandler.bind(this)}>
                    <label>
                      First Name
                      <input
                        name="firstName"
                        value="${(0, _dompurifyDefault.default).sanitize(this.user.firstName)}"
                        required
                      />
                    </label>
                    <label>
                      Last Name
                      <input
                        name="lastName"
                        value="${(0, _dompurifyDefault.default).sanitize(this.user.lastName)}"
                        required
                      />
                    </label>
                    <label>
                      Email
                      <input
                        name="email"
                        type="email"
                        value="${(0, _dompurifyDefault.default).sanitize(this.user.email)}"
                        required
                      />
                    </label>
                    <label>
                      New Password
                      <input name="newPassword" type="password" />
                    </label>
                    <label>
                      Confirm New Password
                      <input
                        name="confirmPassword"
                        type="password"
                        class=${this.passwordMismatch ? "invalid" : ""}
                      />
                      ${this.passwordMismatch ? (0, _litHtml.html)`<span>Passwords do not match</span>` : ""}
                    </label>
                    <button
                      type="submit"
                      class="button primary"
                      ?disabled=${this.saving}
                    >
                      ${this.saving ? "Saving..." : "Save Changes"}
                    </button>
                  </form>
                </div>
              `}
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = ProfileView;

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","dompurify":"1IHUz","../apiFetch.js":"96g6P","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../images/defaultavatar.png":"ejJaf"}],"ejJaf":[function() {},{}],"kXOFZ":[function(require,module,exports,__globalThis) {
// views/GuestHome.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _apiFetchJs = require("../apiFetch.js");
var _apiFetchJsDefault = parcelHelpers.interopDefault(_apiFetchJs);
class GuestHomeView {
    constructor(){
        this.events = null;
        this.filter = "all";
    }
    init() {
        document.title = "Guest Home - Chinwag";
        this.handleTabChange = this.handleTabChange.bind(this);
        this.render();
        this.fetchEvents();
    }
    async fetchEvents() {
        try {
            const query = this.filter === "all" ? "" : `?dateRange=${this.filter}`;
            const response = await (0, _apiFetchJsDefault.default)(`${(0, _appJsDefault.default).apiBase}/events${query}`);
            if (!response.ok) throw new Error("Failed to fetch events");
            this.events = await response.json();
            this.render();
        } catch (err) {
            document.querySelector("app-toast")?.show("Error fetching events", "error");
            console.error("[GuestHome] fetchEvents error:", err);
            this.events = null;
            this.render();
        }
    }
    handleTabChange(filter) {
        this.filter = filter;
        this.events = null;
        this.render();
        this.fetchEvents();
    }
    async bookEvent(eventId) {
        try {
            const response = await (0, _apiFetchJsDefault.default)(`${(0, _appJsDefault.default).apiBase}/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    eventId
                })
            });
            if (!response.ok) throw new Error((await response.json()).message);
            document.querySelector("app-toast")?.show("Event booked!", "info");
            this.fetchEvents();
        } catch (err) {
            document.querySelector("app-toast")?.show(err.message || "Booking failed", "error");
            console.error("[GuestHome] bookEvent error:", err);
            this.render();
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="events-content">
          <h1 class="title">Have a chinwag...</h1>

          <div class="tab-bar">
            <button
              class="page-tab ${this.filter === "all" ? "active" : ""}"
              @click=${()=>this.handleTabChange("all")}
            >
              All
            </button>
            <button
              class="page-tab ${this.filter === "weekend" ? "active" : ""}"
              @click=${()=>this.handleTabChange("weekend")}
            >
              This Weekend
            </button>
            <button
              class="page-tab ${this.filter === "nextWeek" ? "active" : ""}"
              @click=${()=>this.handleTabChange("nextWeek")}
            >
              Next Week
            </button>
          </div>

          ${this.events === null ? (0, _litHtml.html)`<div class="spinner">Loading events...</div>` : this.events.length === 0 ? (0, _litHtml.html)`<p>No events found for this filter.</p>` : (0, _litHtml.html)`
                <div class="event-carousel">
                  ${this.events.map((event)=>(0, _litHtml.html)`
                      <div class="event-card">
                        <img
                          src="${(0, _dompurifyDefault.default).sanitize(event.image)}"
                          alt="${event.title}"
                        />
                        <div class="event-card-body">
                          <h2>${(0, _dompurifyDefault.default).sanitize(event.title)}</h2>
                          <p>${(0, _dompurifyDefault.default).sanitize(event.description)}</p>
                          <p>Date: ${new Date(event.date).toLocaleString()}</p>
                          <p>Location: ${(0, _dompurifyDefault.default).sanitize(event.location)}</p>
                          <p>Seats Available: ${event.seatsAvailable}</p>
                          <p>
                            Host: ${(0, _dompurifyDefault.default).sanitize(event.host.firstName)}
                            ${(0, _dompurifyDefault.default).sanitize(event.host.lastName)}
                          </p>
                        </div>
                        <div class="button-group">
                          <button
                            class="button primary"
                            @click=${()=>this.bookEvent(event._id)}
                            ?disabled=${event.seatsAvailable === 0}
                          >
                            Book Event
                          </button>
                        </div>
                      </div>
                    `)}
                </div>
              `}
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = GuestHomeView;

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../apiFetch.js":"96g6P"}],"d2S5w":[function(require,module,exports,__globalThis) {
// views/hosthome.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
class HostBookingsView {
    constructor(){
        this.bookings = [];
        this.loading = true;
        this.removingBookingId = null;
    }
    init() {
        document.title = "Host Bookings - Chinwag";
        this.fetchBookings();
    }
    async fetchBookings() {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings/host`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to fetch bookings");
            this.bookings = await response.json();
            this.loading = false;
            this.render();
        } catch (err) {
            this.loading = false;
            document.querySelector("app-toast")?.show("Error fetching bookings", "error");
            console.error(err);
            this.render();
        }
    }
    async updateNote(bookingId, notes) {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings/${bookingId}/notes`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    notes: (0, _dompurifyDefault.default).sanitize(notes)
                })
            });
            if (!response.ok) throw new Error("Failed to update notes");
            document.querySelector("app-toast")?.show("Notes updated", "info");
            this.fetchBookings();
        } catch (err) {
            document.querySelector("app-toast")?.show(err.message || "Failed to update notes", "error");
            console.error(err);
            this.render();
        }
    }
    async removeBooking(bookingId) {
        this.removingBookingId = bookingId;
        this.render();
    }
    async confirmRemove(bookingId) {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings/${bookingId}/cancel`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to remove booking");
            document.querySelector("app-toast")?.show("Booking removed", "info");
            this.removingBookingId = null;
            this.fetchBookings();
        } catch (err) {
            document.querySelector("app-toast")?.show(err.message || "Failed to remove booking", "error");
            console.error(err);
            this.removingBookingId = null;
            this.render();
        }
    }
    groupBookingsByEvent() {
        const events = {};
        this.bookings.forEach((booking)=>{
            const eventId = booking.event._id;
            if (!events[eventId]) events[eventId] = {
                event: booking.event,
                bookings: []
            };
            events[eventId].bookings.push(booking);
        });
        return Object.values(events);
    }
    render() {
        const eventGroups = this.groupBookingsByEvent();
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="page-content">
          <h1>Your Event Bookings</h1>
          ${this.loading ? (0, _litHtml.html)`<div class="spinner">Loading...</div>` : eventGroups.length === 0 ? (0, _litHtml.html)`<p>No bookings found for your events.</p>` : eventGroups.map(({ event, bookings })=>(0, _litHtml.html)`
                  <div class="event-section">
                    <h2>${(0, _dompurifyDefault.default).sanitize(event.title)}</h2>
                    <div class="booking-grid">
                      ${bookings.map((booking)=>(0, _litHtml.html)`
                          <div class="booking-card">
                            <div class="card-header">
                              <img
                                src="${(0, _dompurifyDefault.default).sanitize(booking.guest.avatar.startsWith("/uploads") ? `${(0, _appJsDefault.default).apiBase}${booking.guest.avatar}` : `/images/defaultavatar.png`)}"
                                alt="Avatar for ${(0, _dompurifyDefault.default).sanitize(booking.guest.firstName)}"
                                class="avatar"
                                @error=${(e)=>e.target.src = `/images/defaultavatar.png`}
                                loading="lazy"
                              />
                              <span
                                >${(0, _dompurifyDefault.default).sanitize(`${booking.guest.firstName} ${booking.guest.lastName}`)}</span
                              >
                            </div>
                            <div>
                              <strong>Email:</strong>
                              ${(0, _dompurifyDefault.default).sanitize(booking.guest.email)}
                            </div>
                            <div>
                              <strong>Notes:</strong>
                              <input
                                value="${(0, _dompurifyDefault.default).sanitize(booking.hostNotes || "")}"
                                @change=${(e)=>this.updateNote(booking._id, e.target.value)}
                              />
                            </div>
                            <div class="card-footer">
                              <button
                                class="button danger"
                                @click=${()=>this.removeBooking(booking._id)}
                                aria-label="Remove ${(0, _dompurifyDefault.default).sanitize(booking.guest.firstName)}"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        `)}
                    </div>
                  </div>
                `)}
          ${this.removingBookingId ? (0, _litHtml.html)`
                <div class="dialog-overlay">
                  <div class="dialog">
                    <h2>Confirm Removal</h2>
                    <p>Are you sure you want to remove this guest?</p>
                    <div class="dialog-footer">
                      <button
                        class="button primary"
                        @click=${()=>this.confirmRemove(this.removingBookingId)}
                      >
                        Confirm
                      </button>
                      <button
                        class="button"
                        @click=${()=>{
            this.removingBookingId = null;
            this.render();
        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ` : ""}
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = HostBookingsView;

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"66jdU":[function(require,module,exports,__globalThis) {
// views/GuestBookings.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
class GuestBookingsView {
    constructor(){
        this.bookings = [];
        this.loading = true;
        this.activeFilter = "Upcoming";
        this.cancellingBookingId = null;
    }
    init() {
        document.title = "Your Bookings - Chinwag";
        this.fetchBookings();
    }
    async fetchBookings() {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings/guest`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to fetch bookings");
            this.bookings = await response.json();
            this.loading = false;
            this.render();
        } catch (err) {
            this.loading = false;
            document.querySelector("app-toast")?.show("Error fetching bookings", "error");
            console.error(err);
            this.render();
        }
    }
    handleTabClick(filter) {
        this.activeFilter = filter;
        this.render();
    }
    async cancelBooking(bookingId) {
        this.cancellingBookingId = bookingId;
        this.render();
    }
    async confirmCancel(bookingId) {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings/${bookingId}/cancel`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to cancel booking");
            document.querySelector("app-toast")?.show("Booking cancelled", "info");
            this.cancellingBookingId = null;
            this.fetchBookings();
        } catch (err) {
            document.querySelector("app-toast")?.show(err.message || "Failed to cancel booking", "error");
            console.error(err);
            this.cancellingBookingId = null;
            this.render();
        }
    }
    getFilteredBookings() {
        const now = new Date();
        return this.bookings.filter((booking)=>this.activeFilter === "Upcoming" ? new Date(booking.event.date) >= now && booking.status === "confirmed" : new Date(booking.event.date) < now || booking.status === "cancelled");
    }
    render() {
        const filteredBookings = this.getFilteredBookings();
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="page-content">
          <h1>Your Bookings</h1>

          <div class="tab-bar">
            <button
              class="page-tab ${this.activeFilter === "Upcoming" ? "active" : ""}"
              @click=${()=>this.handleTabClick("Upcoming")}
            >
              Upcoming
            </button>
            <button
              class="page-tab ${this.activeFilter === "Past" ? "active" : ""}"
              @click=${()=>this.handleTabClick("Past")}
            >
              Past
            </button>
          </div>

          ${this.loading ? (0, _litHtml.html)`<div class="spinner">Loading...</div>` : filteredBookings.length === 0 ? (0, _litHtml.html)`<p>No ${this.activeFilter.toLowerCase()} bookings found.</p>` : (0, _litHtml.html)`
                <div class="booking-grid">
                  ${filteredBookings.map((booking)=>(0, _litHtml.html)`
                      <div class="booking-card">
                        <img
                          src="${(0, _dompurifyDefault.default).sanitize(booking.event.image.startsWith("/uploads") ? `${(0, _appJsDefault.default).apiBase}${booking.event.image}` : `/images/default-event.png`)}"
                          alt="${(0, _dompurifyDefault.default).sanitize(booking.event.title)}"
                          @error=${(e)=>e.target.src = `/images/default-event.png`}
                          loading="lazy"
                        />
                        <h3>${(0, _dompurifyDefault.default).sanitize(booking.event.title)}</h3>
                        <p>
                          <strong>Date:</strong>
                          ${new Date(booking.event.date).toLocaleString()}
                        </p>
                        <p>
                          <strong>Location:</strong>
                          ${(0, _dompurifyDefault.default).sanitize(booking.event.location)}
                        </p>
                        <p>
                          <strong>Status:</strong>
                          ${(0, _dompurifyDefault.default).sanitize(booking.status)}
                        </p>
                        <p>
                          <strong>Host:</strong>
                          ${(0, _dompurifyDefault.default).sanitize(`${booking.event.host.firstName} ${booking.event.host.lastName}`)}
                        </p>
                        <p>
                          <strong>Host Email:</strong>
                          ${(0, _dompurifyDefault.default).sanitize(booking.event.host.email)}
                        </p>
                        <div class="card-footer">
                          <button
                            class="button primary"
                            @click=${()=>window.open(`mailto:${booking.event.host.email}`)}
                            aria-label="Contact Host"
                          >
                            Contact Host
                          </button>
                          ${booking.status === "confirmed" ? (0, _litHtml.html)`
                                <button
                                  class="button danger"
                                  @click=${()=>this.cancelBooking(booking._id)}
                                  aria-label="Cancel Booking"
                                >
                                  Cancel Booking
                                </button>
                              ` : ""}
                        </div>
                      </div>
                    `)}
                </div>
              `}
          ${this.cancellingBookingId ? (0, _litHtml.html)`
                <div class="dialog-overlay">
                  <div class="dialog">
                    <h2>Confirm Cancellation</h2>
                    <p>Are you sure you want to cancel this booking?</p>
                    <div class="dialog-footer">
                      <button
                        class="button primary"
                        @click=${()=>this.confirmCancel(this.cancellingBookingId)}
                      >
                        Confirm
                      </button>
                      <button
                        class="button"
                        @click=${()=>{
            this.cancellingBookingId = null;
            this.render();
        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ` : ""}
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = GuestBookingsView;

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bmUJu":[function(require,module,exports,__globalThis) {
// views/HostBookings.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
class HostBookingsView {
    constructor(){
        this.bookings = [];
        this.loading = true;
        this.removingBookingId = null;
    }
    init() {
        document.title = "Host Bookings - Chinwag";
        this.fetchBookings();
    }
    async fetchBookings() {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings/host`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to fetch bookings");
            this.bookings = await response.json();
            this.loading = false;
            this.render();
        } catch (err) {
            this.loading = false;
            document.querySelector("app-toast")?.show("Error fetching bookings", "error");
            console.error(err);
            this.render();
        }
    }
    async updateNote(bookingId, notes) {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings/${bookingId}/notes`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    notes: (0, _dompurifyDefault.default).sanitize(notes)
                })
            });
            if (!response.ok) throw new Error("Failed to update notes");
            document.querySelector("app-toast")?.show("Notes updated", "info");
            this.fetchBookings();
        } catch (err) {
            document.querySelector("app-toast")?.show(err.message || "Failed to update notes", "error");
            console.error(err);
            this.render();
        }
    }
    async removeBooking(bookingId) {
        this.removingBookingId = bookingId;
        this.render();
    }
    async confirmRemove(bookingId) {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings/${bookingId}/cancel`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to remove booking");
            document.querySelector("app-toast")?.show("Booking removed", "info");
            this.removingBookingId = null;
            this.fetchBookings();
        } catch (err) {
            document.querySelector("app-toast")?.show(err.message || "Failed to remove booking", "error");
            console.error(err);
            this.removingBookingId = null;
            this.render();
        }
    }
    groupBookingsByEvent() {
        const events = {};
        this.bookings.forEach((booking)=>{
            const eventId = booking.event._id;
            if (!events[eventId]) events[eventId] = {
                event: booking.event,
                bookings: []
            };
            events[eventId].bookings.push(booking);
        });
        return Object.values(events);
    }
    render() {
        const eventGroups = this.groupBookingsByEvent();
        const template = (0, _litHtml.html)`
      <div>
        <app-header></app-header>
        <div class="page-content">
          <h1>Your Event Bookings</h1>
          ${this.loading ? (0, _litHtml.html)`<div class="spinner">Loading...</div>` : eventGroups.length === 0 ? (0, _litHtml.html)`<p>No bookings found for your events.</p>` : eventGroups.map(({ event, bookings })=>(0, _litHtml.html)`
                  <div class="event-section">
                    <h2>${(0, _dompurifyDefault.default).sanitize(event.title)}</h2>
                    <div class="booking-grid">
                      ${bookings.map((booking)=>(0, _litHtml.html)`
                          <div class="booking-card">
                            <div class="card-header">
                              <img
                                src="${(0, _dompurifyDefault.default).sanitize(booking.guest.avatar.startsWith("/uploads") ? `${(0, _appJsDefault.default).apiBase}${booking.guest.avatar}` : `/images/defaultavatar.png`)}"
                                alt="Avatar for ${(0, _dompurifyDefault.default).sanitize(booking.guest.firstName)}"
                                class="avatar"
                                @error=${(e)=>e.target.src = `/images/defaultavatar.png`}
                                loading="lazy"
                              />
                              <span
                                >${(0, _dompurifyDefault.default).sanitize(`${booking.guest.firstName} ${booking.guest.lastName}`)}</span
                              >
                            </div>
                            <div>
                              <strong>Email:</strong>
                              ${(0, _dompurifyDefault.default).sanitize(booking.guest.email)}
                            </div>
                            <div>
                              <strong>Notes:</strong>
                              <input
                                value="${(0, _dompurifyDefault.default).sanitize(booking.hostNotes || "")}"
                                @change=${(e)=>this.updateNote(booking._id, e.target.value)}
                              />
                            </div>
                            <div class="card-footer">
                              <button
                                class="button danger"
                                @click=${()=>this.removeBooking(booking._id)}
                                aria-label="Remove ${(0, _dompurifyDefault.default).sanitize(booking.guest.firstName)}"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        `)}
                    </div>
                  </div>
                `)}
          ${this.removingBookingId ? (0, _litHtml.html)`
                <div class="dialog-overlay">
                  <div class="dialog">
                    <h2>Confirm Removal</h2>
                    <p>Are you sure you want to remove this guest?</p>
                    <div class="dialog-footer">
                      <button
                        class="button primary"
                        @click=${()=>this.confirmRemove(this.removingBookingId)}
                      >
                        Confirm
                      </button>
                      <button
                        class="button"
                        @click=${()=>{
            this.removingBookingId = null;
            this.render();
        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ` : ""}
        </div>
        <app-toast></app-toast>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = HostBookingsView;

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3PJ6N":[function(require,module,exports,__globalThis) {
// components/header.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lit = require("lit");
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
class AppHeader extends (0, _lit.LitElement) {
    static properties = {
        currentTab: {
            type: String
        }
    };
    constructor(){
        super();
        this.currentTab = "home";
    }
    updated() {
        const path = window.location.pathname;
        if (path.includes("bookings")) this.currentTab = "bookings";
        else if (path.includes("profile")) this.currentTab = "profile";
        else this.currentTab = "home";
    }
    render() {
        const isHost = (0, _authJsDefault.default).currentUser?.accessLevel === 2;
        return (0, _lit.html)`
      <header class="site-header">
        <div class="image-overlay"></div>
        <div class="header-content">
          <div
            class="logo"
            @click=${()=>(0, _routerJs.gotoRoute)(isHost ? "/host-home" : "/guest-home")}
            role="button"
            aria-label="Go to home"
          >
            Chinwag
          </div>
          <nav class="nav-tabs">
            <button
              class="nav-tab ${this.currentTab === "home" ? "active" : ""}"
              @click=${()=>(0, _routerJs.gotoRoute)(isHost ? "/host-home" : "/guest-home")}
            >
              Home
            </button>
            <button
              class="nav-tab ${this.currentTab === "bookings" ? "active" : ""}"
              @click=${()=>(0, _routerJs.gotoRoute)(isHost ? "/host-bookings" : "/guest-bookings")}
            >
              Bookings
            </button>
            <button
              class="nav-tab ${this.currentTab === "profile" ? "active" : ""}"
              @click=${()=>(0, _routerJs.gotoRoute)("/profile")}
            >
              Profile
            </button>
            <button class="nav-tab" @click=${()=>(0, _authJsDefault.default).signOut()}>
              Logout
            </button>
          </nav>
        </div>
      </header>
    `;
    }
}
customElements.define("app-header", AppHeader);
exports.default = AppHeader;

},{"lit":"hh14x","../Auth.js":"aJFb5","../Router.js":"b5tFI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["iUuJv","fILKw"], "fILKw", "parcelRequire42eb", {})

//# sourceMappingURL=frontend.1fcc916e.js.map
