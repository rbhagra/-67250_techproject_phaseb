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

function addYear(x) {
year =  now.getFullYear();
var element = document.getElementById("copyYear");
if (element) {
    element.innerHTML = year;
}
}