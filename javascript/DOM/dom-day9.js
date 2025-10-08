// image blob url generator

let urlInput = document.getElementById("profile");
let uploadFileInput = document.getElementById("upload");
let uploadButton = document.getElementById("btn");
let profileImage = document.getElementById("profilePic");

function handleUploadProfile() {
  profileImage.src = urlInput.value;
}
function handleUploadProfileByFile(e) {
  console.log(e);
  if (e.isTrusted) {
    let url = URL.createObjectURL(uploadFileInput.files[0]);
    profileImage.src = url;
  }
}

// uploadButton.addEventListener("click", handleUploadProfile);
uploadButton.addEventListener("click", handleUploadProfileByFile);
