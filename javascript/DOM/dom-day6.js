function myEventAction(event) {
  console.log(event);
  if (event.ctrlKey) {
    console.log("button clicked");
  }
  //   console.log(num1 + num2);
}
function handleOnChange(event) {
  console.log(event);
  console.log("input changed");
}
function handleOnInput(event) {
  console.log(event);
  console.log("somthing is typed or input");
}
