"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importScripts = importScripts;
exports.getImportScripts = getImportScripts;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _https = _interopRequireDefault(require("https"));

var _http = _interopRequireDefault(require("http"));

var _database = require("../../database");

var _createScriptMiddleware = require("./createScriptMiddleware");

var _createScreenMiddleware = require("../screens/createScreenMiddleware");

var _createDiagnosisMiddleware = require("../diagnoses/createDiagnosisMiddleware");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

function importScripts() {
  return function (req, res, next) {
    var _req$body = req.body,
        url = _req$body.url,
        scriptId = _req$body.scriptId;
    (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              ("".concat(url).match('https') ? _https["default"] : _http["default"]).get("".concat(url, "/get-import-scripts?scriptId=").concat(scriptId), function (resp) {
                var _data = '';
                resp.on('data', function (chunk) {
                  _data += chunk;
                });
                resp.on('end', function () {
                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
                    var data, error, resp;
                    return _regenerator["default"].wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            data = null;
                            error = null;
                            resp = null;
                            _context4.prev = 3;
                            data = _data ? JSON.parse(_data) : {};
                            _context4.prev = 5;
                            _context4.next = 8;
                            return Promise.all(Object.keys(data).map(function (key) {
                              return new Promise(function (resolve) {
                                (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
                                  var _data$key, script, screens, diagnoses, newScript, saveScreens, saveDiagnoses;

                                  return _regenerator["default"].wrap(function _callee3$(_context3) {
                                    while (1) {
                                      switch (_context3.prev = _context3.next) {
                                        case 0:
                                          _data$key = data[key], script = _data$key.script, screens = _data$key.screens, diagnoses = _data$key.diagnoses;
                                          delete script.data.id;
                                          _context3.next = 4;
                                          return (0, _createScriptMiddleware.createScript)(script.data);

                                        case 4:
                                          newScript = _context3.sent;

                                          if (!newScript) {
                                            _context3.next = 12;
                                            break;
                                          }

                                          saveScreens = /*#__PURE__*/function () {
                                            var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
                                              var _screens,
                                                  saved,
                                                  s,
                                                  newScreen,
                                                  _args = arguments;

                                              return _regenerator["default"].wrap(function _callee$(_context) {
                                                while (1) {
                                                  switch (_context.prev = _context.next) {
                                                    case 0:
                                                      _screens = _args.length > 0 && _args[0] !== undefined ? _args[0] : screens;
                                                      saved = _args.length > 1 && _args[1] !== undefined ? _args[1] : [];
                                                      s = _screens.shift();
                                                      _context.prev = 3;
                                                      delete s.data.id;
                                                      _context.next = 7;
                                                      return (0, _createScreenMiddleware.createScreen)(_objectSpread(_objectSpread({}, s.data), {}, {
                                                        scriptId: newScript.script_id
                                                      }));

                                                    case 7:
                                                      newScreen = _context.sent;
                                                      if (newScreen) saved.push(newScreen);
                                                      _context.next = 13;
                                                      break;

                                                    case 11:
                                                      _context.prev = 11;
                                                      _context.t0 = _context["catch"](3);

                                                    case 13:
                                                      if (!_screens.length) {
                                                        _context.next = 17;
                                                        break;
                                                      }

                                                      _context.next = 16;
                                                      return saveScreens(_screens, saved);

                                                    case 16:
                                                      saved = _context.sent;

                                                    case 17:
                                                      return _context.abrupt("return", saved);

                                                    case 18:
                                                    case "end":
                                                      return _context.stop();
                                                  }
                                                }
                                              }, _callee, null, [[3, 11]]);
                                            }));

                                            return function saveScreens() {
                                              return _ref4.apply(this, arguments);
                                            };
                                          }();

                                          _context3.next = 9;
                                          return saveScreens();

                                        case 9:
                                          saveDiagnoses = /*#__PURE__*/function () {
                                            var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
                                              var _diagnoses,
                                                  saved,
                                                  d,
                                                  newScreen,
                                                  _args2 = arguments;

                                              return _regenerator["default"].wrap(function _callee2$(_context2) {
                                                while (1) {
                                                  switch (_context2.prev = _context2.next) {
                                                    case 0:
                                                      _diagnoses = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : diagnoses;
                                                      saved = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];
                                                      d = _diagnoses.shift();
                                                      _context2.prev = 3;
                                                      delete d.data.id;
                                                      _context2.next = 7;
                                                      return (0, _createDiagnosisMiddleware.createDiagnosis)(_objectSpread(_objectSpread({}, d.data), {}, {
                                                        scriptId: newScript.script_id
                                                      }));

                                                    case 7:
                                                      newScreen = _context2.sent;
                                                      if (newScreen) saved.push(newScreen);
                                                      _context2.next = 13;
                                                      break;

                                                    case 11:
                                                      _context2.prev = 11;
                                                      _context2.t0 = _context2["catch"](3);

                                                    case 13:
                                                      if (!_diagnoses.length) {
                                                        _context2.next = 17;
                                                        break;
                                                      }

                                                      _context2.next = 16;
                                                      return saveDiagnoses(_diagnoses, saved);

                                                    case 16:
                                                      saved = _context2.sent;

                                                    case 17:
                                                      return _context2.abrupt("return", saved);

                                                    case 18:
                                                    case "end":
                                                      return _context2.stop();
                                                  }
                                                }
                                              }, _callee2, null, [[3, 11]]);
                                            }));

                                            return function saveDiagnoses() {
                                              return _ref5.apply(this, arguments);
                                            };
                                          }();

                                          _context3.next = 12;
                                          return saveDiagnoses();

                                        case 12:
                                          resolve(newScript);

                                        case 13:
                                        case "end":
                                          return _context3.stop();
                                      }
                                    }
                                  }, _callee3);
                                }))();
                              });
                            }));

                          case 8:
                            resp = _context4.sent;
                            _context4.next = 14;
                            break;

                          case 11:
                            _context4.prev = 11;
                            _context4.t0 = _context4["catch"](5);
                            error = _context4.t0.message;

                          case 14:
                            _context4.next = 19;
                            break;

                          case 16:
                            _context4.prev = 16;
                            _context4.t1 = _context4["catch"](3);
                            error = 'Failed to import, make sure the URL is correct';

                          case 19:
                            res.locals.setResponse(error, {
                              data: resp
                            });
                            next();

                          case 21:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, null, [[3, 16], [5, 11]]);
                  }))();
                });
              }).on('error', function (e) {
                res.locals.setResponse(e.message);
                next();
              });

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  };
}

