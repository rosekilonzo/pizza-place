function small() {
    myPizza.size = "Small";
    myPizza.sizeCharge = 5;
    myPizza.crustCharge = 1.50;
    myPizza.toppingCharge = 1.00;
};

function medium() {
    myPizza.size = "Medium";
    myPizza.sizeCharge = 7;
    myPizza.crustCharge = 2.00;
    myPizza.toppingCharge = 2.00;

};

function large() {
    myPizza.size = "Large";
    myPizza.sizeCharge = 9;
    myPizza.crustCharge = 2.50;
    myPizza.toppingCharge = 3.00;

};

function delivery() {

    myPizza.delivery = 1.5;
    prompt("Where would you like to have your pizza delivered. Enter Estate Name");
    alert("Your delivery fees would be $1.5!")

};
function checkedToppings() {
    var checked = 0;
    if (document.getElementById("toppings1").checked) { checked++; }
    if (document.getElementById("toppings2").checked) { checked++; }
    if (document.getElementById("toppings3").checked) { checked++; }
    if (document.getElementById("toppings4").checked) { checked++; }
    if (document.getElementById("toppings5").checked) { checked++; }
    if (document.getElementById("toppings6").checked) { checked++; }
    myPizza.toppingCharge *= checked;
    console.log(myPizza.toppingCharge);
}

function crust() {
    console.log(myPizza.size);
    if (myPizza.size === "Large") {
        document.getElementById("thin-crust").innerHTML = "$" + 2.50;
        document.getElementById("hard-crust").innerHTML = "$" + 2.50;
        document.getElementById("thick-crust").innerHTML = "$" + 2.50;
        document.getElementById("italian-crust").innerHTML = "$" + 2.50;

    }
    else if (myPizza.size === "Medium") {
        document.getElementById("thin-crust").innerHTML = "$" + 2.00;
        document.getElementById("hard-crust").innerHTML = "$" + 2.00;
        document.getElementById("thick-crust").innerHTML = "$" + 2.00;
        document.getElementById("italian-crust").innerHTML = "$" + 2.00;
    }
    else {
        document.getElementById("thin-crust").innerHTML = "$" + 1.50;
        document.getElementById("hard-crust").innerHTML = "$" + 1.50;
        document.getElementById("thick-crust").innerHTML = "$" + 1.50;
        document.getElementById("italian-crust").innerHTML = "$" + 1.50;

    }

}
function toppings() {
    if (myPizza.size === "Large") {
        document.getElementById("fruit-topping").innerHTML = "$3.00";
        document.getElementById("kale-topping").innerHTML = "$3.00";
        document.getElementById("pepperoni-topping").innerHTML = "$3.00";
        document.getElementById("spinach-topping").innerHTML = "$3.00";
        document.getElementById("tomato-topping").innerHTML = "$3.00";
        document.getElementById("cheese-topping").innerHTML = "$3.00";

    }
    else if (myPizza.size === "Medium") {
        document.getElementById("fruit-topping").innerHTML = "$2.00";
        document.getElementById("kale-topping").innerHTML = "$2.00";
        document.getElementById("pepperoni-topping").innerHTML = "$2.00";
        document.getElementById("spinach-topping").innerHTML = "$2.00";
        document.getElementById("tomato-topping").innerHTML = "$2.00";
        document.getElementById("cheese-topping").innerHTML = "$2.00";

    }
    else {
        document.getElementById("fruit-topping").innerHTML = "$1.00";
        document.getElementById("kale-topping").innerHTML = "$1.00";
        document.getElementById("pepperoni-topping").innerHTML = "$1.00";
        document.getElementById("spinach-topping").innerHTML = "$1.00";
        document.getElementById("tomato-topping").innerHTML = "$1.00";
        document.getElementById("cheese-topping").innerHTML = "$1.00";


    }

}

function Pizza() {
    this.size = "";
    this.topping = "";
    this.crust = "";
    this.delivery = 0;
    this.sizeCharge = 0;
    this.toppingCharge = 0;
    this.crustCharge = 0;
}

var myPizza = new Pizza();

Pizza.prototype.totalCharge = function () {
    return myPizza.sizeCharge + myPizza.crustCharge + myPizza.toppingCharge + myPizza.delivery;
};
function newFinalPrice() {
    var price = myPizza.totalCharge()
    reset();
    console.log(myPizza.totalCharge());
    console.log(myPizza.size());

}
function reset() {
    document.getElementsByName("delivery").reset;
    document.getElementsByName("toppings").reset;
    document.getElementsByName("crust").reset;
    document.getElementsByName("size").reset;
    var del = document.getElementsByName("delivery");
    var top = document.getElementsByName("toppings");
    var crus = document.getElementsByName("crust");
    var size = document.getElementsByName("size");
    for (var i = 0; i < del.length; i++) {
        del[i].checked = false;
    }
    for (var i = 0; i < top.length; i++) {
        top[i].checked = false;
    }
    for (var i = 0; i < crus.length; i++) {
        crus[i].checked = false;
    }
    for (var i = 0; i < size.length; i++) {
        size[i].checked = false;
    }
};

function finalPrice() {
    document.getElementById("size-price").innerHTML = "$" + myPizza.sizeCharge;
    document.getElementById("crust-price").innerHTML = "$" + myPizza.crustCharge;
    document.getElementById("topping-price").innerHTML = "$" + myPizza.toppingCharge;
    document.getElementById("delivery-price").innerHTML = "$" + myPizza.delivery;
    document.getElementById("total-charge").innerHTML = "$" + myPizza.totalCharge();
};

