// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");

function handleClick(e) {
    console.log(e)
    e.stopPropagation()
  if(e.target===btn1){
    
  }

}
// function handleClick2() {
//   console.log(btn2.innerText);
// }

// btn1.addEventListener("click", handleClick);
// btn2.addEventListener("click",handleClick2);

let parent = document.getElementById('parent-container')

parent.addEventListener("click",handleClick)


function box(){
    console.log("i am container of btn 1")
}

document.getElementById("boxcontainer").addEventListener("click",box)