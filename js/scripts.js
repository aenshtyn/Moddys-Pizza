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
  $("#haPizza").click(function() {
    $(".hawaiian").toggle();

  });
});

$(document).ready(function() {
  $("#chiPizza").click(function() {
    $(".chicken").toggle();
  });
});

$(document).ready(function() {
  $("#mPizza").click(function() {
    $(".meat").toggle();
  });
});

$(document).ready(function() {
  $("#boePizza").click(function() {
    $(".boerowores").toggle();
  });
});

$(document).ready(function() {
  $("#vegPizza").click(function() {
    $(".veg").toggle();
  });
});


function myFunction() {
  var coffee = document.getElementById("toppings");
  var txt = "";
  var i;
  for (i = 0; i < coffee.length; i++) {
    if (coffee[i].checked) {
      txt = txt + coffee[i].value + " ";
    }
  }
  document.getElementById("order").value = "You ordered a pizza with: " + txt ;
}

function up(max) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
  if (document.getElementById("myNumber").value >= parseInt(max)) {
    document.getElementById("myNumber").value = max;
  }
}
function down(min) {
  document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
  if (document.getElementById("myNumber").value <= parseInt(min)) {
    document.getElementById("myNumber").value = min;
  }
}
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
