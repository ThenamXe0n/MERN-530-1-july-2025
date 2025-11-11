// event loop in js

console.log("a");

console.log("code execution started");

let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hi");
  }, 2000);
});

setTimeout(() => {
  console.log("item delivered .");
}, 2000);
console.log(promiseOne.then((value)=>console.log(value)))
console.log("ended");

// result
//a
//"code execution started"
//item delivered or hi
//ended
//item delevered
