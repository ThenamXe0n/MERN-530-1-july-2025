let inventors = [
  "Nikola Tesla",
  "Thomas Edison",
  "Leonardo da Vinci",
  "Alexander Graham Bell",
  "Marie Curie",
  "James Watt",
];
("nikola tesla");

console.log(inventors.indexOf("Tesla"));
//find => to find element in array on behalf of a condition

console.log("is exist in string", inventors[1].toLowerCase().includes("tesla"));

// console.log(inventors.find(callbackFn));
let count = 0;
let inventorFound = inventors.find((pradyumn) => {
    console.log("pradyumn is ",pradyumn)
  console.log("loop", count);
  count = count + 1;
  return pradyumn.toLowerCase().includes("bell");
});
console.log(inventorFound)
