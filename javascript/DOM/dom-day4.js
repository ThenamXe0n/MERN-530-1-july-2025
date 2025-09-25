/// properties and methods of the DOM elements

// const { createElement } = require("react");

// - attribute properties (method)
//hasAttribute("attribute name")
//getAttribute("attribute name")
//setAttribute("attribute name","value")
//removeAttribute
//attributes

//--------usage of attribute properties (method)------------------
// let myElement = document.querySelector("input");
// console.log("selected element is ", myElement);

// //checking attribute
// console.log(myElement.attributes);

// //adding attribute
// myElement.setAttribute("id", "input1");
// console.log("added id ===>", myElement.attributes);
// myElement.setAttribute("type", "text");
// console.log("added type ===>", myElement.attributes);
// myElement.setAttribute("placeholder", "enter your name");
// console.log("added placeholder ===>", myElement.attributes);

// //check if attribute is present or not

// //check if id attribute is present or not (myElement)
// console.log("check==>", myElement.hasAttribute("name"));

// //get value of id attribute
// console.log("value of id attribute==>", myElement.getAttribute("id"));

// //remove attribute placeholder
// myElement.removeAttribute("placeholder");



//adding and removing methods 
// -createElement("tagname")

let headingTag = document.createElement("h1");
console.log(headingTag)
headingTag.innerText = "dom can create elements"
console.log(headingTag)
document.body.appendChild(headingTag)
document.body.appendChild(headingTag)


// --remove element  element.removeChild(childElement)
// step1: created a ol tag 
//step2: created li tag
// step 3 : append text in li
//step 4: append li in ol
// final step : append ol in body

let olTag = document.createElement("ol")
let item1 = document.createElement("li")
item1.innerText = "mango"
olTag.appendChild(item1)
let item2 = document.createElement("li")
item2.innerText = "apple"
olTag.appendChild(item2)
let item3 = document.createElement("li")
item3.innerText = "orange"
olTag.appendChild(item3)
console.log(olTag)



document.body.appendChild(olTag)