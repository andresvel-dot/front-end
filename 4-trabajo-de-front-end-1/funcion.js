function saludar() {
    console.log(`hola`);
    
}


    let saludar2 = function(nombre)  {
     console.log(`hola`);
      return nombre;
    
}

saludar();
saludar2();


let saludar3 = (nombre) => {
    console.log(`hola`);
    return nombre;
}
// Si es un solo parametro se pueden borrar los parentesis
let saludar = function nombre => {
    console.log(`Hola`);
    return nombre;
}

//Si la funcion es de una sola linea, se pueden omitir {}
let saludar = nombre => nombre;

 let sumar  function (a,b) {
   return  a + b;

}


let sumar = (a,b) => a+b;

