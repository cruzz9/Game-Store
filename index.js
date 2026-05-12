import { calculateTotal } from "./descuentos.js";
import { calcularEnvio } from "./envio.js";
import { vipOne } from './vip.js';

let name = "Paulina";

console.log("Cliente:", name);
console.log("Total con descuento:", calculateTotal(1000));
console.log("Costo de envío:", calcularEnvio(10));
console.log("", vipOne(25, 1200));
