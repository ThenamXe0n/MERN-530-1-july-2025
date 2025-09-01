// Types of functions in Javascript
//- normal function (function keyword)
//- function expressions(category)

// 1.Anonymous functions
let myFun = function (a, b) {
  a + b;
  console.log("sdf");
};

// 2.Arrow function (short way to write function)
let myFun2 = (a, b) => {
  console.log();
  return a + b;
};

//3 .IIFE(immidiatly invoked function expression)
(function () {
  console.log("i am IIFE");
})();

//4.
// -pure functions
let item4 = "pineapple";
function pizza(item1, item2, item3) {
  return item1 + item2 + item3;
}

//-impure funtion
function impurepizza(item1, item2, item3) {
  return item1 + item2 + item3 + item4;
}

//-unary function with only single argument

console.log(pizza("cheese", "corn", "chilly"));

// console.log("first", myFun(5, 6));
// console.log("second", myFun2(5, 6));

function car() {
  console.log("car is running");
}

function driver(cb) {
  console.log("started the car");
    
}


driver(car)

//5.callback function
//6.constructor function
//7.generator function
