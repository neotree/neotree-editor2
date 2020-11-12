"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.copyScript = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _firebase = _interopRequireDefault(require("../../firebase"));

var _models = require("../../database/models");

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var copyScript = function copyScript(_ref) {
  var id = _ref.scriptId;
  return new Promise(function (resolve, reject) {
    if (!id) return reject(new Error('Required script "id" is not provided.'));
    (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var scriptId, snap, script, scripts, screens, diagnosis, screenIds, snaps, diagnosesIds, _snaps, _screens, _diagnoses, savedScreens, savedDiagnoses;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              scriptId = null;
              _context.prev = 1;
              _context.next = 4;
              return _firebase["default"].database().ref('scripts').push();

            case 4:
              snap = _context.sent;
              scriptId = snap.key;
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", reject(_context.t0));

            case 11:
              script = null;
              _context.prev = 12;
              _context.next = 15;
              return new Promise(function (resolve) {
                _firebase["default"].database().ref("scripts/".concat(id)).on('value', function (snap) {
                  return resolve(snap.val());
                });
              });

            case 15:
              script = _context.sent;
              _context.next = 20;
              break;

            case 18:
              _context.prev = 18;
              _context.t1 = _context["catch"](12);

            case 20:
              if (script) {
                _context.next = 22;
                break;
              }

              return _context.abrupt("return", reject(new Error("Script with id \"".concat(id, "\" not found"))));

            case 22:
              scripts = {};
              _context.prev = 23;
              _context.next = 26;
              return new Promise(function (resolve) {
                _firebase["default"].database().ref('scripts').on('value', function (snap) {
                  return resolve(snap.val());
                });
              });

            case 26:
              scripts = _context.sent;
              _context.next = 31;
              break;

            case 29:
              _context.prev = 29;
              _context.t2 = _context["catch"](23);

            case 31:
              screens = {};
              _context.prev = 32;
              _context.next = 35;
              return new Promise(function (resolve) {
                _firebase["default"].database().ref("screens/".concat(id)).on('value', function (snap) {
                  return resolve(snap.val());
                });
              });

            case 35:
              screens = _context.sent;
              screens = screens || {};
              _context.next = 41;
              break;

            case 39:
              _context.prev = 39;
              _context.t3 = _context["catch"](32);

            case 41:
              diagnosis = {};
              _context.prev = 42;
              _context.next = 45;
              return new Promise(function (resolve) {
                _firebase["default"].database().ref("diagnosis/".concat(id)).on('value', function (snap) {
                  return resolve(snap.val());
                });
              });

            case 45:
              diagnosis = _context.sent;
              diagnosis = diagnosis || {};
              _context.next = 51;
              break;

            case 49:
              _context.prev = 49;
              _context.t4 = _context["catch"](42);

            case 51:
              script = _objectSpread(_objectSpread({}, script), {}, {
                scriptId: scriptId,
                id: scriptId,
                position: Object.keys(scripts).length + 1
              });
              screens = Object.keys(screens).reduce(function (acc, key) {
                return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, screens[key]), {}, {
                  scriptId: scriptId,
                  createdAt: _firebase["default"].database.ServerValue.TIMESTAMP,
                  updatedAt: _firebase["default"].database.ServerValue.TIMESTAMP
                })));
              }, {});
              diagnosis = Object.keys(diagnosis).reduce(function (acc, key) {
                return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, diagnosis[key]), {}, {
                  scriptId: scriptId,
                  createdAt: _firebase["default"].database.ServerValue.TIMESTAMP,
                  updatedAt: _firebase["default"].database.ServerValue.TIMESTAMP
                })));
              }, {});
              screenIds = [];
              _context.prev = 55;
              _context.next = 58;
              return Promise.all(Object.keys(screens).map(function () {
                return _firebase["default"].database().ref("screens/".concat(scriptId)).push();
              }));

            case 58:
              snaps = _context.sent;
              snaps.forEach(function (snap) {
                return screenIds.push(snap.key);
              });
              _context.next = 65;
              break;

            case 62:
              _context.prev = 62;
              _context.t5 = _context["catch"](55);
              return _context.abrupt("return", reject(_context.t5));

            case 65:
              diagnosesIds = [];
              _context.prev = 66;
              _context.next = 69;
              return Promise.all(Object.keys(diagnosis).map(function () {
                return _firebase["default"].database().ref("diagnosis/".concat(scriptId)).push();
              }));

            case 69:
              _snaps = _context.sent;

              _snaps.forEach(function (snap) {
                return diagnosesIds.push(snap.key);
              });

              _context.next = 76;
              break;

            case 73:
              _context.prev = 73;
              _context.t6 = _context["catch"](66);
              return _context.abrupt("return", reject(_context.t6));

            case 76:
              _context.prev = 76;
              _context.next = 79;
              return _firebase["default"].database().ref("scripts/".concat(scriptId)).set(_objectSpread(_objectSpread({}, script), {}, {
                createdAt: _firebase["default"].database.ServerValue.TIMESTAMP,
                updatedAt: _firebase["default"].database.ServerValue.TIMESTAMP
              }));

            case 79:
              _context.next = 84;
              break;

            case 81:
              _context.prev = 81;
              _context.t7 = _context["catch"](76);
              return _context.abrupt("return", reject(_context.t7));

            case 84:
              _context.prev = 84;
              _context.next = 87;
              return _firebase["default"].database().ref("screens/".concat(scriptId)).set(_objectSpread({}, screens));

            case 87:
              _context.next = 91;
              break;

            case 89:
              _context.prev = 89;
              _context.t8 = _context["catch"](84);

            case 91:
              _context.prev = 91;
              _context.next = 94;
              return _firebase["default"].database().ref("diagnosis/".concat(scriptId)).set(_objectSpread({}, diagnosis));

            case 94:
              _context.next = 98;
              break;

            case 96:
              _context.prev = 96;
              _context.t9 = _context["catch"](91);

            case 98:
              _context.prev = 98;
              _context.next = 101;
              return _models.Script.findOrCreate({
                where: {
                  script_id: script.scriptId
                },
                defaults: {
                  script_id: script.scriptId,
                  position: script.position,
                  data: JSON.stringify(script)
                }
              });

            case 101:
              _context.next = 105;
              break;

            case 103:
              _context.prev = 103;
              _context.t10 = _context["catch"](98);

            case 105:
              _screens = [];
              _diagnoses = [];
              _context.prev = 107;
              _context.next = 110;
              return Promise.all(Object.keys(screens).map(function (key, i) {
                var screen = screens[key];
                var screen_id = screenIds[i];
                return _models.Screen.findOrCreate({
                  where: {
                    screen_id: screen_id
                  },
                  defaults: {
                    screen_id: screen_id,
                    script_id: screen.scriptId,
                    type: screen.type,
                    position: screen.position,
                    data: JSON.stringify(screen)
                  }
                });
              }));

            case 110:
              savedScreens = _context.sent;
              _screens = savedScreens.map(function (rslt) {
                return rslt[0];
              });
              _context.next = 116;
              break;

            case 114:
              _context.prev = 114;
              _context.t11 = _context["catch"](107);

            case 116:
              _context.prev = 116;
              _context.next = 119;
              return Promise.all(Object.keys(diagnosis).map(function (key, i) {
                var d = diagnosis[key];
                var diagnosis_id = diagnosesIds[i];
                return _models.Diagnosis.findOrCreate({
                  where: {
                    diagnosis_id: diagnosis_id
                  },
                  defaults: {
                    diagnosis_id: diagnosis_id,
                    script_id: d.scriptId,
                    position: d.position,
                    data: JSON.stringify(d)
                  }
                });
              }));

            case 119:
              savedDiagnoses = _context.sent;
              _diagnoses = savedDiagnoses.map(function (rslt) {
                return rslt[0];
              });
              _context.next = 125;
              break;

            case 123:
              _context.prev = 123;
              _context.t12 = _context["catch"](116);

            case 125:
              resolve({
                script: script,
                diagnoses: _diagnoses,
                screens: _screens
              });

            case 126:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8], [12, 18], [23, 29], [32, 39], [42, 49], [55, 62], [66, 73], [76, 81], [84, 89], [91, 96], [98, 103], [107, 114], [116, 123]]);
    }))();
  });
};

