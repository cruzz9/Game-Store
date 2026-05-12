import { calculateTotal } from "./descuentos.js";
import { calcularEnvio } from "./envio.js";
import { vipOne } from './vip.js';

let name = "Paulina Cruz";

console.log("Hola", name);
console.log("Costo de envío:", calcularEnvio(3));
console.log("Total con descuento:", calculateTotal(500));
//console.log("", vipOne(25, 1200));
