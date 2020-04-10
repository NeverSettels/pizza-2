function Order() {
    this.pizzas = [];
    this.priceTotal = 0;
}

//calculate total methos tbc

function Pizza() {
    this.toppings = [];
    this.crust = '';
    this.sauce = '';
    this.price = 10;
}

Pizza.prototype.addTopping = function (topping) {
    this.toppings.push(topping)
}
Pizza.prototype.updateCrust = function (crust) {
    this.crust = crust;
}
Pizza.prototype.updateSauce = function (sauce) {
    this.sauce = sauce;
}