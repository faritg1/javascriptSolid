class rectangulo {
    constructor(Altura, Ancho) {
        this.Altura = Altura;
        this.Ancho = Ancho;
    }

    Area(){
        return this.Ancho * this.Altura;
    }

    setAltura(newAltura) {
        this.Altura = newAltura;
    }
}

class Square extends rectangulo {}

const rectangle = new rectangulo(4, 5);
const square = new Square(4, 4);

console.log(`Altura: ${rectangle.Altura}, Ancho: ${rectangle.Ancho}  Area: ${rectangle.Area()}`);
console.log(`Altura: ${square.Altura}, Ancho: ${square.Ancho} Area: ${square.Area()}`); 

square.setAltura(6);
console.log(`Altura: ${square.Altura}, Ancho: ${square.Ancho} Area: ${square.Area()}`);