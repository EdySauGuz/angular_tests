export class Rectangulo {

    constructor(
        public base: number,
        public altura: number
    ){}

    area(){
        return this.base * this.altura;
    }

    calcularArea = () => this.base * this.altura;
}