"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_flow"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/flow.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/flow.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = flow\nflow.displayName = 'flow'\nflow.aliases = []\nfunction flow(Prism) {\n  ;(function (Prism) {\n    Prism.languages.flow = Prism.languages.extend('javascript', {})\n    Prism.languages.insertBefore('flow', 'keyword', {\n      type: [\n        {\n          pattern:\n            /\\b(?:[Bb]oolean|Function|[Nn]umber|[Ss]tring|any|mixed|null|void)\\b/,\n          alias: 'tag'\n        }\n      ]\n    })\n    Prism.languages.flow['function-variable'].pattern =\n      /(?!\\s)[_$a-z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*(?=\\s*=\\s*(?:function\\b|(?:\\([^()]*\\)(?:\\s*:\\s*\\w+)?|(?!\\s)[_$a-z\\xA0-\\uFFFF](?:(?!\\s)[$\\w\\xA0-\\uFFFF])*)\\s*=>))/i\n    delete Prism.languages.flow['parameter']\n    Prism.languages.insertBefore('flow', 'operator', {\n      'flow-punctuation': {\n        pattern: /\\{\\||\\|\\}/,\n        alias: 'punctuation'\n      }\n    })\n    if (!Array.isArray(Prism.languages.flow.keyword)) {\n      Prism.languages.flow.keyword = [Prism.languages.flow.keyword]\n    }\n    Prism.languages.flow.keyword.unshift(\n      {\n        pattern: /(^|[^$]\\b)(?:Class|declare|opaque|type)\\b(?!\\$)/,\n        lookbehind: true\n      },\n      {\n        pattern:\n          /(^|[^$]\\B)\\$(?:Diff|Enum|Exact|Keys|ObjMap|PropertyType|Record|Shape|Subtype|Supertype|await)\\b(?!\\$)/,\n        lookbehind: true\n      }\n    )\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9mbG93LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvZmxvdy5qcz9hZThjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsb3dcbmZsb3cuZGlzcGxheU5hbWUgPSAnZmxvdydcbmZsb3cuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBmbG93KFByaXNtKSB7XG4gIDsoZnVuY3Rpb24gKFByaXNtKSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzLmZsb3cgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdqYXZhc2NyaXB0Jywge30pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZmxvdycsICdrZXl3b3JkJywge1xuICAgICAgdHlwZTogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAgIC9cXGIoPzpbQmJdb29sZWFufEZ1bmN0aW9ufFtObl11bWJlcnxbU3NddHJpbmd8YW55fG1peGVkfG51bGx8dm9pZClcXGIvLFxuICAgICAgICAgIGFsaWFzOiAndGFnJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuZmxvd1snZnVuY3Rpb24tdmFyaWFibGUnXS5wYXR0ZXJuID1cbiAgICAgIC8oPyFcXHMpW18kYS16XFx4QTAtXFx1RkZGRl0oPzooPyFcXHMpWyRcXHdcXHhBMC1cXHVGRkZGXSkqKD89XFxzKj1cXHMqKD86ZnVuY3Rpb25cXGJ8KD86XFwoW14oKV0qXFwpKD86XFxzKjpcXHMqXFx3Kyk/fCg/IVxccylbXyRhLXpcXHhBMC1cXHVGRkZGXSg/Oig/IVxccylbJFxcd1xceEEwLVxcdUZGRkZdKSopXFxzKj0+KSkvaVxuICAgIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuZmxvd1sncGFyYW1ldGVyJ11cbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdmbG93JywgJ29wZXJhdG9yJywge1xuICAgICAgJ2Zsb3ctcHVuY3R1YXRpb24nOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXHtcXHx8XFx8XFx9LyxcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICghQXJyYXkuaXNBcnJheShQcmlzbS5sYW5ndWFnZXMuZmxvdy5rZXl3b3JkKSkge1xuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmZsb3cua2V5d29yZCA9IFtQcmlzbS5sYW5ndWFnZXMuZmxvdy5rZXl3b3JkXVxuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuZmxvdy5rZXl3b3JkLnVuc2hpZnQoXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXiRdXFxiKSg/OkNsYXNzfGRlY2xhcmV8b3BhcXVlfHR5cGUpXFxiKD8hXFwkKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46XG4gICAgICAgICAgLyhefFteJF1cXEIpXFwkKD86RGlmZnxFbnVtfEV4YWN0fEtleXN8T2JqTWFwfFByb3BlcnR5VHlwZXxSZWNvcmR8U2hhcGV8U3VidHlwZXxTdXBlcnR5cGV8YXdhaXQpXFxiKD8hXFwkKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICApXG4gIH0pKFByaXNtKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/flow.js\n"));

/***/ })

}]);