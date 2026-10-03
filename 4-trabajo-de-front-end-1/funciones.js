export function sumar (usuario,usuario2){
    alert(`El resultado de la suma es: ${usuario + usuario2}`)
    
}

export function multiplicacion (usuario,usuario2){
       alert(`El resultado de la multiplicacion es: ${usuario * usuario2}`)
}

export function  restar (usuario,usuario2){
      alert(`El resultado de la resta es: ${usuario - usuario2}`)
}

export function dividir (usuario,usuario2){
    if (usuario2===0){
        alert(`Division invalida, no se puede dividir por 0`)
        return;
    }
         alert(`El resultado de la division es: ${usuario / usuario2}`)
}