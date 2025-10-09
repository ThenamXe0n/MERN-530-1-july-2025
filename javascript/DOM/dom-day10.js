let button = document.getElementById("keyButton");
let clapAudio = document.getElementById('clapAudio')

function action(eventObject) {
  console.log(eventObject);
  if(eventObject.key==="c"){
    clapAudio.play()
  }
}

window.addEventListener("keydown", action);
