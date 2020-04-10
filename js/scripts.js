function Order() {
    this.pizzas = [];
    this.priceTotal = 0;
    this.currentIndex = 0;
}

Order.prototype.addPizza = function (pizza) {
    pizza.id = this.orderNumber();
    this.pizzas.push(pizza)
}
Order.prototype.orderNumber = function () {
    this.currentIndex += 1;
    return this.currentIndex;
}
Order.prototype.calcTotal = function () {
    this.priceTotal = 0;
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
Pizza.prototype.calcPrice = function () {
    this.toppings.forEach(topping => {
        this.price += 1
    })
    switch (this.crust) {
        case 'Deep Dish':
            this.price += 2;
            break;
        case 'Thin':
            this.price += 1;
            break;
        case 'Gluten free':
            this.price += 3;
            break;
        case 'Regular':
            this.price += 0;
            break;
        default:
            break;
    }
    switch (this.sauce) {
        case 'Alfredo':
            this.price += 1;
            break;
        case 'Pesto':
            this.price += 2;
            break;
        default:
            break;
    }
}
$(document).ready(() => {
    let myOrder = new Order();
    $('#order').submit(e => {
        e.preventDefault();
        let newPizza = new Pizza();
        $("#order input:checkbox:checked").each(function () {
            newPizza.addTopping($(this).val());
        })
        newPizza.updateCrust($('#crustInput').val())
        newPizza.updateSauce($('#sauceInput').val())
        newPizza.calcPrice();
        myOrder.addPizza(newPizza)
        myOrder.calcTotal();
        console.log(myOrder);
        $('#orders').append()
        myOrder.pizzas.forEach(pizza => {
            $('#orders').append(`
            <div class="order-card">
            <p>Order #: ${pizza.id}</p>
            </div>
            `)
        })



    })
})