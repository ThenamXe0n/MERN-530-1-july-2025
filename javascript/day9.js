//switch case statements

// switch (expression) {
//   case "caseName": //code to execute
// }

// switch : create statement
// case : used to create different cases
// brake : brake the statement *(exit)
// default : used for default cases

let expression = "jgjhghjg";

switch (expression) {
  case "abc":
    console.log("case abc executed");
    break;
  case "case1":
    console.log("case1 executed");
    break;
  case "hi":
    console.log();
    break;
  default:
    console.log("no such case exist");
}

///create a movie ticket price checker using swith case

function movieCheker() {
  let movieName = prompt("enter movie name");
  let lowerFormat = movieName.toLowerCase()
  console.log(movieName,"==>",lowerFormat)
  switch (lowerFormat) {
    case "avatar":
      alert(`${movieName} movie ticket price is 200Rs`);
      break;
    case "iron man":
      alert(`${movieName} movie ticket price is 600Rs`);
      break;
    case "avengers end game":
      alert(`${movieName} movie ticket price is 400Rs`);
      break;
    case "super man ":
      alert(`${movieName} movie ticket price is 100Rs`);
      break;
    case "saiyyara":
      alert(`${movieName} movie ticket price is 2000Rs`);
      break;
    default:
      alert("movie not found!");
  }
}

let booking = confirm("want to book a movie?");
alert(`booking status is : ${booking}`)

if (booking) {
  movieCheker();
}
