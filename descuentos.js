let total = 1000;
let totalUno=0;
let descuentoTotal =0;
let finalPrice = 0;
export function calculateTotal() {
        let total = 0;
        let finalPrice = 0;
        // let shippingCost = 199;
        
      //  this.cartList.forEach((products) => total += products.price);
        if (total < 200) 
        console.log("Para obtener la promocion debe ser una compra minima de 200");
        if (total >= 500)
        //finalPrice = (total)
        console.log("Se aplica un descuento de 5% ");
        if(total > 500)
        console.log("Aplicar el descuento de 12%");    
}