class vehiculo {
    constructor(capacidadCombustible, eficienciaCombustible) {
        this.capacidadCombustible = capacidadCombustible;
        this.eficienciaCombustible = eficienciaCombustible;
    }

    getRange() {
        return this.capacidadCombustible * this.eficienciaCombustible;
    }
}

class vehiculoElectrico extends vehiculo {
    constructor(capacidadCombustible, eficienciaCombustible, capacidadElectrica){
        super(capacidadCombustible, eficienciaCombustible);
        this.capacidadElectrica = capacidadElectrica;
    }

    getRange() {
        return (this.capacidadCombustible * this.eficienciaCombustible) + this.capacidadElectrica;
    }
}

const normal = new vehiculo(10, 15);
const electrico = new vehiculoElectrico(10, 15, 50);
console.log(electrico.getRange());