import { calculateTotal } from "./descuentos.js";
import { calcularEnvio } from "./envio.js";

export function vipOne(cantProductos, total){
    let finalPrice = calculateTotal(total);
    if(cantProductos > 20 && finalPrice > 1000 ){
        console.log("Es VIP", true);
    } else {
        console.log("No es VIP",false);
    }
}