exports.copyScript = copyScript;

var _default = function _default(app) {
  return function (req, res, next) {
    (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var scripts, done, rslts;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              scripts = req.body.scripts;

              done = /*#__PURE__*/function () {
                var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(err) {
                  var rslts,
                      diagnoses,
                      screens,
                      _args2 = arguments;
                  return _regenerator["default"].wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          rslts = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : [];

                          if (rslts.length) {
                            diagnoses = rslts.reduce(function (acc, _ref5) {
                              var diagnoses = _ref5.diagnoses;
                              return [].concat((0, _toConsumableArray2["default"])(acc), (0, _toConsumableArray2["default"])(diagnoses.map(function (d) {
                                return {
                                  diagnosisId: d.diagnosis_id,
                                  scriptId: d.script_id
                                };
                              })));
                            }, []);
                            screens = rslts.reduce(function (acc, _ref6) {
                              var screens = _ref6.screens;
                              return [].concat((0, _toConsumableArray2["default"])(acc), (0, _toConsumableArray2["default"])(screens.map(function (s) {
                                return {
                                  screenId: s.screen_id,
                                  scriptId: s.script_id
                                };
                              })));
                            }, []);

                            if (diagnoses.length) {
                              _models.Log.create({
                                name: 'create_diagnoses',
                                data: JSON.stringify({
                                  diagnoses: diagnoses
                                })
                              });

                              app.io.emit('create_diagnoses', {
                                key: app.getRandomString(),
                                diagnoses: diagnoses
                              });
                            }

                            if (screens.length) {
                              _models.Log.create({
                                name: 'create_screens',
                                data: JSON.stringify({
                                  screens: screens
                                })
                              });

                              app.io.emit('create_screens', {
                                key: app.getRandomString(),
                                screens: screens
                              });
                            }

                            app.io.emit('create_scripts', {
                              key: app.getRandomString(),
                              scripts: rslts.map(function (_ref7) {
                                var script = _ref7.script;
                                return {
                                  scriptId: script.scriptId
                                };
                              })
                            });

                            _models.Log.create({
                              name: 'create_scripts',
                              data: JSON.stringify({
                                scripts: scripts
                              })
                            });
                          }

                          res.locals.setResponse(err, {
                            scripts: rslts.map(function (_ref8) {
                              var script = _ref8.script;
                              return script;
                            })
                          });
                          next();

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function done(_x) {
                  return _ref4.apply(this, arguments);
                };
              }();

              rslts = [];
              _context3.prev = 3;
              _context3.next = 6;
              return Promise.all(scripts.map(function (s) {
                return copyScript(s);
              }));

            case 6:
              rslts = _context3.sent;
              _context3.next = 12;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](3);
              return _context3.abrupt("return", done(_context3.t0));

            case 12:
              done(null, rslts);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 9]]);
    }))();
  };
};

var _default2 = _default;
exports["default"] = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(copyScript, "copyScript", "/home/farai/WorkBench/neotree-editor/server/routes/scripts/duplicateScriptsMiddleware.js");
  reactHotLoader.register(_default, "default", "/home/farai/WorkBench/neotree-editor/server/routes/scripts/duplicateScriptsMiddleware.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();