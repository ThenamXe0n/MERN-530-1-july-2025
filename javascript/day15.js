//array searching and sorting methods (advance)

// array searching methods
// 1. find
// syntax :
// arrayName.find(callbackFn)
// let arr = ["😁","🤣","🫡","🦁"]
// // example :
// function cb(item){
// console.log(item)
// return item==="🫡"
// }

// console.log("found",arr.find((item)=>{
// console.log(item)
// return item==="🫡"
// }))

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

//find a movie which includes gal in its name

// console.log(movieNames[1].includes('gal'))
// console.log(movieNames.indexOf("gal"))
// console.log(movieNames[2])

// console.log(
  movieNames.find((movie) => {
    //code space
    console.log("movie name is ", movie);
    return movie.includes("Gal");
  })

// function findMovieByName(name) {
//   for (let i = 0; i < movieNames.length; i++) {
//     console.log("mov",movieNames[i]);
//     if(movieNames[i].includes(name)){
//         return movieNames[i]
//     }
//   }
// }

// console.log(findMovieByName("gal"))



//filter 
let filteredMovie =  movieNames.filter((i)=>{
return i.includes("aksdhfjkh")
})

console.log("filter",filteredMovie)







