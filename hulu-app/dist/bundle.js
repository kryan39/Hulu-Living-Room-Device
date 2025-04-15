/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    background: linear-gradient(160deg, #000000 20%, #188d52 100%);
    color: #fff;
    font-family: sans-serif;
    overflow: hidden;
    padding-bottom: 100px;
    overflow: hidden;
    background-attachment: fixed; 
  }
  
  .hub-container {
    margin-bottom: 100px;
    padding: 50px;
    gap: 20px;
    display: flex;
    flex-direction: column;
    transition: transform 0.4s ease;
    will-change: transform;
  }

  .hulu-header {
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1ce783;
    font-weight: bold;
    font-size: 5rem;
  }

  .collection-title {
    font-size: 1.3rem;
    margin-bottom: 25px;

  }

  .tiles-wrapper {
    padding-top: 10px;
    padding-bottom: 13px;
    min-height: 200px;
    display: flex;
    gap: 40px;
    flex-wrap: nowrap;
    transition: transform 0.4s ease;
    will-change: transform;
  }
  
  .tile {
    width: 300px;
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
    outline: none;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .tile:focus {
    transform: scale(1.2);
    box-shadow: 0 0 0 4px #1ce783;
    z-index: 1;
    box-shadow: 0 0 10px 4px rgba(28, 231, 131, 0.6);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  
  .tile:focus .tile-title {
    color: white;
  }
  
  .tile-image {
    border-radius: 6px;
    border-width: 1px;
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  
  .tile-title {
    padding: 6px 6px;
    position: absolute;
    bottom: 0;
    left: 0;
    color: rgb(151, 151, 151);
    font-size: 1rem;
    pointer-events: none;
    transition: opacity 0.2s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  .tile-logo-fallback {
    border-radius: 6px;
    border-width: 1px;
    width: 100%;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #1ce783;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 8px;
    background-color: black;
   
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;    
    align-items: center;
    justify-content: center;
    z-index: 999;
  }

  .modal {
    position: relative;
    background-color: rgba(0, 0, 0, 0.85);
    background-blend-mode: darken;
    backdrop-filter: blur(6px);
    color: #fff;
    padding: 24px;
    border-radius: 10px;
    width: 600px;
    max-width: 90vw;
    max-height: 80vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 300px;
    opacity: 0;
    transform: scale(0.95);
    transition: opacity 0.25s ease, transform 0.25s ease;
    animation: pulseGlow 1.5s infinite ease-in-out;
  }
  
  .modal::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent 60%);
    z-index: 1;
    pointer-events: none;
  }
  
  .modal * {
    z-index: 2;
    position: relative;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.85);
  }

  .modal p {
    margin: 0;
    font-size: 1rem;
    color: #ccc;
    line-height: 1.5;
  }

  .modal-metadata {
    position: absolute;
    color: #ccc;
    font-size: 0.75rem;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
  }
  
  .modal-close {
    margin-top: 16px;
    padding: 8px 16px;
    background: linear-gradient(160deg, #000000 20%, #188d52 100%);
    border: none;
    border-radius: 6px;
    font-weight: bold;
    color: #ccc;
    align-self: flex-end;
    z-index: 2;
  }

  .modal-open {
    opacity: 1;
    transform: scale(1.5);
  }
  
  .modal-no-image {
    background-color: #222;
  }

  @keyframes pulseGlow {
    0% { box-shadow: 0 0 0 0 rgba(28, 231, 131, 0.3); }
    70% { box-shadow: 0 0 0 15px rgba(28, 231, 131, 0); }
    100% { box-shadow: 0 0 0 0 rgba(28, 231, 131, 0); }
  }

  `, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,8DAA8D;IAC9D,WAAW;IACX,uBAAuB;IACvB,gBAAgB;IAChB,qBAAqB;IACrB,gBAAgB;IAChB,4BAA4B;EAC9B;;EAEA;IACE,oBAAoB;IACpB,aAAa;IACb,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,iBAAiB;IACjB,mBAAmB;;EAErB;;EAEA;IACE,iBAAiB;IACjB,oBAAoB;IACpB,iBAAiB;IACjB,aAAa;IACb,SAAS;IACT,iBAAiB;IACjB,+BAA+B;IAC/B,sBAAsB;EACxB;;EAEA;IACE,YAAY;IACZ,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,+BAA+B;IAC/B,aAAa;IACb,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,qBAAqB;IACrB,6BAA6B;IAC7B,UAAU;IACV,gDAAgD;IAChD,uDAAuD;EACzD;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,yBAAyB;IACzB,eAAe;IACf,oBAAoB;IACpB,6BAA6B;IAC7B,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;EACzB;;;EAGA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,uBAAuB;;EAEzB;;EAEA;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;EACd;;EAEA;IACE,kBAAkB;IAClB,qCAAqC;IACrC,6BAA6B;IAC7B,0BAA0B;IAC1B,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,iBAAiB;IACjB,UAAU;IACV,sBAAsB;IACtB,oDAAoD;IACpD,8CAA8C;EAChD;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,yEAAyE;IACzE,UAAU;IACV,oBAAoB;EACtB;;EAEA;IACE,UAAU;IACV,kBAAkB;IAClB,0CAA0C;EAC5C;;EAEA;IACE,SAAS;IACT,eAAe;IACf,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,yCAAyC;EAC3C;;EAEA;IACE,gBAAgB;IAChB,iBAAiB;IACjB,8DAA8D;IAC9D,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,WAAW;IACX,oBAAoB;IACpB,UAAU;EACZ;;EAEA;IACE,UAAU;IACV,qBAAqB;EACvB;;EAEA;IACE,sBAAsB;EACxB;;EAEA;IACE,KAAK,2CAA2C,EAAE;IAClD,MAAM,4CAA4C,EAAE;IACpD,OAAO,yCAAyC,EAAE;EACpD","sourcesContent":["body {\n    margin: 0;\n    background: linear-gradient(160deg, #000000 20%, #188d52 100%);\n    color: #fff;\n    font-family: sans-serif;\n    overflow: hidden;\n    padding-bottom: 100px;\n    overflow: hidden;\n    background-attachment: fixed; \n  }\n  \n  .hub-container {\n    margin-bottom: 100px;\n    padding: 50px;\n    gap: 20px;\n    display: flex;\n    flex-direction: column;\n    transition: transform 0.4s ease;\n    will-change: transform;\n  }\n\n  .hulu-header {\n    width: 100%;\n    height: 170px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #1ce783;\n    font-weight: bold;\n    font-size: 5rem;\n  }\n\n  .collection-title {\n    font-size: 1.3rem;\n    margin-bottom: 25px;\n\n  }\n\n  .tiles-wrapper {\n    padding-top: 10px;\n    padding-bottom: 13px;\n    min-height: 200px;\n    display: flex;\n    gap: 40px;\n    flex-wrap: nowrap;\n    transition: transform 0.4s ease;\n    will-change: transform;\n  }\n  \n  .tile {\n    width: 300px;\n    flex-shrink: 0;\n    border-radius: 8px;\n    overflow: hidden;\n    outline: none;\n    transition: transform 0.3s ease;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n  }\n  \n  .tile:focus {\n    transform: scale(1.2);\n    box-shadow: 0 0 0 4px #1ce783;\n    z-index: 1;\n    box-shadow: 0 0 10px 4px rgba(28, 231, 131, 0.6);\n    transition: transform 0.25s ease, box-shadow 0.25s ease;\n  }\n  \n  .tile:focus .tile-title {\n    color: white;\n  }\n  \n  .tile-image {\n    border-radius: 6px;\n    border-width: 1px;\n    width: 100%;\n    height: auto;\n    display: block;\n    object-fit: cover;\n  }\n  \n  .tile-title {\n    padding: 6px 6px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    color: rgb(151, 151, 151);\n    font-size: 1rem;\n    pointer-events: none;\n    transition: opacity 0.2s ease;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n\n  .tile-logo-fallback {\n    border-radius: 6px;\n    border-width: 1px;\n    width: 100%;\n    height: 170px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #1ce783;\n    font-weight: bold;\n    font-size: 1.2rem;\n    border-radius: 8px;\n    background-color: black;\n   \n  }\n  \n  .modal-overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, 0.75);\n    display: flex;    \n    align-items: center;\n    justify-content: center;\n    z-index: 999;\n  }\n\n  .modal {\n    position: relative;\n    background-color: rgba(0, 0, 0, 0.85);\n    background-blend-mode: darken;\n    backdrop-filter: blur(6px);\n    color: #fff;\n    padding: 24px;\n    border-radius: 10px;\n    width: 600px;\n    max-width: 90vw;\n    max-height: 80vh;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    min-height: 300px;\n    opacity: 0;\n    transform: scale(0.95);\n    transition: opacity 0.25s ease, transform 0.25s ease;\n    animation: pulseGlow 1.5s infinite ease-in-out;\n  }\n  \n  .modal::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent 60%);\n    z-index: 1;\n    pointer-events: none;\n  }\n  \n  .modal * {\n    z-index: 2;\n    position: relative;\n    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.85);\n  }\n\n  .modal p {\n    margin: 0;\n    font-size: 1rem;\n    color: #ccc;\n    line-height: 1.5;\n  }\n\n  .modal-metadata {\n    position: absolute;\n    color: #ccc;\n    font-size: 0.75rem;\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);\n  }\n  \n  .modal-close {\n    margin-top: 16px;\n    padding: 8px 16px;\n    background: linear-gradient(160deg, #000000 20%, #188d52 100%);\n    border: none;\n    border-radius: 6px;\n    font-weight: bold;\n    color: #ccc;\n    align-self: flex-end;\n    z-index: 2;\n  }\n\n  .modal-open {\n    opacity: 1;\n    transform: scale(1.5);\n  }\n  \n  .modal-no-image {\n    background-color: #222;\n  }\n\n  @keyframes pulseGlow {\n    0% { box-shadow: 0 0 0 0 rgba(28, 231, 131, 0.3); }\n    70% { box-shadow: 0 0 0 15px rgba(28, 231, 131, 0); }\n    100% { box-shadow: 0 0 0 0 rgba(28, 231, 131, 0); }\n  }\n\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/fetchData.ts":
/*!******************************!*\
  !*** ./src/api/fetchData.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fetchHubData = fetchHubData;
function fetchHubData() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://d1q0vy0v52gyjr.cloudfront.net/hub.json");
        if (!response.ok)
            throw new Error(`Failed to fetch hub data: ${response.statusText}`);
        const hubData = yield response.json();
        const hydrationPromises = hubData.components.map((collection) => __awaiter(this, void 0, void 0, function* () {
            if (collection.items.length === 0 && collection.href) {
                try {
                    const response = yield fetch(collection.href);
                    if (!response.ok)
                        throw new Error("Failed to hydrate collection " + collection.name);
                    const hydratedCollection = yield response.json();
                    collection.items = hydratedCollection.items;
                }
                catch (error) {
                    throw new Error(`Failed to hydrate collection ${collection.name}: ${error}`);
                }
            }
        }));
        yield Promise.all(hydrationPromises);
        return hubData;
    });
}


/***/ }),

/***/ "./src/components/hub.ts":
/*!*******************************!*\
  !*** ./src/components/hub.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hubComponent = hubComponent;
const row_1 = __webpack_require__(/*! ./row */ "./src/components/row.ts");
function hubComponent(hubData) {
    const container = document.createElement("div");
    container.className = "hub-container";
    const huluHeader = document.createElement("div");
    huluHeader.className = "hulu-header";
    huluHeader.textContent = "Hulu";
    container.appendChild(huluHeader);
    hubData.components.forEach((collection) => {
        const row = (0, row_1.rowComponent)(collection);
        container.appendChild(row);
    });
    return container;
}


/***/ }),

/***/ "./src/components/modal.ts":
/*!*********************************!*\
  !*** ./src/components/modal.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createModal = createModal;
exports.closeModal = closeModal;
const state_1 = __webpack_require__(/*! ../store/state */ "./src/store/state.ts");
function createModal(item) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("model", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", item.visuals.headline || "Modal");
    const baseImageUrl = (_c = (_b = (_a = item.visuals.artwork) === null || _a === void 0 ? void 0 : _a.horizontal_tile) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.path;
    if (baseImageUrl) {
        const separator = baseImageUrl.includes("?") ? "&" : "?";
        const imageUrl = `${baseImageUrl}${separator}size=1280x720&format=jpeg`;
        const backgroundImage = new Image();
        backgroundImage.src = imageUrl;
        backgroundImage.onload = () => {
            modal.style.backgroundImage = `url(${imageUrl})`;
            modal.style.backgroundSize = "cover";
            modal.style.backgroundPosition = "center";
            modal.style.backgroundRepeat = "no-repeat";
        };
        backgroundImage.onerror = () => {
            modal.classList.add("modal-no-image");
        };
    }
    else {
        modal.classList.add("modal-no-image");
    }
    const title = document.createElement("h3");
    title.textContent = item.visuals.headline || "Untitled";
    modal.appendChild(title);
    const metadata = document.createElement("div");
    metadata.className = "modal-metadata";
    const rating = (_e = (_d = item.entity_metadata) === null || _d === void 0 ? void 0 : _d.rating) === null || _e === void 0 ? void 0 : _e.code;
    const year = (_g = (_f = item.entity_metadata) === null || _f === void 0 ? void 0 : _f.premiere_date) === null || _g === void 0 ? void 0 : _g.split("-")[0];
    const genres = (_k = (_j = (_h = item.entity_metadata) === null || _h === void 0 ? void 0 : _h.genre_names) === null || _j === void 0 ? void 0 : _j.slice(0, 2)) === null || _k === void 0 ? void 0 : _k.join(" • ");
    metadata.textContent = [rating, genres, year].filter(Boolean).join(" • ");
    modal.appendChild(metadata);
    const subtitle = document.createElement("p");
    subtitle.textContent = item.visuals.subtitle || "";
    modal.appendChild(subtitle);
    const description = document.createElement("p");
    description.textContent = item.visuals.body || "";
    modal.appendChild(description);
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.className = "modal-close";
    closeButton.setAttribute("tabindex", "0");
    closeButton.setAttribute("aria-label", "Close modal");
    closeButton.onclick = () => closeModal();
    modal.appendChild(closeButton);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    state_1.appState.modal = overlay;
    requestAnimationFrame(() => {
        modal.classList.add("modal-open");
        closeButton.focus();
    });
    return overlay;
}
function closeModal() {
    if (state_1.appState.modal) {
        state_1.appState.modal.remove();
        state_1.appState.modal = null;
    }
}


/***/ }),

/***/ "./src/components/row.ts":
/*!*******************************!*\
  !*** ./src/components/row.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.rowComponent = rowComponent;
const tile_1 = __webpack_require__(/*! ./tile */ "./src/components/tile.ts");
const state_1 = __webpack_require__(/*! ../store/state */ "./src/store/state.ts");
const VISIBLE_TILE_ROW = 6;
const TILE_BUFFER = 2;
const TILE_WINDOW = VISIBLE_TILE_ROW + TILE_BUFFER * 2;
function rowComponent(collection) {
    var _a, _b;
    const row = document.createElement("section");
    row.className = "collection-row";
    row.setAttribute("data-row-id", collection.id);
    const title = document.createElement("h2");
    title.className = "collection-title";
    title.textContent = collection.name;
    row.appendChild(title);
    const tilesWrapper = document.createElement("div");
    tilesWrapper.className = "tiles-wrapper";
    row.appendChild(tilesWrapper);
    const { focus } = state_1.appState;
    const rowIndex = (_b = (_a = state_1.appState.hubData) === null || _a === void 0 ? void 0 : _a.components.findIndex(c => c.id === collection.id)) !== null && _b !== void 0 ? _b : 0;
    const focusIndex = rowIndex === focus.row ? focus.tile : -1;
    collection.items.forEach((item, index) => {
        const tile = (0, tile_1.tileComponent)(item, index, focusIndex);
        tilesWrapper.appendChild(tile);
    });
    return row;
}


/***/ }),

/***/ "./src/components/tile.ts":
/*!********************************!*\
  !*** ./src/components/tile.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tileComponent = tileComponent;
function tileComponent(item, index, focusIndex) {
    var _a, _b, _c;
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.setAttribute("tabindex", index === focusIndex ? "0" : "-1");
    tile.setAttribute("role", "button");
    tile.setAttribute("data-tile-id", item.id);
    const baseImageUrl = (_c = (_b = (_a = item.visuals.artwork) === null || _a === void 0 ? void 0 : _a.horizontal_tile) === null || _b === void 0 ? void 0 : _b.image) === null || _c === void 0 ? void 0 : _c.path;
    const imageUrl = baseImageUrl ? `${baseImageUrl}${baseImageUrl.includes("?") ? "&" : "?"}size=320x180&format=jpeg` : null;
    const createFallback = () => {
        const fallback = document.createElement("div");
        fallback.className = "tile-logo-fallback";
        fallback.textContent = "hulu";
        return fallback;
    };
    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = item.visuals.headline || "Preview";
        img.className = "tile-image";
        img.onerror = () => {
            img.remove();
            tile.appendChild(createFallback());
        };
        tile.appendChild(img);
    }
    else {
        tile.appendChild(createFallback());
    }
    const title = document.createElement("div");
    title.className = "tile-title";
    title.textContent = item.visuals.headline;
    tile.appendChild(title);
    return tile;
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initApp = initApp;
const state_1 = __webpack_require__(/*! ./store/state */ "./src/store/state.ts");
const fetchData_1 = __webpack_require__(/*! ./api/fetchData */ "./src/api/fetchData.ts");
const keyboard_1 = __webpack_require__(/*! ./utils/keyboard */ "./src/utils/keyboard.ts");
const hub_1 = __webpack_require__(/*! ./components/hub */ "./src/components/hub.ts");
function initApp() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        try {
            const hubData = yield (0, fetchData_1.fetchHubData)();
            state_1.appState.hubData = hubData;
            if (((_c = (_b = (_a = hubData.components) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                state_1.appState.focus.row = 0;
                state_1.appState.focus.tile = 0;
            }
            const appContainer = document.getElementById("app");
            if (!appContainer) {
                return;
            }
            const hubElement = (0, hub_1.hubComponent)(hubData);
            appContainer.innerHTML = "";
            appContainer.appendChild(hubElement);
            (0, keyboard_1.setupKeyboardNavigation)();
            requestAnimationFrame(() => {
                const firstTile = document.querySelector(".tile[tabindex='0']");
                firstTile === null || firstTile === void 0 ? void 0 : firstTile.focus();
            });
        }
        catch (error) {
            throw new Error(`Failed to initialize app: ${error}`);
        }
    });
}
initApp();


/***/ }),

/***/ "./src/store/state.ts":
/*!****************************!*\
  !*** ./src/store/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.appState = void 0;
exports.appState = {
    hubData: null,
    focus: { row: 0, tile: 0 },
    modal: null,
    loadedCollections: new Map()
};


/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/utils/keyboard.ts":
/*!*******************************!*\
  !*** ./src/utils/keyboard.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setupKeyboardNavigation = setupKeyboardNavigation;
const state_1 = __webpack_require__(/*! ../store/state */ "./src/store/state.ts");
const tileWindowManager_1 = __webpack_require__(/*! ./tileWindowManager */ "./src/utils/tileWindowManager.ts");
const modal_1 = __webpack_require__(/*! ../components/modal */ "./src/components/modal.ts");
const windowController_1 = __webpack_require__(/*! ./windowController */ "./src/utils/windowController.ts");
function setupKeyboardNavigation() {
    document.addEventListener("keydown", handleNavigation);
}
function handleNavigation(e) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const { focus: navFocus, hubData, modal } = state_1.appState;
        if (modal) {
            const trapKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"];
            const exitKeys = ["Escape", "Backspace", "Enter"];
            if (trapKeys.includes(e.key)) {
                e.preventDefault();
            }
            if (exitKeys.includes(e.key)) {
                if (e.key === "Enter" && ((_a = document.activeElement) === null || _a === void 0 ? void 0 : _a.classList.contains("modal-close"))) {
                    (0, modal_1.closeModal)();
                }
                else if (e.key === "Escape" || e.key === "Backspace") {
                    (0, modal_1.closeModal)();
                }
            }
            return;
        }
        if (!hubData)
            return;
        const collection = hubData.components[navFocus.row];
        if (!collection || !collection.items.length)
            return;
        switch (e.key) {
            case "ArrowRight":
                if (navFocus.tile < collection.items.length - 1) {
                    navFocus.tile += 1;
                }
                else if (navFocus.row < hubData.components.length - 1) {
                    navFocus.row += 1;
                    navFocus.tile = 0;
                }
                break;
            case "ArrowLeft":
                if (navFocus.tile > 0) {
                    navFocus.tile -= 1;
                }
                else if (navFocus.row > 0) {
                    navFocus.row -= 1;
                    const previousCollection = hubData.components[navFocus.row];
                    navFocus.tile = previousCollection.items.length - 1;
                }
                break;
            case "ArrowDown":
                navFocus.row = Math.min(navFocus.row + 1, hubData.components.length - 1);
                navFocus.tile = 0;
                break;
            case "ArrowUp":
                navFocus.row = Math.max(navFocus.row - 1, 0);
                navFocus.tile = 0;
                break;
            case "Enter":
                const focusedTile = collection.items[navFocus.tile];
                if (focusedTile) {
                    (0, modal_1.createModal)(focusedTile);
                    return;
                }
                break;
            default:
                return;
        }
        const currentCollection = hubData.components[navFocus.row];
        const currentCollectionId = currentCollection.id;
        if ((0, windowController_1.shouldUpdateTileWindow)(currentCollectionId, navFocus.tile, currentCollection.items.length)) {
            (0, tileWindowManager_1.updateVisibleTiles)(currentCollectionId, navFocus.tile);
        }
        else {
            const rowElement = document.querySelector(`[data-row-id="${currentCollectionId}"]`);
            const tiles = (rowElement === null || rowElement === void 0 ? void 0 : rowElement.querySelectorAll(".tile")) || [];
            tiles.forEach((tile, i) => {
                tile.setAttribute("tabindex", i === navFocus.tile ? "0" : "-1");
            });
            requestAnimationFrame(() => {
                const activeTile = tiles[navFocus.tile];
                activeTile === null || activeTile === void 0 ? void 0 : activeTile.focus();
            });
        }
        const currentRow = document.querySelector(`[data-row-id="${collection.id}"]`);
        const tilesWrapper = currentRow === null || currentRow === void 0 ? void 0 : currentRow.querySelector(".tiles-wrapper");
        if (tilesWrapper) {
            const TILE_WIDTH = 300; // Adjust this value based on your tile width
            const TILE_GAP = 40; // Adjust this value based on your tile gap
            const tileWithGap = TILE_WIDTH + TILE_GAP;
            const visibleTilesCount = Math.floor(tilesWrapper.offsetWidth / tileWithGap);
            const maxOffset = Math.max(0, collection.items.length - visibleTilesCount);
            const offset = Math.min(navFocus.tile, maxOffset) * tileWithGap;
            tilesWrapper.style.transform = `translateX(-${offset}px)`;
        }
    });
}


/***/ }),

/***/ "./src/utils/tileWindowManager.ts":
/*!****************************************!*\
  !*** ./src/utils/tileWindowManager.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateVisibleTiles = updateVisibleTiles;
const state_1 = __webpack_require__(/*! ../store/state */ "./src/store/state.ts");
const tile_1 = __webpack_require__(/*! ../components/tile */ "./src/components/tile.ts");
function updateVisibleTiles(collectionId, focusIndex) {
    const row = document.querySelector(`[data-row-id='${collectionId}']`);
    if (!row) {
        return;
    }
    const tilesWrapper = row.querySelector(".tiles-wrapper");
    if (!tilesWrapper) {
        return;
    }
    tilesWrapper.innerHTML = "";
    const hubData = state_1.appState.hubData;
    if (!hubData) {
        return;
    }
    const collection = hubData.components.find((c) => c.id === collectionId);
    if (!collection || !collection.items.length) {
        return;
    }
    const visibleItems = collection.items;
    visibleItems.forEach((item, i) => {
        const tile = (0, tile_1.tileComponent)(item, i, focusIndex);
        tilesWrapper.appendChild(tile);
    });
    const newFocusTile = tilesWrapper.querySelector(`[tabindex='0']`);
    newFocusTile === null || newFocusTile === void 0 ? void 0 : newFocusTile.focus();
}


/***/ }),

/***/ "./src/utils/windowController.ts":
/*!***************************************!*\
  !*** ./src/utils/windowController.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shouldUpdateTileWindow = shouldUpdateTileWindow;
exports.getCurrentWindow = getCurrentWindow;
const TILE_BUFFER = 2;
const TILE_WINDOW = 6 + TILE_BUFFER * 2;
const currentWindow = new Map();
function shouldUpdateTileWindow(collectionId, focusIndex, totalTiles) {
    const window = currentWindow.get(collectionId);
    if (!window) {
        const newRange = calculateWindow(focusIndex, totalTiles);
        currentWindow.set(collectionId, newRange);
        return true;
    }
    if (focusIndex < window.start || focusIndex >= window.end) {
        const newRange = calculateWindow(focusIndex, totalTiles);
        currentWindow.set(collectionId, newRange);
        return true;
    }
    return false;
}
function calculateWindow(focusIndex, total) {
    const start = Math.max(0, focusIndex - TILE_BUFFER);
    const end = Math.min(total, start + TILE_WINDOW);
    return { start, end };
}
function getCurrentWindow(collectionId) {
    return currentWindow.get(collectionId);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
const main_1 = __webpack_require__(/*! ./main */ "./src/main.ts");
document.addEventListener("DOMContentLoaded", () => {
    (0, main_1.initApp)();
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map