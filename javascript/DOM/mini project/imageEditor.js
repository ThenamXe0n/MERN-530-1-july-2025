//declearation of dom elements
let urlInputField = document.getElementById("imgURL");
let nameInputField = document.getElementById("name");
let backgroundInputField = document.getElementById("background");
let fontColorInputField = document.getElementById("font");
let borderWidthInputField = document.getElementById("border");
let blurInputField = document.getElementById("blur");

let imageElement = document.getElementById("poster_img");
let imageName = document.getElementById("imageName");

function handleNameChange() {
  imageName.innerText = nameInputField.value;
}

function handleChangeImage() {
  imageElement.src = urlInputField.value;
  alert("Image changed successfully");
}

function handleChangeBackground() {
  document.body.style.background = backgroundInputField.value;
}
function handleChangeFontColor() {
  document.body.style.color = fontColorInputField.value;
}

function handleChangeBorderWidth() {
  imageElement.style.borderWidth = `${borderWidthInputField.value}px`;
}

function applyBlurEffect(){
    imageElement.style.filter = `grayscale(${blurInputField.value}px)`
}

//adding event listeners
urlInputField.addEventListener("change", handleChangeImage);
nameInputField.addEventListener("change", handleNameChange);
backgroundInputField.addEventListener("input", handleChangeBackground);
fontColorInputField.addEventListener("input", handleChangeFontColor);
borderWidthInputField.addEventListener("input", handleChangeBorderWidth);
blurInputField.addEventListener("input",applyBlurEffect)
