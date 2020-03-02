$(document).ready(function() {
  $("#pizza").click(function() {
       $("#pizzaOptions").toggle();
    });
});

// toppings

var olives = {name: "Olives", price: 150};
var mushroom = {name: "Mushroom", price: 100}
var onions = {name: "Onions", price:50}


// crust types

var normal = {name: "Normal", price: 0}
var thin = {name: "Thin", price:0}
var cheeseFilled = {name:"Cheese Filled", price:100}

// sizes

var  small = {name:"Small", price : 500}
var medium = {name:"Medium", price:700}
var extraLarge = {name: "Extra Large", price:1100}

// pizza types

var pepperoni = {name:"Pepperoni"}
var periperi = {name:"Periperi"}
var bbq = {name:"BBQ"}
var veg = {name:"Vegetarian"}



var pizzaShop = { name: "Moodys Pizzeria", products:[pepperoni, periperi, bbq, veg]
, toppings:[mushroom, onions, olives],
crusts:[normal, cheeseFilled, thin ],
sizes:[small, medium, extraLarge]};

// products.forEach(function(product) {
//   console.log(product)
//
// });
 function pizzaShop(){
   console.log(pizzaShop.name + "sells:");
   pizzaShop.products.forEach(function(product){

   })
   console.log("\n")
 };
