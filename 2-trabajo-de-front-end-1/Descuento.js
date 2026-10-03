/*let edad = 10;
let edad2= 15;
let tieneEntrada= false;*/
/*let nombre = prompt ("Ingresa tu nombre: ");
console.log(nombre);
 alert(`La edad es: ${edad} años, y la segunda edad es ${edad2} años`);*/

/*let respuesta = edad > edad2
console.log(respuesta);

respuesta = edad > edad2 || edad === edad2
console.log(respuesta); */

/*const EDAD_MINIMA = 18, NACIONALIDAD = "colombia";
let edadUsuario, nacionalidadUsuario;


nacionalidadUsuario =  prompt("Dime tu pais de nacimiento: ");
edadUsuario = parseInt(prompt("Dime la edad: "));


let respuesta= edadUsuario >= EDAD_MINIMA && nacionalidadUsuario === NACIONALIDAD;


if (edadUsuario >= EDAD_MINIMA){
    nacionalidadUsuario = prompt("Dime tu pais de nacimiento: ");
    if(nacionalidadUsuario === NACIONALIDAD);{
        console.log("Puede votar");
    }
}
else {
     let nacionalizado = prompt ("Eres nacionalizado: ");
     if(nacionalizado === "si") {
        console.log(`Eres apto para votar`);
     }
} else {
    console.log(`Re pailas`);
} else {
    console.log("No cumples con la edad minima");
}*/

const DESCUENTO_1= 0.05;
const DESCUENTO_2= 0.07;
let resultado1;
let resultado2;
let valorCompra=  parseFloat(prompt("Ingrese el valor de la compra"))
if (valorCompra>=50000){
   resultado1 = valorCompra - (valorCompra * DESCUENTO_1);
    console.log(`El valor de la compra mas el descuento seria: ${resultado1} pesos`);

} else {
    if(valorCompra>100000){
    resultado2= valorCompra - (valorCompra * DESCUENTO_2 );
    console.log(`El valor de la compra mas el descuento seria: ${resultado2} pesos`);
    } 
}


if (valorCompra < 50000) {
    console.log(`Mijo no aplicas para el descuento`);
}
   


  
