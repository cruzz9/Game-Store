let productos = 5;
const costoEnvio = 15;

export function calcularEnvio(){
    if(productos < 3)
    console.log("No se permiten compras menores a 3 productos");
    if(productos >= 10)
    console.log("El costo de envio es:"+costoEnvio);
    if(productos > 10)
    console.log("El envio es gratis");    
}