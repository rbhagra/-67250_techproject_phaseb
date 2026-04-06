// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);

// A = "Hello ";
// B = "world!";
// var c = A + B;
// console.log(c);

// function name (params){

// }
// function sumnPrint(x1, x2)
// {
//     var sum = x1 + x2;
// }
// if (c.length > z) {
//     console.log(c);
// } else if (c.length < z) {
//     console.log(z);
// } else {
//     console.log("good job!");
// }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == "Banana") {
//             alert("Banana is found");
//         }
//     }
// }
// findTheBanana(L1);
// findTheBanana(L2);
// function findTheBananaForEach(arr) {
//     arr.forEach(function(item) {
//         if (item == "Banana") {
//             alert("Banana is found");
//         }
//     });
// }


// function to change greeting based on the time 


now = new Date();
hour = now.getHours();
function greeting(x){

    if (x < 5 || x >= 20) {
        var message = "Good night!";
    } else if (x < 12) {
      var  message = "Good morning!";
    } else if (x < 18) {
      var  message = "Good afternoon!";
    } else {
      var  message = "Good evening!";
    }

    var element = document.getElementById("greeting");
    if (element) {
        element.innerHTML = message + " Welcome to MonoMuse";
    }
}
greeting(hour);

function addYear() {
    var year = now.getFullYear();
    var element = document.getElementById("copyYear");
    if (element) {
        element.innerHTML = year;
    }
}
addYear();

function ActiveNav() {
  var navLinks = document.querySelectorAll(".nav_bar a");
  navLinks.forEach(function(link) {
      if (window.location.href === link.href) {
          link.classList.add("active");
      }
  });
}

 // making the nav bar responsive


ActiveNav();

var readLess = document.getElementById("readLess");
var readMore = document.getElementById("readMore");
var longIntro = document.getElementById("longIntro");

if (readLess) {
    readLess.addEventListener("click", function() {
        longIntro.style.display = "none";
        readLess.style.display = "none";
        readMore.style.display = "inline-block";
    });
}

if (readMore) {
    readMore.addEventListener("click", function() {
        longIntro.style.display = "block";
        readLess.style.display = "inline-block";
        readMore.style.display = "none";
    });
}

// making the nav bar responsive
function toggle() {
    var nav_bar = document.querySelector(".nav_bar");
    nav_bar.classList.toggle("responsive");
}

// map functionality

if (document.getElementById("map")) {
    var map = L.map('map').setView([40.437378, -79.989644], 15);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    L.marker([40.437378, -79.989644]).addTo(map).bindPopup("Museum Location").openPopup();
}

// functionality for the slideshow on the main page 


var slides = document.querySelectorAll(".slide");
if (slides.length > 0) {
    var current = 0;

    function showSlide(i) {
        slides[current].classList.remove("active");
        current = (i + slides.length) % slides.length;
        slides[current].classList.add("active");
    }
    // code for slideshow adapted from https://www.w3schools.com/howto/howto_js_slideshow.asp

    document.querySelector(".prev").addEventListener("click", function() { showSlide(current - 1); });
    document.querySelector(".next").addEventListener("click", function() { showSlide(current + 1); });
}

// code for the form, including the validation code and throwing an error 

function updatePrice() {
    var qty = parseInt(document.getElementById("ticketQty").value) || 1;
    document.getElementById("totalPrice").textContent = "$" + (qty * 18).toFixed(2);
}

var qtyInput = document.getElementById("ticketQty");
if (qtyInput) {
    qtyInput.addEventListener("input", updatePrice);
}
// code for dynamic form validation adapted from https://www.geeksforgeeks.org/javascript/form-validation-using-javascript/
var form = document.getElementById("checkoutForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var valid = true;

        var fields = ["visitDate", "ticketType", "ticketQty", "email", "zipCode"];
        for (var i = 0; i < fields.length; i++) {
            document.getElementById(fields[i] + "Error").textContent = "";
        }

        var visitDate = document.getElementById("visitDate").value;
        var ticketType = document.getElementById("ticketType").value;
        var qty = parseInt(document.getElementById("ticketQty").value);
        var email = document.getElementById("email").value;
        var zipCode = document.getElementById("zipCode").value;

        if (!visitDate) {
            document.getElementById("visitDateError").textContent = "Please select a visit date.";
            valid = false;
        }
        if (!ticketType) {
            document.getElementById("ticketTypeError").textContent = "Please select a ticket type.";
            valid = false;
        }
        if (!qty || qty < 1 || qty > 10) {
            document.getElementById("ticketQtyError").textContent = "Enter a quantity between 1 and 10.";
            valid = false;
        }
        if (!email || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
            document.getElementById("emailError").textContent = "Please enter a valid email.";
            valid = false;
        }
        // making sure the zip code is only 5 digits, and disallowing letters
        // restricts a user from entering more than 5 digits 
        if (zipCode.length > 0 && !/^\d{5}$/.test(zipCode)) {
            document.getElementById("zipCodeError").textContent = "Zip code must be 5 digits.";
            valid = false;
        }

        if (valid) {
            window.location.href = "confirmation.html?date=" + visitDate + "&type=" + ticketType + "&qty=" + qty + "&email=" + email;
        }
    });
}
      