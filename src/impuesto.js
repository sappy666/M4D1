class Impuesto {
  constructor() {
      this._montoBrutoAnual = 0;
      this._deducciones = 0;
  }

  get montoBrutoAnual() {
      return this._montoBrutoAnual;
  }
  set montoBrutoAnual(monto) {
      this._montoBrutoAnual = monto;
  }

  get deducciones() {
      return this._deducciones;
  }
  set deducciones(deducciones) {
      this._deducciones = deducciones;
  }
}

export default Impuesto;
