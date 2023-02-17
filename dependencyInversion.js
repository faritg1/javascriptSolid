class verificando {
    constructor(procesadorPagos) {
    this.procesadorPagos = procesadorPagos;
    }
    hacerPago(cantidad) {
    this.procesadorPagos.intencionPago(cantidad);
    }
}
class procesadorPagos {
    constructor(procesador, divisa) {
    this.procesador = procesador;
    this.divisa = divisa;
    }
    intencionPago(cantidad) {
    this.procesador.createTransaction(cantidad, this.divisa);
    }
}
class mejorTransaction {
    createTransaction(cantidad, divisa) {
    console.log(`pago realizado ${cantidad} ${divisa}`);
    }
}

const ProcesadorPagos = new procesadorPagos(new mejorTransaction(), 'USD');
const Verificando = new verificando(procesadorPagos);
