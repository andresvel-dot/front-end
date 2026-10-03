
 function cajeroAutomatico() {
    let opcion = 0;
    let saldoDisponible = 1000; 
    let retirarDinero;
    let depositarDinero;
    let resta;
    let saldoEnCuenta;
     alert(`Bienvenido usuario(a) al cajero de Andrés...`)

     do {
        opcion = parseInt(prompt("Seleccione la opcion que desee hacer.  \n1. Consultar saldo actual  \n2. Retirar dinero  \n3. Depositar dinero  \n4. Salir"))
        switch (opcion) {
            case 1:
                alert(`Su saldo actual es: $${saldoDisponible}`);

            break;
            case 2:
              retirarDinero = parseInt(prompt("Cuànto desea retirar"));
              if (retirarDinero  <= saldoDisponible) {
                 resta= saldoDisponible - retirarDinero;
                alert (`Retirado exitosamente... le quedan $${resta}`);
               saldoDisponible = resta ;
             }
              else{
                 alert(`Retiro Denegado`);
              }
                break;
            case 3:
                depositarDinero = parseInt(prompt(`Ingrese el valor que desea depositar`));
                saldoEnCuenta = saldoDisponible + depositarDinero;
                 alert(`Su saldo del momento es: $${saldoEnCuenta}`)
                 saldoDisponible = saldoEnCuenta;

                break;
            case 4:
                alert(`¡Gracias por usar nuestros servicios!`)
                break;
        
            default:
                alert (`Opción inválida`)
                break;
        }
     } while (opcion !== 4);
    
 } 

 cajeroAutomatico();