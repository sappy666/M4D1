"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var cliente = new _cliente["default"]('Many');
cliente.impuesto.montoBrutoAnual = 11000;
cliente.impuesto.deducciones = 1000;
console.log("".concat(cliente.nombre, ": $ ").concat(cliente.calcularImpuesto(), " de impuestos."));