/* let numero = [1,2,3,4,5];
let nombres = ["Veronica", "Katherin", "Tique"];
let mixto = ["Andres", 19, false];
let clave = ["admin", "12345"];
 */


/* console.log(numero);
console.log(nombres [1]);

for (let index = 0; index < nombres.length; index++) {
    console.log(nombres[index]);
    
}
//Agregar al final
nombres.push(`Stiven`);
console.log(nombres);
//Eliminar del final
console.log(nombres.pop());
console.log(nombres);
//Agregar al principio
nommbres.unshift("Felipe");
console.log(nombres);
//Eliminar del principio
nombres.shift();
console.log(nombres);
//Borrar pero indicandole la posicion que deseo y contando los  que deseo borrar de esa posicion para alla
console.log(nombres[1]);
nombres.splice(1,1)
console.log(nombres); */

/* nombres.forEach ((nombre, index) => {
     console.log(`El nombre del arreglo es ${nombre} y esta en el puesto ${index + 1}`);
}) 
 */

// .map funciona como un ciclo. lo recorre y me entrega un nuevo resultado, hace algo y me devuelve algo.

/* let numeros = [1,2,3,4,5]
let numerosDobles = numeros.map((n) => {
   return n * 2;
})

console.log(numerosDobles); */

/* let nombres = ["Veronica", "Katherin", "Tique"];
let nombreEditado = nombres.map((cualquiera) => {
    return  cualquiera + " estudiante" 
})

console.log(nombreEditado); */

//NECESITABAMOS IDENTIFICAR CUAL ES NUMERO PAR Y CUAL NO.
//El parameto que este adentro le da un nuevo nombre al arreglo o si sigue siendo el mismo lo guarda dentro de la función.
 
/* let numerosPares = numeros.map((numero) => {
    if (numero % 2 === 0) {
        return  numero;
    }
})  */

    //Solamente me muetra lo que segun yo le pida al lado del return. En este caso los numeros pares
/* let numeros = [1,2,3,4,5]

let numerosPares = numeros.filter((numero) =>{
      return numero % 2 === 0;
})
console.log(numerosPares); */

let nombre = ["Andres", "Santiago", "Samuel"]
let usuario = prompt("Que nombre desea buscar");

 /* let nombreBuscado = nombre.filter ((nombre) => {
    return nombre === usuario;

 })

 if (nombre){
    alert (`El usuario  ${nombreBuscado} esta`)
    return;
   } else {
    alert (`El usuario  ${nombreBuscado} no esta`)
   } */

if(nombre.incluides(usuario)){
    alert (`El usuario  ${usuario} esta`)
    } else {
    alert (`El usuario  ${usuario} no esta`)
   }
