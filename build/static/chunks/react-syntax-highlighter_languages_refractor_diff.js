"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_diff"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/diff.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/diff.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = diff\ndiff.displayName = 'diff'\ndiff.aliases = []\nfunction diff(Prism) {\n  ;(function (Prism) {\n    Prism.languages.diff = {\n      coord: [\n        // Match all kinds of coord lines (prefixed by \"+++\", \"---\" or \"***\").\n        /^(?:\\*{3}|-{3}|\\+{3}).*$/m, // Match \"@@ ... @@\" coord lines in unified diff.\n        /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).\n        /^\\d.*$/m\n      ] // deleted, inserted, unchanged, diff\n    }\n    /**\n     * A map from the name of a block to its line prefix.\n     *\n     * @type {Object<string, string>}\n     */\n    var PREFIXES = {\n      'deleted-sign': '-',\n      'deleted-arrow': '<',\n      'inserted-sign': '+',\n      'inserted-arrow': '>',\n      unchanged: ' ',\n      diff: '!'\n    } // add a token for each prefix\n    Object.keys(PREFIXES).forEach(function (name) {\n      var prefix = PREFIXES[name]\n      var alias = []\n      if (!/^\\w+$/.test(name)) {\n        // \"deleted-sign\" -> \"deleted\"\n        alias.push(/\\w+/.exec(name)[0])\n      }\n      if (name === 'diff') {\n        alias.push('bold')\n      }\n      Prism.languages.diff[name] = {\n        pattern: RegExp(\n          '^(?:[' + prefix + '].*(?:\\r\\n?|\\n|(?![\\\\s\\\\S])))+',\n          'm'\n        ),\n        alias: alias,\n        inside: {\n          line: {\n            pattern: /(.)(?=[\\s\\S]).*(?:\\r\\n?|\\n)?/,\n            lookbehind: true\n          },\n          prefix: {\n            pattern: /[\\s\\S]/,\n            alias: /\\w+/.exec(name)[0]\n          }\n        }\n      }\n    }) // make prefixes available to Diff plugin\n    Object.defineProperty(Prism.languages.diff, 'PREFIXES', {\n      value: PREFIXES\n    })\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9kaWZmLmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZGlmZi5qcz85MDNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZcbmRpZmYuZGlzcGxheU5hbWUgPSAnZGlmZidcbmRpZmYuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBkaWZmKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24gKFByaXNtKSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzLmRpZmYgPSB7XG4gICAgICBjb29yZDogW1xuICAgICAgICAvLyBNYXRjaCBhbGwga2luZHMgb2YgY29vcmQgbGluZXMgKHByZWZpeGVkIGJ5IFwiKysrXCIsIFwiLS0tXCIgb3IgXCIqKipcIikuXG4gICAgICAgIC9eKD86XFwqezN9fC17M318XFwrezN9KS4qJC9tLCAvLyBNYXRjaCBcIkBAIC4uLiBAQFwiIGNvb3JkIGxpbmVzIGluIHVuaWZpZWQgZGlmZi5cbiAgICAgICAgL15AQC4qQEAkL20sIC8vIE1hdGNoIGNvb3JkIGxpbmVzIGluIG5vcm1hbCBkaWZmIChzdGFydHMgd2l0aCBhIG51bWJlcikuXG4gICAgICAgIC9eXFxkLiokL21cbiAgICAgIF0gLy8gZGVsZXRlZCwgaW5zZXJ0ZWQsIHVuY2hhbmdlZCwgZGlmZlxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIG1hcCBmcm9tIHRoZSBuYW1lIG9mIGEgYmxvY2sgdG8gaXRzIGxpbmUgcHJlZml4LlxuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdDxzdHJpbmcsIHN0cmluZz59XG4gICAgICovXG4gICAgdmFyIFBSRUZJWEVTID0ge1xuICAgICAgJ2RlbGV0ZWQtc2lnbic6ICctJyxcbiAgICAgICdkZWxldGVkLWFycm93JzogJzwnLFxuICAgICAgJ2luc2VydGVkLXNpZ24nOiAnKycsXG4gICAgICAnaW5zZXJ0ZWQtYXJyb3cnOiAnPicsXG4gICAgICB1bmNoYW5nZWQ6ICcgJyxcbiAgICAgIGRpZmY6ICchJ1xuICAgIH0gLy8gYWRkIGEgdG9rZW4gZm9yIGVhY2ggcHJlZml4XG4gICAgT2JqZWN0LmtleXMoUFJFRklYRVMpLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBwcmVmaXggPSBQUkVGSVhFU1tuYW1lXVxuICAgICAgdmFyIGFsaWFzID0gW11cbiAgICAgIGlmICghL15cXHcrJC8udGVzdChuYW1lKSkge1xuICAgICAgICAvLyBcImRlbGV0ZWQtc2lnblwiIC0+IFwiZGVsZXRlZFwiXG4gICAgICAgIGFsaWFzLnB1c2goL1xcdysvLmV4ZWMobmFtZSlbMF0pXG4gICAgICB9XG4gICAgICBpZiAobmFtZSA9PT0gJ2RpZmYnKSB7XG4gICAgICAgIGFsaWFzLnB1c2goJ2JvbGQnKVxuICAgICAgfVxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmRpZmZbbmFtZV0gPSB7XG4gICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAnXig/OlsnICsgcHJlZml4ICsgJ10uKig/Olxcclxcbj98XFxufCg/IVtcXFxcc1xcXFxTXSkpKSsnLFxuICAgICAgICAgICdtJ1xuICAgICAgICApLFxuICAgICAgICBhbGlhczogYWxpYXMsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oLikoPz1bXFxzXFxTXSkuKig/Olxcclxcbj98XFxuKT8vLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJlZml4OiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvW1xcc1xcU10vLFxuICAgICAgICAgICAgYWxpYXM6IC9cXHcrLy5leGVjKG5hbWUpWzBdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSkgLy8gbWFrZSBwcmVmaXhlcyBhdmFpbGFibGUgdG8gRGlmZiBwbHVnaW5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUHJpc20ubGFuZ3VhZ2VzLmRpZmYsICdQUkVGSVhFUycsIHtcbiAgICAgIHZhbHVlOiBQUkVGSVhFU1xuICAgIH0pXG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/diff.js\n"));

/***/ })

}]);