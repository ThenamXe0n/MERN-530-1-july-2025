//loops in javascript
// -for loop (for)
// -while loop
// -do while loop

// -for in
// for of

//array loop
// forEach
//find
//filter
// map

//for loop syntax
// for(variable(optional);condition(decides loop execution number);iteration(operation)variable++,--){
//     //code
// }

// question :- print table of 2 on console
// let tableIteration = 1
let tableOf = 2;
// console.log("2 X 1 = 2")
// console.log("2 X 2 = 4")
// console.log(`${tableOf} X ${tableIteration} = ${tableOf*tableIteration} `)
// tableIteration++
// console.log(`${tableOf} X ${tableIteration} = ${tableOf*tableIteration} `)
// tableIteration++
// console.log(`${tableOf} X ${tableIteration} = ${tableOf*tableIteration} `)

console.log("===================using loop==============");

for (let tableIteration = 1; tableIteration < 10; tableIteration++) {
  console.log(`${tableOf} X ${tableIteration} = ${tableOf * tableIteration} `);
  console.log(`iteration no ==>${tableIteration} is ended`);
}

let inventors = [
  "Nikola Tesla",
  "Thomas Edison",
  "Leonardo da Vinci",
  "alexander graham bell",
  "Marie Curie",
  "James Watt",
];

console.log(inventors[0]);
console.log(inventors[1]);
console.log(inventors[2]);
console.log(inventors[3]);
console.log(inventors[4]);
console.log(inventors[5]);
console.log(inventors[6]);
console.log(inventors[7]);

for (let i = 0; i <= inventors.length - 1; i++) {
  if (inventors[i].toLowerCase().includes("bell")) {
    console.log(inventors[i]);
    continue;
  }
  console.log(`inventor no ${i + 1} ${inventors[i]}`);
}
