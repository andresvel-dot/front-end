
/* let usuario = parseInt(prompt("Ingrese el un numero"))
const numeros = [1,2,3,4,5,6,7,8,9]; */

/* numeros.forEach((numeros) => {

 console.log(usuario * numeros); 
})
 */
/* for (let index = 0; index <  numeros.length; index++) {
    
       console.log( usuario * numeros[index] ); 

} */

 /* let resultado = numeros.map((numeros) => {
     
   return numeros * usuario; 
})
 
console.log(resultado); */

/* resultado.forEach((r) => {
    if (r % 3 == 0 && r % 5 == 0 ) {
        console.log("Fizz buzz");
    } else if (r % 3 == 0) {
        console.log("Fizz");
    } else if (r % 5 == 0){
        console.log("buzz");
    } else {
        console.log(r);
    }
}) */

    /* let filtrados = resultado.map((r) => {
    if (r % 3 == 0 && r % 5 == 0 ) {
        return "Fizz buzz"
    } else if (r % 3 == 0) {
         return "Fizz"
    } else if (r % 5 == 0){
        return "buzz"
    } else {
        return r;
    }
    })

    console.log(filtrados); */


    const peliculasAPI = [
        {id: 1, titulo: "Interstellar", genero: "Sci-Fi" , ratting: 8.6},
        {id: 2, titulo: "Son como niños", genero: "Comedia", ratting: 5.9},
        {id: 3, titulo: "Inception", genero: "Sci-Fi", ratting: 8.8}

    ]

    let peliculasTop = peliculasAPI.filter(f =>  f.ratting > 8.0)

    console.log(peliculasTop);

    //Esto es desestructurar un arreglo dentro de un map
    
    let recomendaciones = peliculasTop.map(({titulo, genero}) =>{
             
        //Clave valor dentro de el objeto recomendaciones
              return {Recomendada: `${titulo}`, Categoria: `${genero}`}
    })

    console.log(recomendaciones);
