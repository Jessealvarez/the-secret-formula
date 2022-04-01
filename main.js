let inputText = document.querySelector("#userInput");
let submitButton = document.querySelector("#submitButton");
let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    alert(inputText.value);
    //alert("testing!");
    
})

//===========================sandwich builder===========================

let stringofToppings = "";
let hamchecked = document.querySelector("#ham");
let turkeychecked = document.querySelector("#turkey");
let pastramichecked = document.querySelector("#pastrami");
let lettucechecked = document.querySelector("#lettuce");
let spinachchecked = document.querySelector("#spinach");
let provolonechecked = document.querySelector("#provolone");
let americanchecked = document.querySelector("#american");
let tomatochecked = document.querySelector("#tomato");
let picklechecked = document.querySelector("#pickle");
let mayochecked = document.querySelector("#mayo");
let submittwo = document.querySelector("#submitButton2");

submittwo.addEventListener("click", function(event){
    event.preventDefault();

    
    //alert("testing!");

if(hamchecked.checked === true){
   stringofToppings = stringofToppings + " Ham";
}
if(turkeychecked.checked === true){
    stringofToppings = stringofToppings + " Turkey";
}
if(pastramichecked.checked === true){
    stringofToppings = stringofToppings  + "  Pastrami";
}
if(lettucechecked.checked === true){
    stringofToppings = stringofToppings + " Lettuce";
}
if(spinachchecked.checked === true){
    stringofToppings = stringofToppings + " Spinach";
}
if(provolonechecked.checked === true){
    stringofToppings = stringofToppings + " Provolone Cheese";
}
if(americanchecked.checked === true){
    stringofToppings = stringofToppings + " American Cheese";
}
if(tomatochecked.checked === true){
    stringofToppings = stringofToppings + " Tomatoes";
}
if(picklechecked.checked === true){
    stringofToppings = stringofToppings + " Pickle";
}
if(mayochecked.checked === true){
    stringofToppings = stringofToppings + " Mayo";
}

alert("You've chosen the following toppings: " + stringofToppings);

})

//===========================haircut scheduler===========================
let haircutDate = document.querySelector("#haircutdate");
let haircutter = document.querySelector("#hairdresser");
let longhairCheck = document.querySelector("#hairlengthLong");
let shorthairCheck = document.querySelector("#hairlength");
let haircut1 = "";
let submitthree = document.querySelector("#submitButton3");
let message = "";


submitthree.addEventListener("click", function(event){
    if(longhairCheck.checked === true){
        haircut1 = haircut1 + "long hair";
    }
    else if(shorthairCheck.checked === true){
        haircut1 = haircut1 + "short hair";
    }
    message = message + "You've scheduled a haircut on: " + haircutDate.value + " with: " + haircutter.value + " for: " + haircut1 + "."
    event.preventDefault();
    alert(message);

})
    
    //alert("testing!");

//===========================account creation===========================
userName = document.querySelector("#username")
userEmail = document.querySelector("#useremail")
accountButton = document.querySelector("#submitButton4");

accountButton.addEventListener("click", function(event){
    event.preventDefault();

    alert("Account successfully created for: " + userName.value + " Verication email sent to: " + userEmail.value );
})
