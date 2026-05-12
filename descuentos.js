
export function calculateTotal(total) {
    let finalPrice = 0;

    if (total < 200) {
        console.log("Para obtener la promoción debe ser una compra mínima de 200");
        finalPrice = total;
    } else if (total >= 200 && total < 500) {
        console.log("Se aplica un descuento de 5%");
        finalPrice = total * 0.95;
    } else {
        // total >= 500
        console.log("Se aplica un descuento de 12%");
        finalPrice = total * 0.88;
    }
    return finalPrice;
}
