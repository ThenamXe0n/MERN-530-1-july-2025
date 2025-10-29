//console.log()

// /states of a promise
// -pending
// -fulfilled
// -rejected

// to create custom promise (new Promise())
// -params => callback functions (resolve, reject)

// function result(resolve, reject) {
//   resolve("I got a new iPhone");
//   //   reject("No gift this time");
// }

//example 1
let iphoneGift = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I got a Iphone");
  },4000);
});
// console.log(iphoneGift); //pending

//handling a promise

// iphoneGift.then(callback)
// iphoneGift
//   .then((value) => {
//     console.log(value);
//     return "congrats"+" "+value
//   })
//   .then((value) => {
//     console.log("steper 2",value)
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function finalresult() {
  let result1 =  iphoneGift;
  console.log(`reult is ${result1}`);
}
finalresult();
