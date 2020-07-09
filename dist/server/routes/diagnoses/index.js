"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var router = _express["default"].Router();

module.exports = function (app) {
  var responseMiddleware = app.responseMiddleware;
  router.post('/copy-diagnoses', require('./copyDiagnosesMiddleware')(app), responseMiddleware);
  router.get('/get-diagnoses', require('./getDiagnosesMiddleware')(app), responseMiddleware);
  router.get('/get-diagnosis', require('./getDiagnosisMiddleware')(app), responseMiddleware);
  router.get('/get-full-diagnosis', require('./getFullDiagnosisMiddleware')(app), responseMiddleware);
  router.post('/create-diagnosis', require('./createDiagnosisMiddleware')(app), responseMiddleware);
  router.post('/update-diagnosis', require('./updateDiagnosisMiddleware')(app), responseMiddleware);
  router.post('/update-diagnoses', require('./updateDiagnosesMiddleware')["default"](app), responseMiddleware);
  router.post('/delete-diagnosis', require('./deleteDiagnosisMiddleware')(app), responseMiddleware);
  router.post('/duplicate-diagnosis', require('./duplicateDiagnosisMiddleware')["default"](app), responseMiddleware);
  return router;
};

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(router, "router", "/home/farai/WorkBench/neotree-editor/server/routes/diagnoses/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();