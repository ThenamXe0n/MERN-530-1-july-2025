//while loop

// syntax
// while(//condition = true){
// //block of code
// }
// let selectedNumber = 40;
// let guessNumber = 40;

// console.log("initial statement", selectedNumber === guessNumber);
// while (selectedNumber !== guessNumber) {
//   guessNumber = parseInt(prompt("guess a number b/w 1 to 100"));
//   //   alert(`guessed number is ${guessNumber}`);
//   console.log("loop is running");
// }


// do{
//  guessNumber = parseInt(prompt("guess a number b/w 1 to 100"));
//   //   alert(`guessed number is ${guessNumber}`);
//   console.log("loop is running");
// }while(selectedNumber !== guessNumber)

// pseudo code for number guessing game 
// - selecte or store a random number from 1 to 10 
// - user input (taking number value from user) 
// - compare usernumber and selected number 
//    case 1 : true  ==> correct guess game end  
//    case 2 : false ==> continue taking new guess number from user===> give a hint to user



//create a guesstheNumber function
function guessNumberGame(){
    let randomNumber =Math.ceil(Math.random()*10) 
    console.log(randomNumber)
    let userInput = parseInt(prompt("enter a number"))
    console.log(userInput)
    while(randomNumber!=userInput){
        if(randomNumber>userInput){
            alert("hint: try a bigger number than ${user}")
        }else{
            alert("hint: try smaller number")
        }
        userInput = parseInt(prompt("enter a new number"))
    }

    alert("you guessed correct number")
    return "game over!"
}







