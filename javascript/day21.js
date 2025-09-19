let currentDate = new Date();
console.log(currentDate.toString());

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
];


// time format i need : hh:mm:ss :: ex : 18:14:24
// date format i need : DD-MM-YYYY ex 19-09-2025

let todaysDate = currentDate.getDate();
let todaysMonth = currentDate.getMonth();
let todaysYear = currentDate.getFullYear();
let todaysDay = currentDate.getDay()
console.log(`todays date is  ${todaysDate} - ${months[todaysMonth]} - ${todaysYear}- ${days[todaysDay]}`);
let currentHours = currentDate.getHours();
let currentMin = currentDate.getMinutes();
let currentSec = currentDate.getSeconds();
let currentMili = currentDate.getMilliseconds();
console.log(currentHours, currentMin, currentSec, currentMili);
