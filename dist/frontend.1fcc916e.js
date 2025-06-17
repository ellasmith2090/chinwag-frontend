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
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
// Optional: show a quick loading message
document.getElementById("root").innerHTML = "<p>Loading Chinwag...</p>";
// Initialize the app (includes routing)
(0, _appJsDefault.default).init().catch((err)=>{
    document.getElementById("root").innerHTML = `
    <p style="color:red;">App failed to load: ${err.message}</p>
  `;
    console.error("[main.js] App init failed:", err);
});

},{"./Router.js":"b5tFI","./Toast.js":"8c3DX","./App.js":"hh6uc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"b5tFI":[function(require,module,exports,__globalThis) {
// router.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gotoRoute", ()=>gotoRoute);
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
        const view = this.routes[path] || (0, _signInJsDefault.default);
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
        view.init();
        view.render();
    }
};
function gotoRoute(path) {
    history.pushState({}, "", path);
    Router.route();
}
exports.default = Router;

},{"./views/SignUp.js":"jPeMQ","./views/GuestGuide.js":"fdhWh","./views/HostGuide.js":"Kckvv","./views/Profile.js":"2fU3z","./views/GuestHome.js":"kXOFZ","./views/HostHome.js":"d2S5w","./views/GuestBookings.js":"66jdU","./views/HostBookings.js":"bmUJu","./Auth.js":"aJFb5","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","./views/SignIn.js":"85knE"}],"jPeMQ":[function(require,module,exports,__globalThis) {
// views/signup.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
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
            (0, _toastJsDefault.default).show("Passwords do not match");
            return;
        }
        try {
            await (0, _authJsDefault.default).signUp({
                firstName,
                lastName,
                email,
                password,
                accessLevel
            });
            this.loading = false;
            this.render();
        } catch (err) {
            this.loading = false;
            this.render();
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div class="page-content page-centered" role="main">
        <h1>Create Your Account</h1>
        <div class="form-wrapper" aria-label="Sign Up Form">
          <form @submit=${this.submitHandler.bind(this)}>
            <sl-input
              name="firstName"
              label="First Name"
              required
              aria-required="true"
              autocomplete="given-name"
            ></sl-input>
            <sl-input
              name="lastName"
              label="Last Name"
              required
              aria-required="true"
              autocomplete="family-name"
            ></sl-input>
            <sl-input
              name="email"
              type="email"
              label="Email"
              required
              aria-required="true"
              autocomplete="email"
            ></sl-input>
            <sl-input
              name="password"
              type="password"
              label="Password"
              required
              aria-required="true"
              autocomplete="new-password"
              help-text=${this.passwordMismatch ? "Passwords do not match" : ""}
              ?invalid=${this.passwordMismatch}
            ></sl-input>
            <sl-input
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              required
              aria-required="true"
              autocomplete="new-password"
              help-text=${this.passwordMismatch ? "Passwords do not match" : ""}
              ?invalid=${this.passwordMismatch}
            ></sl-input>
            <sl-radio-group
              name="accessLevel"
              label="Register as"
              required
              aria-required="true"
              value="1"
            >
              <sl-radio value="1">Guest</sl-radio>
              <sl-radio value="2">Host</sl-radio>
            </sl-radio-group>
            <sl-button
              type="submit"
              variant="primary"
              ?disabled=${this.loading}
              ?loading=${this.loading}
            >
              Sign Up
            </sl-button>
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
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new SignUpView();

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Router.js":"b5tFI","../Toast.js":"8c3DX","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l15as":[function(require,module,exports,__globalThis) {
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_$LH", ()=>Z);
parcelHelpers.export(exports, "html", ()=>x);
parcelHelpers.export(exports, "mathml", ()=>w);
parcelHelpers.export(exports, "noChange", ()=>T);
parcelHelpers.export(exports, "nothing", ()=>E);
parcelHelpers.export(exports, "render", ()=>B);
parcelHelpers.export(exports, "svg", ()=>b);
const t = globalThis, i = t.trustedTypes, s = i ? i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o = "?" + h, n = `<${o}>`, r = document, l = ()=>r.createComment(""), c = (t)=>null === t || "object" != typeof t && "function" != typeof t, a = Array.isArray, u = (t)=>a(t) || "function" == typeof t?.[Symbol.iterator], d = "[ \t\n\f\r]", f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), x = y(1), b = y(2), w = y(3), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = new WeakMap, C = r.createTreeWalker(r, 129);
function P(t, i) {
    if (!a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s ? s.createHTML(i) : i;
}
const V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === f ? "!--" === u[1] ? c = v : void 0 !== u[1] ? c = _ : void 0 !== u[2] ? ($.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = m) : void 0 !== u[3] && (c = m) : c === m ? ">" === u[0] ? (c = r ?? f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? m : '"' === u[3] ? g : p) : c === g || c === p ? c = m : c === v || c === _ ? c = f : (c = m, r = void 0);
        const x = c === m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === f ? s + n : d >= 0 ? (o.push(a), s.slice(0, d) + e + s.slice(d) + h + x) : s + h + (-2 === d ? i : x);
    }
    return [
        P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = V(t, s);
        if (this.el = N.createElement(f, n), C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith(e)) {
                    const i = v[a++], s = r.getAttribute(t).split(h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? H : "?" === e[1] ? I : "@" === e[1] ? L : k
                    }), r.removeAttribute(t);
                } else t.startsWith(h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($.test(r.tagName)) {
                    const t = r.textContent.split(h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = i ? i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], l()), C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf(h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function S(t, i, s = t, e) {
    if (i === T) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = S(t, h._$AS(t, i.values), h, e)), i;
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
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? r).importNode(i, !0);
        C.currentNode = e;
        let h = C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = C.nextNode(), o++);
        }
        return C.currentNode = r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = S(this, t, i), c(t) ? t === E || null == t || "" === t ? (this._$AH !== E && this._$AR(), this._$AH = E) : t !== this._$AH && t !== T && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = t : this.T(r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = N.createElement(P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = A.get(t.strings);
        return void 0 === i && A.set(t.strings, i = new N(t)), i;
    }
    k(t) {
        a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new R(this.O(l()), this.O(l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = E;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = S(this, t, i, 0), o = !c(t) || t !== this._$AH && t !== T, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = S(this, e[s + n], i, n), r === T && (r = this._$AH[n]), o ||= !c(r) || r !== this._$AH[n], r === E ? t = E : t !== E && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class H extends k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === E ? void 0 : t;
    }
}
class I extends k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== E);
    }
}
class L extends k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = S(this, t, i, 0) ?? E) === T) return;
        const s = this._$AH, e = t === E && s !== E || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== E && (s === E || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class z {
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
const Z = {
    M: e,
    P: h,
    A: o,
    C: 1,
    L: V,
    R: M,
    D: u,
    V: S,
    I: R,
    H: k,
    N: I,
    U: L,
    B: H,
    F: z
}, j = t.litHtmlPolyfillSupport;
j?.(N, R), (t.litHtmlVersions ??= []).push("3.3.0");
const B = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new R(i.insertBefore(l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
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

},{}],"hh6uc":[function(require,module,exports,__globalThis) {
// App.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("./Router.js");
var _routerJsDefault = parcelHelpers.interopDefault(_routerJs);
const App = {
    apiBase: "http://localhost:3000",
    rootEl: null,
    async init () {
        this.rootEl = document.getElementById("root");
        if (!this.rootEl) throw new Error("Root element #root not found");
        console.log("[App] Initialising...");
        await (0, _routerJsDefault.default).init();
    }
};
exports.default = App;

},{"./Router.js":"b5tFI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aJFb5":[function(require,module,exports,__globalThis) {
// Auth.js
// Auth.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _routerJs = require("./Router.js");
var _toastJs = require("./Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _appJs = require("./App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
const Auth = {
    currentUser: null,
    async signIn ({ email, password }) {
        try {
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/api/auth/signin`, {
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
                const error = await response.json();
                throw new Error(error.message || "Sign-in failed");
            }
            const { accessToken, user } = await response.json();
            localStorage.setItem("token", accessToken);
            this.currentUser = user;
            (0, _toastJsDefault.default).show(`Welcome back, ${user.firstName}!`);
            const redirectPath = user.isFirstLogin ? user.accessLevel === 1 ? "/guest-guide" : "/host-guide" : user.accessLevel === 1 ? "/guest-home" : "/host-home";
            (0, _routerJs.gotoRoute)(redirectPath);
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Failed to sign in. Please check your connection.");
            console.error("[Auth] signIn failed:", err);
            throw err;
        }
    },
    async signUp ({ firstName, lastName, email, password, accessLevel }) {
        try {
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/api/users`, {
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
                const error = await response.json();
                throw new Error(error.message || "Sign-up failed");
            }
            (0, _toastJsDefault.default).show("Account created! Please sign in.");
            (0, _routerJs.gotoRoute)("/signin");
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Failed to sign up. Please check your connection.");
            console.error("[Auth] signUp failed:", err);
            throw err;
        }
    },
    async check () {
        const token = localStorage.getItem("token");
        if (!token) {
            this.currentUser = null;
            return false;
        }
        try {
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/api/auth/validate`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Invalid token");
            this.currentUser = (await response.json()).user;
            return true;
        } catch (err) {
            console.warn("[Auth] Session check failed:", err.message);
            localStorage.removeItem("token");
            this.currentUser = null;
            return false;
        }
    },
    signOut () {
        localStorage.removeItem("token");
        this.currentUser = null;
        (0, _toastJsDefault.default).show("Signed out successfully");
        (0, _routerJs.gotoRoute)("/signin");
    }
};
exports.default = Auth;

},{"./Router.js":"b5tFI","./Toast.js":"8c3DX","./App.js":"hh6uc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8c3DX":[function(require,module,exports,__globalThis) {

},{}],"1IHUz":[function(require,module,exports,__globalThis) {
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

},{}],"fdhWh":[function(require,module,exports,__globalThis) {
// views/GuestGuide.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
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
            (0, _toastJsDefault.default).show("Error getting started");
            console.error(err);
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div class="guide-page">
        <div
          class="guide-header"
          style="background-image: url('/images/guide-header.png')"
        ></div>
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
            <sl-card class="guide-card">
              <h4>🍽️ Meet new people</h4>
              <p>No planning, no pressure — just show up.</p>
            </sl-card>
            <sl-card class="guide-card">
              <h4>🗓️ Spontaneous plans</h4>
              <p>Join an event tonight or this weekend.</p>
            </sl-card>
            <sl-card class="guide-card">
              <h4>🧭 The unexpected</h4>
              <p>Discover great venues and better convo.</p>
            </sl-card>
          </div>
          <div class="guide-cta">
            <sl-button
              variant="primary"
              size="large"
              @click=${this.handleGetStarted.bind(this)}
              aria-label="Get Started as a Guest"
            >
              Get Started
            </sl-button>
          </div>
        </div>
        <div
          class="guide-footer"
          style="background-image: url('/images/guide-footer.png')"
        ></div>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new GuestGuideView();

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Router.js":"b5tFI","../Toast.js":"8c3DX","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"Kckvv":[function(require,module,exports,__globalThis) {
// views/HostGuide.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
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
            (0, _toastJsDefault.default).show("Error getting started");
            console.error(err);
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div class="guide-page">
        <div
          class="guide-header"
          style="background-image: url('/images/guide-header.png')"
        ></div>
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
            <sl-card class="guide-card">
              <h4>📅 Fill seats</h4>
              <p>Boost off-peak bookings with communal tables.</p>
            </sl-card>
            <sl-card class="guide-card">
              <h4>🛠️ List in seconds</h4>
              <p>Duplicate past events to post in seconds.</p>
            </sl-card>
            <sl-card class="guide-card">
              <h4>📊 Reach a new audience</h4>
              <p>Attract spontaneous diners and social groups.</p>
            </sl-card>
          </div>
          <div class="guide-cta">
            <sl-button
              variant="primary"
              size="large"
              @click=${this.handleGetStarted.bind(this)}
              aria-label="Get Started as a Host"
            >
              Get Started
            </sl-button>
          </div>
        </div>
        <div
          class="guide-footer"
          style="background-image: url('/images/guide-footer.png')"
        ></div>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new HostGuideView();

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Router.js":"b5tFI","../Toast.js":"8c3DX","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2fU3z":[function(require,module,exports,__globalThis) {
// views/profile.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _headerJs = require("../components/Header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
class ProfileView {
    constructor(){
        this.user = null;
        this.loading = true;
        this.saving = false;
        this.passwordMismatch = false;
        this.showPasswordDialog = false;
        this.avatarPreview = null;
    }
    init() {
        document.title = "Profile - Chinwag";
        this.fetchUser();
    }
    async fetchUser() {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/users/${(0, _authJsDefault.default).currentUser.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to fetch profile");
            this.user = await response.json();
            this.avatarPreview = this.user.avatar.startsWith("/uploads") ? `${(0, _appJsDefault.default).apiBase}${this.user.avatar}` : "/images/default-avatar.png";
            this.loading = false;
            this.render();
        } catch (err) {
            this.loading = false;
            (0, _toastJsDefault.default).show("Error fetching profile");
            console.error(err);
            this.render();
        }
    }
    handleAvatarChange(e) {
        const file = e.target.files[0];
        if (file) {
            this.avatarPreview = URL.createObjectURL(file);
            this.render();
        }
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
        const bio = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="bio"]').value.trim());
        const avatar = form.querySelector('[name="avatar"]').files[0];
        try {
            const token = localStorage.getItem("token");
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("bio", bio);
            if (avatar) formData.append("avatar", avatar);
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/users/${(0, _authJsDefault.default).currentUser.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });
            if (!response.ok) throw new Error((await response.json()).message);
            const updatedUser = await response.json();
            (0, _authJsDefault.default).currentUser = {
                ...(0, _authJsDefault.default).currentUser,
                ...updatedUser
            };
            this.user = updatedUser;
            this.avatarPreview = updatedUser.avatar.startsWith("/uploads") ? `${(0, _appJsDefault.default).apiBase}${updatedUser.avatar}` : "/images/default-avatar.png";
            this.saving = false;
            (0, _toastJsDefault.default).show("Profile updated");
            this.render();
        } catch (err) {
            this.saving = false;
            (0, _toastJsDefault.default).show(err.message || "Failed to update profile");
            this.render();
        }
    }
    async submitPasswordHandler(e) {
        e.preventDefault();
        this.passwordMismatch = false;
        const form = e.target;
        const currentPassword = form.querySelector('[name="currentPassword"]').value;
        const newPassword = form.querySelector('[name="newPassword"]').value;
        const confirmPassword = form.querySelector('[name="confirmPassword"]').value;
        if (newPassword !== confirmPassword) {
            this.passwordMismatch = true;
            this.render();
            return;
        }
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/users/${(0, _authJsDefault.default).currentUser.id}/password`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    currentPassword,
                    newPassword
                })
            });
            if (!response.ok) throw new Error((await response.json()).message);
            this.showPasswordDialog = false;
            (0, _toastJsDefault.default).show("Password updated");
            this.render();
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Failed to update password");
            this.render();
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div>
        ${(0, _headerJsDefault.default).render()}
        <div class="page-content">
          ${this.loading ? (0, _litHtml.html)`<sl-spinner></sl-spinner>` : (0, _litHtml.html)`
                <h1>Your Profile</h1>
                <div class="form-wrapper">
                  <form @submit=${this.submitHandler.bind(this)}>
                    <div class="avatar-section">
                      <img
                        src="${(0, _dompurifyDefault.default).sanitize(this.avatarPreview)}"
                        alt="Profile avatar"
                        class="avatar-preview"
                        @error=${(e)=>e.target.src = "/images/default-avatar.png"}
                        loading="lazy"
                      />
                      <sl-input
                        name="avatar"
                        type="file"
                        accept="image/*"
                        @change=${this.handleAvatarChange.bind(this)}
                        label="Upload Avatar"
                      ></sl-input>
                    </div>
                    <sl-input
                      name="firstName"
                      label="First Name"
                      value="${(0, _dompurifyDefault.default).sanitize(this.user.firstName)}"
                      required
                      autocomplete="given-name"
                    ></sl-input>
                    <sl-input
                      name="lastName"
                      label="Last Name"
                      value="${(0, _dompurifyDefault.default).sanitize(this.user.lastName)}"
                      required
                      autocomplete="family-name"
                    ></sl-input>
                    <sl-input
                      name="email"
                      type="email"
                      label="Email"
                      value="${(0, _dompurifyDefault.default).sanitize(this.user.email)}"
                      required
                      autocomplete="email"
                    ></sl-input>
                    <sl-textarea
                      name="bio"
                      label="Bio"
                      value="${(0, _dompurifyDefault.default).sanitize(this.user.bio)}"
                    ></sl-textarea>
                    <sl-button
                      type="submit"
                      variant="primary"
                      ?disabled=${this.saving}
                      ?loading=${this.saving}
                    >
                      Save Profile
                    </sl-button>
                    <sl-button
                      variant="default"
                      @click=${()=>{
            this.showPasswordDialog = true;
            this.render();
        }}
                    >
                      Change Password
                    </sl-button>
                  </form>
                </div>
                ${this.showPasswordDialog ? (0, _litHtml.html)`
                      <sl-dialog
                        label="Change Password"
                        open
                        @sl-request-close=${()=>{
            this.showPasswordDialog = false;
            this.render();
        }}
                      >
                        <form @submit=${this.submitPasswordHandler.bind(this)}>
                          <sl-input
                            name="currentPassword"
                            type="password"
                            label="Current Password"
                            required
                            autocomplete="current-password"
                          ></sl-input>
                          <sl-input
                            name="newPassword"
                            type="password"
                            label="New Password"
                            required
                            autocomplete="new-password"
                            help-text=${this.passwordMismatch ? "Passwords do not match" : ""}
                            ?invalid=${this.passwordMismatch}
                          ></sl-input>
                          <sl-input
                            name="confirmPassword"
                            type="password"
                            label="Confirm New Password"
                            required
                            autocomplete="new-password"
                            help-text=${this.passwordMismatch ? "Passwords do not match" : ""}
                            ?invalid=${this.passwordMismatch}
                          ></sl-input>
                          <sl-button
                            slot="footer"
                            type="submit"
                            variant="primary"
                          >
                            Update Password
                          </sl-button>
                          <sl-button
                            slot="footer"
                            variant="default"
                            @click=${()=>{
            this.showPasswordDialog = false;
            this.render();
        }}
                          >
                            Cancel
                          </sl-button>
                        </form>
                      </sl-dialog>
                    ` : ""}
              `}
        </div>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new ProfileView();

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Toast.js":"8c3DX","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../components/Header.js":"3PJ6N"}],"3PJ6N":[function(require,module,exports,__globalThis) {
// components/header.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
const Header = {
    render () {
        const isHost = (0, _authJsDefault.default).currentUser?.accessLevel === 2;
        return (0, _litHtml.html)`
      <header class="site-header">
        <div class="header-content">
          <h1
            class="logo"
            @click=${()=>(0, _routerJs.gotoRoute)(isHost ? "/host-home" : "/guest-home")}
          >
            Chinwag
          </h1>
          <sl-tab-group class="nav-tabs">
            <sl-tab
              slot="nav"
              panel="home"
              @click=${()=>(0, _routerJs.gotoRoute)(isHost ? "/host-home" : "/guest-home")}
            >
              Home
            </sl-tab>
            <sl-tab
              slot="nav"
              panel="bookings"
              @click=${()=>(0, _routerJs.gotoRoute)(isHost ? "/host-bookings" : "/guest-bookings")}
            >
              Bookings
            </sl-tab>
            <sl-tab
              slot="nav"
              panel="profile"
              @click=${()=>(0, _routerJs.gotoRoute)("/profile")}
            >
              Profile
            </sl-tab>
            <sl-tab slot="nav" panel="logout" @click=${()=>(0, _authJsDefault.default).signOut()}>
              Logout
            </sl-tab>
          </sl-tab-group>
        </div>
      </header>
    `;
    }
};
exports.default = Header;

},{"lit-html":"l15as","../Auth.js":"aJFb5","../Router.js":"b5tFI","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kXOFZ":[function(require,module,exports,__globalThis) {
// views/GuestHome.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _headerJs = require("../components/Header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
class GuestHomeView {
    constructor(){
        this.events = [];
        this.filter = "all";
    }
    init() {
        document.title = "Guest Home";
        this.fetchEvents();
        this.handleTabChange = this.handleTabChange.bind(this);
    }
    async fetchEvents() {
        try {
            const query = this.filter === "all" ? "" : `?dateRange=${this.filter}`;
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/events${query}`);
            if (!response.ok) throw new Error("Failed to fetch events");
            this.events = await response.json();
            this.render();
        } catch (err) {
            (0, _toastJsDefault.default).show("Error fetching events");
            console.error(err);
        }
    }
    handleTabChange(e) {
        this.filter = e.target.panel;
        this.fetchEvents();
    }
    async bookEvent(eventId) {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/bookings`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    eventId
                })
            });
            if (!response.ok) throw new Error((await response.json()).message);
            (0, _toastJsDefault.default).show("Event booked!");
            this.fetchEvents();
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Booking failed");
            console.error(err);
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div>
        ${(0, _headerJsDefault.default).render()}
        <div class="page-content">
          <h1>Available Events</h1>
          <div class="carousel-container">
            <sl-tab-group @sl-tab-show=${this.handleTabChange}>
              <sl-tab slot="nav" panel="all" active>All</sl-tab>
              <sl-tab slot="nav" panel="weekend">This Weekend</sl-tab>
              <sl-tab slot="nav" panel="nextWeek">Next Week</sl-tab>
            </sl-tab-group>
            <sl-carousel navigation pagination>
              ${this.events.map((event)=>(0, _litHtml.html)`
                  <sl-carousel-item>
                    <div class="event-card">
                      <img
                        src="${(0, _dompurifyDefault.default).sanitize(event.image)}"
                        alt="${(0, _dompurifyDefault.default).sanitize(event.title)}"
                        width="300"
                      />
                      <h2>${(0, _dompurifyDefault.default).sanitize(event.title)}</h2>
                      <p>${(0, _dompurifyDefault.default).sanitize(event.description)}</p>
                      <p>Date: ${new Date(event.date).toLocaleString()}</p>
                      <p>Location: ${(0, _dompurifyDefault.default).sanitize(event.location)}</p>
                      <p>Seats Available: ${event.seatsAvailable}</p>
                      <p>
                        Host: ${(0, _dompurifyDefault.default).sanitize(event.host.firstName)}
                        ${(0, _dompurifyDefault.default).sanitize(event.host.lastName)}
                      </p>
                      <sl-button
                        @click=${()=>this.bookEvent(event._id)}
                        variant="primary"
                        ?disabled=${event.seatsAvailable === 0}
                      >
                        Book Event
                      </sl-button>
                    </div>
                  </sl-carousel-item>
                `)}
            </sl-carousel>
          </div>
        </div>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new GuestHomeView();

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Toast.js":"8c3DX","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../components/Header.js":"3PJ6N"}],"d2S5w":[function(require,module,exports,__globalThis) {
// views/hosthome.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _routerJs = require("../Router.js");
class HostHomeView {
    constructor(){
        this.events = [];
    }
    init() {
        document.title = "Host Home";
        this.fetchEvents();
        this.submitHandler = this.submitHandler.bind(this);
        this.imageHandler = this.imageHandler.bind(this);
    }
    async fetchEvents() {
        try {
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/events?host=${(0, _authJsDefault.default).currentUser.id}`);
            if (!response.ok) throw new Error("Failed to fetch events");
            this.events = await response.json();
            this.render();
        } catch (err) {
            (0, _toastJsDefault.default).show("Error fetching events");
            console.error(err);
        }
    }
    async submitHandler(e) {
        e.preventDefault();
        const form = e.target;
        const title = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="title"]').value);
        const description = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="description"]').value);
        const date = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="date"]').value);
        const location = (0, _dompurifyDefault.default).sanitize(form.querySelector('[name="location"]').value);
        const image = form.querySelector('[name="image"]').files[0];
        try {
            const token = localStorage.getItem("token");
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("date", date);
            formData.append("location", location);
            if (image) formData.append("image", image);
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/events`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });
            if (!response.ok) throw new Error(await response.json().message);
            (0, _toastJsDefault.default).show("Event created!");
            this.fetchEvents();
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Event creation failed");
            console.error(err);
        }
    }
    async deleteEvent(eventId) {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${(0, _appJsDefault.default).apiBase}/events/${eventId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error(await response.json().message);
            (0, _toastJsDefault.default).show("Event deleted");
            this.fetchEvents();
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Deletion failed");
            console.error(err);
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div class="page-content">
        <h1>Your Events</h1>
        <form @submit=${this.submitHandler}>
          <sl-input name="title" label="Event Title" required></sl-input>
          <sl-textarea
            name="description"
            label="Description"
            required
          ></sl-textarea>
          <sl-input
            name="date"
            type="datetime-local"
            label="Date and Time"
            required
          ></sl-input>
          <sl-input name="location" label="Location" required></sl-input>
          <input type="file" name="image" accept="image/*" />
          <sl-button type="submit" variant="primary">Create Event</sl-button>
        </form>
        <h2>Existing Events</h2>
        ${this.events.map((event)=>(0, _litHtml.html)`
            <div class="event-card">
              <img
                src="${(0, _dompurifyDefault.default).sanitize(event.image)}"
                alt="${event.title}"
                width="300"
              />
              <h3>${(0, _dompurifyDefault.default).sanitize(event.title)}</h3>
              <p>${(0, _dompurifyDefault.default).sanitize(event.description)}</p>
              <p>Date: ${new Date(event.date).toLocaleString()}</p>
              <p>Location: ${(0, _dompurifyDefault.default).sanitize(event.location)}</p>
              <sl-button
                @click=${()=>this.deleteEvent(event._id)}
                variant="danger"
                >Delete</sl-button
              >
            </div>
          `)}
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new HostHomeView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Toast.js":"8c3DX","dompurify":"1IHUz","../Router.js":"b5tFI"}],"66jdU":[function(require,module,exports,__globalThis) {
// views/GuestBookings.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _headerJs = require("../components/Header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
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
            (0, _toastJsDefault.default).show("Error fetching bookings");
            console.error(err);
            this.render();
        }
    }
    handleTabClick(e) {
        this.activeFilter = e.target.panel;
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
            (0, _toastJsDefault.default).show("Booking cancelled");
            this.cancellingBookingId = null;
            this.fetchBookings();
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Failed to cancel booking");
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
        ${(0, _headerJsDefault.default).render()}
        <div class="page-content">
          <h1>Your Bookings</h1>
          <sl-tab-group @sl-tab-show=${this.handleTabClick.bind(this)}>
            <sl-tab slot="nav" panel="Upcoming" active>Upcoming</sl-tab>
            <sl-tab slot="nav" panel="Past">Past</sl-tab>
          </sl-tab-group>
          ${this.loading ? (0, _litHtml.html)`<sl-spinner></sl-spinner>` : filteredBookings.length === 0 ? (0, _litHtml.html)`<p>No ${this.activeFilter.toLowerCase()} bookings found.</p>` : (0, _litHtml.html)`
                <div class="booking-grid">
                  ${filteredBookings.map((booking)=>(0, _litHtml.html)`
                      <sl-card class="booking-card">
                        <img
                          slot="image"
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
                        <div slot="footer">
                          <sl-button
                            variant="primary"
                            @click=${()=>window.open(`mailto:${booking.event.host.email}`)}
                            aria-label="Contact Host"
                          >
                            Contact Host
                          </sl-button>
                          ${booking.status === "confirmed" ? (0, _litHtml.html)`
                                <sl-button
                                  variant="danger"
                                  @click=${()=>this.cancelBooking(booking._id)}
                                  aria-label="Cancel Booking"
                                >
                                  Cancel Booking
                                </sl-button>
                              ` : ""}
                        </div>
                      </sl-card>
                    `)}
                </div>
              `}
          ${this.cancellingBookingId ? (0, _litHtml.html)`
                <sl-dialog label="Confirm Cancellation" open>
                  <p>Are you sure you want to cancel this booking?</p>
                  <sl-button
                    slot="footer"
                    variant="primary"
                    @click=${()=>this.confirmCancel(this.cancellingBookingId)}
                  >
                    Confirm
                  </sl-button>
                  <sl-button
                    slot="footer"
                    variant="default"
                    @click=${()=>{
            this.cancellingBookingId = null;
            this.render();
        }}
                  >
                    Cancel
                  </sl-button>
                </sl-dialog>
              ` : ""}
        </div>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new GuestBookingsView();

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Toast.js":"8c3DX","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../components/Header.js":"3PJ6N"}],"bmUJu":[function(require,module,exports,__globalThis) {
// views/HostBookings.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
var _dompurify = require("dompurify");
var _dompurifyDefault = parcelHelpers.interopDefault(_dompurify);
var _headerJs = require("../components/Header.js");
var _headerJsDefault = parcelHelpers.interopDefault(_headerJs);
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
            (0, _toastJsDefault.default).show("Error fetching bookings");
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
            (0, _toastJsDefault.default).show("Notes updated");
            this.fetchBookings();
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Failed to update notes");
            console.error(err);
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
            (0, _toastJsDefault.default).show("Booking removed");
            this.removingBookingId = null;
            this.fetchBookings();
        } catch (err) {
            (0, _toastJsDefault.default).show(err.message || "Failed to remove booking");
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
        ${(0, _headerJsDefault.default).render()}
        <div class="page-content">
          <h1>Your Event Bookings</h1>
          ${this.loading ? (0, _litHtml.html)`<sl-spinner></sl-spinner>` : eventGroups.length === 0 ? (0, _litHtml.html)`<p>No bookings found for your events.</p>` : eventGroups.map(({ event, bookings })=>(0, _litHtml.html)`
                  <div class="event-section">
                    <h2>${(0, _dompurifyDefault.default).sanitize(event.title)}</h2>
                    <div class="booking-grid">
                      ${bookings.map((booking)=>(0, _litHtml.html)`
                          <sl-card class="booking-card">
                            <div slot="header">
                              <img
                                src="${(0, _dompurifyDefault.default).sanitize(booking.guest.avatar.startsWith("/uploads") ? `${(0, _appJsDefault.default).apiBase}${booking.guest.avatar}` : `/images/default-avatar.png`)}"
                                alt="Avatar for ${(0, _dompurifyDefault.default).sanitize(booking.guest.firstName)}"
                                class="avatar"
                                @error=${(e)=>e.target.src = `/images/default-avatar.png`}
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
                              <sl-input
                                value="${(0, _dompurifyDefault.default).sanitize(booking.hostNotes || "")}"
                                @sl-change=${(e)=>this.updateNote(booking._id, e.target.value)}
                              ></sl-input>
                            </div>
                            <div slot="footer">
                              <sl-button
                                variant="danger"
                                @click=${()=>this.removeBooking(booking._id)}
                                aria-label="Remove ${(0, _dompurifyDefault.default).sanitize(booking.guest.firstName)}"
                              >
                                Remove
                              </sl-button>
                            </div>
                          </sl-card>
                        `)}
                    </div>
                  </div>
                `)}
          ${this.removingBookingId ? (0, _litHtml.html)`
                <sl-dialog label="Confirm Removal" open>
                  <p>Are you sure you want to remove this guest?</p>
                  <sl-button
                    slot="footer"
                    variant="primary"
                    @click=${()=>this.confirmRemove(this.removingBookingId)}
                  >
                    Confirm
                  </sl-button>
                  <sl-button
                    slot="footer"
                    variant="default"
                    @click=${()=>{
            this.removingBookingId = null;
            this.render();
        }}
                  >
                    Cancel
                  </sl-button>
                </sl-dialog>
              ` : ""}
        </div>
      </div>
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new HostBookingsView();

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Toast.js":"8c3DX","dompurify":"1IHUz","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","../components/Header.js":"3PJ6N"}],"85knE":[function(require,module,exports,__globalThis) {
// views/SignIn.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _litHtml = require("lit-html");
var _appJs = require("../App.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _authJs = require("../Auth.js");
var _authJsDefault = parcelHelpers.interopDefault(_authJs);
var _routerJs = require("../Router.js");
var _toastJs = require("../Toast.js");
var _toastJsDefault = parcelHelpers.interopDefault(_toastJs);
class SignInView {
    constructor(){
        this.loading = false;
    }
    init() {
        document.title = "Sign In - Chinwag";
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
        try {
            await (0, _authJsDefault.default).signIn({
                email,
                password
            });
        } catch (err) {
            this.loading = false;
            this.render();
        }
    }
    render() {
        const template = (0, _litHtml.html)`
      <div class="page-content page-centered" role="main">
        <h1>Sign In</h1>
        <div class="form-wrapper" aria-label="Sign In Form">
          <form @submit=${this.submitHandler.bind(this)}>
            <sl-input
              name="email"
              type="email"
              label="Email"
              required
              aria-required="true"
              autocomplete="email"
            ></sl-input>
            <sl-input
              name="password"
              type="password"
              label="Password"
              required
              aria-required="true"
              autocomplete="current-password"
            ></sl-input>
            <sl-button
              type="submit"
              variant="primary"
              ?disabled=${this.loading}
              ?loading=${this.loading}
            >
              Sign In
            </sl-button>
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
    `;
        (0, _litHtml.render)(template, (0, _appJsDefault.default).rootEl);
    }
}
exports.default = new SignInView();

},{"lit-html":"l15as","../App.js":"hh6uc","../Auth.js":"aJFb5","../Router.js":"b5tFI","../Toast.js":"8c3DX","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["iUuJv","fILKw"], "fILKw", "parcelRequire42eb", {})

//# sourceMappingURL=frontend.1fcc916e.js.map
