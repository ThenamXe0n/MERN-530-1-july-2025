// Functions in js

// Defination : Function is a reusable block of code . It has two part declaration and calling . you can declare a function in js Using 'Function' keyword
//- function can take input (known as parameters of function) and returns a output (for returning a output use 'return keyword')

// NOTE : 1. function can take multiple input and can only return single output . No function can return 2 or more output
//        2. after returning a output function exits from the block . i.e return will finish the execution of function


// =============function declaration syntax : ======================

/* function functionname(parameters/input){
     
    //code //

    return value
  }
*/

// create a function which will give sum of two number
// Example : 
function sum(num1 = 1, num2 = 2) {
  console.log(`num1 is ${num1} and num2 is ${num2}`);

  let output = num1 + num2;
  return output;
  console.log("finished");
}

//to call a function use ===> functionname() example shown below :- 
console.log(sum());
console.log(sum(2, 2));

// create a function to calculate area of circle
function areaOfCircle() {
  let radius = prompt("enter number");
  let PI = 22 / 7;
  let formula = PI * radius ** 2;
  return `the area of circle whose radius is ${radius} : ${formula}`;
}

console.log(areaOfCircle(5));
console.log(areaOfCircle(10));
