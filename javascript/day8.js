//conditionals // condition statements

// if else
// if (condition) {
//   //code
// }

// condition true ====> executes the code

// function check(conditionOutput) {
//   console.log("function started");
//   if (conditionOutput) {
//     return "condition is true";
//   } else {
//     return "condition is false ";
//   }
//   console.log("function ended");
// }
let num = 12;
console.log("is 12 is a even number : ", check(num % 2 !== 0));


function eligibleToRide(age=2,license=false) {
  if (age >= 18 && license===true) {
    return "eligible";
  } else if (age >= 15 || license ===true) {
    return "eligible on learning license";
  } else {
    return "you are not eligible to ride ";
  }
}
// console.log("check eligibility for age 19 : ", eligibleToRide(19,false))
console.log("check eligibility for age 16 : ", eligibleToRide(13,false))
// console.log("check eligibility for age 10 : ", eligibleToRide(10,false))



//concise way to write conditionals
function check(conditionOutput) {
  console.log("function started");
//   if (conditionOutput) {
//     return "condition is true";
//   } else {
//     return "condition is false ";
//   }

//   shorter syntax :-
//short circuitimg
"A"==="A" && console.log("your if condition  is true")

conditionOutput ? console.log("condition is true") : console.log("sdfds")
  console.log("function ended");
}


// if( ) &&






