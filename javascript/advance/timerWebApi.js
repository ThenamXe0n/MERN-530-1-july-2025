//timier api calls

// setTimeout(callback,timing(in ms eg 1000 - 1s)) --- to delay execution of a function
// setInterval(callback,timing(in ms eg 1000 - 1s)) --- to execute a function repeatedly at specified intervals

// clearTimeout(timioutName / refence variable of timeout)
// clearInterval(timeIntervalName / refence variable of timeout)

// Example of setTimeout
// console.log("Start of Script"); //delay by 1 min
let outputScreen = document.getElementById("output");
let startButton = document.getElementById("startButton");
let cancelButton = document.getElementById("cancelButton");
let completeFuncTimer;

function lineOne() {
  console.log("Start of Script");
}

// let delayedPrint =lineOne(); //non delayed
let delayedPrint = setTimeout(lineOne, 3000);
clearTimeout(delayedPrint); //to cancel the timeout before it executes
console.log("a");

//starter function

function delayedOperation1() {
  outputScreen.innerHTML = "<h2>function completed</h2>";
  alert("function completed");
}
function startTask() {
  outputScreen.innerHTML = "<h1>...Loading</h1>";
  completeFuncTimer = setTimeout(delayedOperation1,4000)
}


startButton.addEventListener("click",startTask)

function cancelTask() {
    clearTimeout(completeFuncTimer);
    console.log("cancelling the task")
}

cancelButton.addEventListener("click",cancelTask)