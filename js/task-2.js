function getShippingMessage (country, price, deliveryFee) {
    return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
}
console.log(getShippingMessage("Germany", 80, 20));