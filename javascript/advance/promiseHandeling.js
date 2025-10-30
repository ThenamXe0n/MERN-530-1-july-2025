// // value extration from Promise
// let orderDeliveryStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("your order is delivered successfully!");
//   }, 10000);
// });

// console.log(orderDeliveryStatus);

// // /way to resolve a promise
// //  1- then catch
// // 2- async and await(ES^6)

// let comingAmt; //null
// console.log("stepper 1")
let moneyToCome = new Promise((resolve, reject) => {
  setTimeout(() => {
    comingAmt = 1000;
    let myBudget = 1000 + comingAmt; //1000+null
      resolve(myBudget)
    // reject("insufficient money");
  }, 4000);
});

// console.log(1000, comingAmt);
// console.log("stepper 2")
// moneyToCome.then((value) => {
//   console.log(value);
// });

async function paymentResult() {
  try {
    let response =await moneyToCome;
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}

// async function result() {
//   try {
//     throw new Error("my custom error");
//     console.log("try started");
//     let response = await moneyToCome;
//     console.log(response);
//     console.log("try ended");
//   } catch (err) {
//     console.log("catch block started");
//     console.log(err.stack);
//   }
// }
// result();
// console.log("Stepper 3")
