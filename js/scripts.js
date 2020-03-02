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

var large = {name: "Large", price: 1000};
var xtraLarge = {name: "Extra Large", price: 1200};
var medium = {name: "Medium", price: 800};

var normalCrust = { name: "Normal", price: 0};
var thinCrust = { name: "Thin", price: 0};
var thickCrust = { name: "Thick", price: 50};

var pizzeria = { toppings: [mushrooms, xtraCheese, pineapple], sizes: [large, xtraLarge, medium], crusts: [normalCrust, thinCrust, thickCrust]};



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
