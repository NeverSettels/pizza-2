function Order() {
    this.pizzas = [];
    this.priceTotal = 0;
}

Order.prototype.addPizza = function (pizza) {
    this.pizzas.push(pizza)
}
Order.prototype.calcTotal = function () {
    this.pizzas.forEach(pizza => {
        this.priceTotal += pizza.price;
    })
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

$(document).ready(() => {
    let myOrder = new Order();
    $('#order').submit(e => {
        e.preventDefault();
        let newPizza = new Pizza();
        $("#order input:checkbox:checked").each(function () {
            newPizza.addTopping($(this).val());
        })
        console.log(newPizza.toppings);

    })
})