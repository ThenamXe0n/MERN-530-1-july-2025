let mybutton = document.getElementById("myBtn");
let inputBox = document.getElementById("myInput");
let colorInputBox = document.getElementById("colorInput");

//to add event listener in a element ====> elementName.addEventListener("eventname", functionname)
mybutton.addEventListener("click", myFunction);
mybutton.addEventListener("mouseup", myFunction);
inputBox.addEventListener("input", colorChanger);
colorInputBox.addEventListener("input", colorChanger);

function myFunction(event) {
  console.log((event.target.innerText = "by"));
  alert("button clicked");
  console.log(event.target.id,event.target.value)
  inputBox.value = ""
}

//event capturing (event ka pata lagana ki konsa event chala hai aur kaha se chala hai)
// every event listener function returns an event object

// function myFunction(event){
//     console.log(event.target.innerText="by")
//     alert("button clicked");
// }

// -- create a screen color changer
// -user can enter a color name in input
// -and screen color will change according input value

function colorChanger(e) {
     console.log(e.target.id,e.target.value)
  console.log(e.target.value);
  document.querySelector('h1').style.color = e.target.value;
  colorInputBox.value = e.target.value;
}
