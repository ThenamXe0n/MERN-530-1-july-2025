//form handeling in js
//declearation of elements
let form = document.getElementById("myForm");
let studentNameInput = document.getElementById("student_name");
let contactInput = document.getElementById("contact");
let emailInput = document.getElementById("email");
let profileInput = document.getElementById("profile");
let tableDataBody = document.getElementById("tableBody");

//submit function
function handleFormSubmit(e) {
  e.preventDefault();
  console.log(e);

  if (studentNameInput.value === "") {
    alert("all fields are required");
    return;
  }

  let data = {
    studentName: studentNameInput.value,
    contact: contactInput.value,
    email: emailInput.value,
    profileUrl: URL.createObjectURL(profileInput.files[0]) ,
  };

  handleAddDataInTable(
    data.studentName,
    data.contact,
    data.email,
    data.profileUrl
  );
  console.log("student details === > ", data);
  alert("form submitted");
  //reset
  studentNameInput.value = "";
  contactInput.value = "";
  emailInput.value = "";
}

form.addEventListener("submit", handleFormSubmit);

// ===================append data in table============

function handleAddDataInTable(name, contact, email, profile) {
  let htmlFormat = ` <tr>
         <td style="display: flex;align-items: center;gap: 4px;">
            <div
              style="
                height: 50px;
                width: 50px;
                border-radius: 100%;
                border: 2px solid;
                overflow:hidden;
              "
            >
              <img
                style="width: 100%; height: 100%; object-fit: cover"
                src=${profile}
                alt="profile_pic"
              />
            </div>
            ${name}
          </td>
          <td>${contact}</td>
          <td>${email}</td>
        </tr>`;

  //appending or adding html format in table body i.e tableDataBody
  tableDataBody.innerHTML += htmlFormat;
}
