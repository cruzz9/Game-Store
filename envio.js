
export function calcularEnvio(cantProductos){
    const costoEnvio = 15;
    let finalEnvio = 0;

    if(cantProductos < 3){
        console.log("No se permiten compras menores a 3 productos");
        finalEnvio = costoEnvio; // o incluso podrías devolver null
    } else if(cantProductos >= 3 && cantProductos < 10){
        console.log("El costo de envío es: " + costoEnvio);
        finalEnvio = costoEnvio;
    } else {
        console.log("El envío es gratis");
        finalEnvio = 0;
    }
    return finalEnvio;
}