function getImportScripts() {
  return function (req, res, next) {
    var scriptId = req.query.scriptId;
    (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      var where, scripts, data;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              where = {
                deletedAt: null
              };
              if (scriptId) where.script_id = scriptId;
              _context7.next = 4;
              return _database.Script.findAll({
                where: where
              });

            case 4:
              scripts = _context7.sent;
              data = {};
              _context7.next = 8;
              return Promise.all(scripts.map(function (script) {
                return new Promise(function (resolve) {
                  (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
                    var screens, diagnoses;
                    return _regenerator["default"].wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.next = 2;
                            return _database.Screen.findAll({
                              where: {
                                deletedAt: null,
                                script_id: script.script_id
                              },
                              order: [['position', 'ASC']]
                            });

                          case 2:
                            screens = _context6.sent;
                            _context6.next = 5;
                            return _database.Diagnosis.findAll({
                              where: {
                                deletedAt: null,
                                script_id: script.script_id
                              },
                              order: [['position', 'ASC']]
                            });

                          case 5:
                            diagnoses = _context6.sent;
                            data[script.script_id] = {};
                            data[script.script_id].script = script;
                            data[script.script_id].screens = screens;
                            data[script.script_id].diagnoses = diagnoses;
                            resolve();

                          case 11:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }))();
                });
              }));

            case 8:
              res.locals.setResponse(null, data);
              next();

            case 10:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  };
}

;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(importScripts, "importScripts", "/home/farai/WorkBench/neotree-editor/server/routes/scripts/importScripts.js");
  reactHotLoader.register(getImportScripts, "getImportScripts", "/home/farai/WorkBench/neotree-editor/server/routes/scripts/importScripts.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();