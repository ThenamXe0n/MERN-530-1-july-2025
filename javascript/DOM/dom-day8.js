//form handeling in js
//declearation of elements
let form = document.getElementById("myForm");
let studentNameInput = document.getElementById("student_name");
let contactInput = document.getElementById("contact");
let emailInput = document.getElementById("email");

//submit function
function handleFormSubmit(e) {
    e.preventDefault()
    console.log(e)

    if(studentNameInput.value===""){
        alert("all fields are required")
        return
    }

  let data = {
    studentName: studentNameInput.value,
    contact: contactInput.value,
    email: emailInput.value,
  };
  console.log("student details === > ",data)
  alert("form submitted")
  //reset
  studentNameInput.value=""
  contactInput.value=""
}

form.addEventListener("submit",handleFormSubmit);
