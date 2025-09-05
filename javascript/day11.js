// array methods
const inventors = [
  "Nikola Tesla",
  "Thomas Edison",
  "Leonardo da Vinci",
  "Alexander Graham Bell",
  "Marie Curie",
  "James Watt",
];
//   "Galileo Galilei",
//   "Johannes Gutenberg",
//   "Wright Brothers",
//   "Ada Lovelace",

//basic methods
// - access items in array
console.log(inventors[0]);
// - add items in array at end position ==>push(item)
inventors.push("Galileo Galilei", undefined, "abcd");
console.log("pushed three items", inventors);
// -add items in array at start position ==> unshift("items")
inventors.unshift("Ada Lovelace");
console.log("added one at start index", inventors);

//remove items from array(end) ===>pop()
inventors.pop();
console.log("deleted or removed last item of array", inventors);

//remove items from array(start) ==> shift()
inventors.shift();
console.log("removed from start", inventors);

// merge items and convert a array into string === >join()
let joinedArr = inventors.join("/");
console.log("joined array items", joinedArr);

// reverse a array ===> reverse()
inventors.reverse();
console.log("reversed array", inventors);

// find index of item ===> indexOf("item")
console.log(inventors.indexOf("itemsname"));

let charArr = ["A", "B", "D", "E", "G"];

//to add , update, delete item from an index ===> splice(indexNo,deleteconunt,...updatevalue(items))
let skills = ["html", "css", "bootstrap"];

// ============================================part 2===================================
// to get a part of an array ====>slice(startIndex,endIndex)
let alphaChars = ["a", "b", "c", "d"];
console.log("sliced arr", alphaChars.slice(0, 3));
console.log(alphaChars);

let arr1 = ["abc", "def"];
let arr2 = [1, 2, 3, 4, 5, 6];
let arr3 = arr1.concat(arr2, ["hi", "javascript"]);
console.log(arr3);

let voidArr = [];
voidArr.length = 10;
console.log(voidArr.fill("V", 0, 6));
console.log(voidArr);
// console.log(voidArr)

let obj = {
  name: "mindcoders",
  status: true,
};
if (Array.isArray(arr2)) {
  arr2.push("a");
  console.log("pushed a in arr2");
}else{
  obj.subject = "javascript"
  console.log("subject key added in obj object")
}
//how to know if a variable holds an array as a value
console.log(typeof arr2);
console.log(typeof obj);


///======================advance me


//find => to find element in array on behalf of a condition


