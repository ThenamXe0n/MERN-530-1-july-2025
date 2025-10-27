let button = document.getElementById("btn");
let modalElement = document.getElementById("modal");
function showModal() {
  modalElement.style.display = "flex";
}
function hideModal(e) {
  console.log("clicked on:-", e.target.id);

  modalElement.style.display = "none";
}

button.addEventListener("click", showModal);

modalElement.addEventListener("click", hideModal);

function test(e) {
  //   e.stopPropagation();
  e.bubbles = false;
  console.log(e)
  console.log(e.target.value);
}

document.getElementById("form-area").addEventListener("click", test);

// let grandParent = document.querySelector("section");
// let parent = document.getElementById("parent");
// let child = document.getElementById("child");

// grandParent.addEventListener("click", (e) => {
//   console.log(
//     `i am ${e.target.tagName} with id ${e.target.id} and grandparent clicked`
//   );
// });

// parent.addEventListener("click",
//      (e) => {
//   console.log(
//     `i am ${e.target.tagName} with id ${e.target.id} and parent clicked`
//   );
// }
// )

// child.addEventListener("click",
//      (e) => {
//     e.stopPropagation()
//   console.log(
//     `i am ${e.target.tagName} with id ${e.target.id} and child clicked`
//   );
// }
// )
