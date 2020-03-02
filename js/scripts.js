$(document).ready(function() {
  $("#pePizza").click(function() {
    $(".pepperoni").toggle();
  });
});


$(document).ready(function() {
  $("#perPizza").click(function() {
    $(".periperi").toggle();
  });
});


$(document).ready(function() {
  $("#bbqPizza").click(function() {
    $(".bbq").toggle();
  });
});

$(document).ready(function() {
  $("#chiPizza").click(function() {
    $(".chicken").toggle();
  });
});

var mushrooms = { name: "Mushrooms", price: 60 };
var xtraCheese = { name: "Extra Cheese", price: 40 };
var pineapple = { name: "Pineapple", price: 50 };

var toppingTypes = { name: "Pizza Toppings ", products: [mushrooms, xtraCheese, pineapple ]};

var large = {name: "Large", price: 1000};
var xtraLarge = {name: "Extra Large", price: 1200};
var medium = {name: "Medium", price: 800};

var pizzaSizes = { name: "Pizza Sizes", sizes: [ large, xtraLarge, medium]};

var normalCrust = { name: "Normal", price: 0};
var thinCrust = { name: "Thin", price: 0};
var thickCrust = { name: "Thick", price: 50};

var pizzaCrusts = { name : "Crust Types", types : [normalCrust, thinCrust, thickCrust]};

var pepperoni = { name: "Pepperoni"}
var chicken = { name: "chicken"}
var bbq = { name: "bbq"}

var pizzaTypes = { name: "Pizza", types : [pepperoni, chicken, bbq]};

var pizzeria = [toppingTypes, pizzaSizes, pizzaCrusts, pizzaTypes];

pizzeria.forEach(function(pizzer){
  console.log(pizzer.name + " is:");
  pizzer.products.forEach(function(product){
    console.log(product.name, product.price)
  })
  console.log("\n");
})



$(document).ready(function() {
    $("button").click(function() {




function validateForm() {

var x=document.forms["contactUs"]["name"].value;
if (x==null || x=="")
  {
  alert("Name must be filled out");
  return false;
  }

var y=document.forms["contactUs"]["email"].value;
if (y==null || y=="") {
  alert("Email must be filled out");
  return false;
  }

  var y=document.forms["contactUs"]["phone"].value;
  if (y==null || y=="") {
    alert("Phone number must be filled out");
    return false;
    }

  var z=document.forms["contactUs"]["subject"].value;
  if (z==null || z=="") {
    alert("Please type your adress");
  }
    else {
      alert ("Your order will be delivered to your adress");
    }
}

$$(document).ready(function(){
    $('input[type="radio"]').click(function(){
    	var demovalue = $(this).val();
        $("div.myDiv").hide();
        $("#show"+demovalue).show();
    });
});
