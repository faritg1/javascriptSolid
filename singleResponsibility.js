class carro {
    constructor(nombre, modelo, allo) {
        this.nombre = nombre
        this.modelo = modelo
        this.allo = allo
    }
}
class servicioCarro {
    getCar(id) {
        return this.http.get('api/cars/' + id)
    }
    saveCar(carro) {
        this.http.post('api/cars', carro)
    }
}

