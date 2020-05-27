import { Rectangulo } from './classes/rectangulo.class'

(()=>{
  // Uso de Let y Const
  let nombre = 'Ricardo Tapia';
  let edad = 23;

  const PERSONAJE = {
    nombre,
    edad
  };
  
  console.log(`1. ${ PERSONAJE.nombre } tiene ${ PERSONAJE.edad } años de edad.`);

  // Cree una interfaz que sirva para validar el siguiente objeto
  interface personaje {
    nombre: string,
    artesMarciales: string[]
  }

  const batman: personaje = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  console.log(`2. ${ batman.nombre } sabe ${ batman.artesMarciales }`);

  // Convertir esta funcion a una funcion de flecha
  const resultadoDoble = ( a:number, b:number ): number => (a + b) * 2;

  console.log(`3. El resultado es ${ resultadoDoble(4,7) }`);

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  const getAvenger = ( nombre:string, poder?:string, arma:string = 'arco' ) => {
    let mensaje;
    if( poder ){
      mensaje = `${ nombre }  tiene el poder de: ${ poder } y un arma: ${ arma }`;
    }else{
      mensaje = `${ nombre } tiene un ${ arma }`;
    }
    return mensaje;
  };

  console.log(`4. ${ getAvenger('Hawkeye') }`);

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el Área  =  base * altura,
  // ese método debe de retornar un número.


  const rec1 = new Rectangulo(4,7);

  console.log(`5. El área es ${ rec1.area() }`);


})();