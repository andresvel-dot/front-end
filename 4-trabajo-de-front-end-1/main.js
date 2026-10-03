

import { sumar,restar,multiplicacion,dividir } from "./funciones.js";
let opcion = 0;
let usuario;
let usuario2
let contador= 0;
const SALIR = "mayday"
let palabra;
alert (`Bienvenido a mi calculadora`)


do {
     
     opcion = parseInt(prompt("Seleccione la opcion que desee \n 1. multiplicar \n 2. dividir  \n 3. sumar  \n 4. restar  \n 5. salir "))
      if (opcion > 0 && opcion < 5) {
         usuario = parseInt(prompt("Ingrese un numero"));
         usuario2 = parseInt(prompt("Ingrese el otro numero"));
      }
     

     
    switch (opcion) {
        case 1:
          multiplicacion(usuario, usuario2);
          
            
        break;

        case 2:
            dividir(usuario,usuario2);
            
        break;

        case 3:
            sumar(usuario,usuario2);
            
        break;

        case 4:
            restar(usuario,usuario2);
            
        break;

        case 5:
           palabra = prompt(`Escriba la palabra clave`).toLowerCase();
        break;
           
        default:
            alert(`Escribí bien ome shh`)
        break;
    }
    contador ++;
   
} while (palabra !== SALIR);

    alert(`Utilizaste la App ${contador} veces`)
    alert(`Ha salido de la App`)

