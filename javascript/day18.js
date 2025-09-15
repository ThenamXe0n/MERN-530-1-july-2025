// iteration method in array
// - forEach(cb)
// - map(cb)
// - reduce(cb)
// - some(cb)
// - every(cb)

// for each = > loop over array items
let movieNames = [
  "3 Idiots",
  "Dangal",
  "Gully Boy",
  "Bahubali: The Beginning",
  "Bahubali: The Conclusion",
  "KGF: Chapter 1",
  "KGF: Chapter 2",
  "RRR",
  "Lagaan",
  "Drishyam",
];

// you need to print/log each item of array on console
// for(let idx=0;idx<movieNames.length;idx++){
//     console.log(movieNames[idx])
// }

// let eachMovie = movieNames.forEach((movie) => {
//   return console.log(movie);
// });
// console.log("retured value by foreach", eachMovie);

// -map ===> used to loop over array items and return a array of item (modified items array)
let mapMovie = movieNames.map((movie) => {
  console.log(movie);

  return `movie name is ${movie} `;
});

console.log("retured value by map", mapMovie);

/// make a duplicate array of arr1. and arr2 should have doubled number

let arr1 = [2, 3, 4, 5, 6]; //[4,6,8,10,12]

let arr2 = arr1.map((item) => {
  return item * 5;
});
console.log(arr2);

let check = arr1.every((item) => {
  console.log("checking..");
  return item % 2 === 0;
});

console.log("some", check);

// reduce
let number = [1, 2, 3, 4, 5];
let Total = number.reduce((acc, curr) => {
  console.log("a===>", acc, "  ", "b===>", curr);
  return acc+curr
});
// let Total =
console.log("total",Total)
