
let peso = parseFloat(prompt("Ingrese el peso actual"));
let altura= parseFloat(prompt("Ingrese la altura actual"));



function calcularImc (peso, altura) {
    
    return  peso / (altura * altura);
}
 
let resultado = calcularImc (peso, altura);
alert (resultado.toFixed(2));



