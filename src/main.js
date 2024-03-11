import Cliente from './cliente.js';

const cliente = new Cliente('Many');

cliente.impuesto.montoBrutoAnual = 11000;
cliente.impuesto.deducciones = 1000;

console.log(`${cliente.nombre}: $ ${cliente.calcularImpuesto()} de impuestos.`);
