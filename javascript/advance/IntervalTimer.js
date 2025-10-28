// set interval`        ==> to call a function repeatedly after a fixed time delay
// define
// let intervalName  = setInterval(callback function, time in ms eg 1000 - 1s)
// -callback  - function to be executed repeatedly
// -time in ms - time delay between each execution



// /stop 
// clearInterval(intervalName)  ==> to stop the repeated execution of the function

let currentDate = new Date() 
console.log("current date is ",currentDate)


function resetdate(){
    currentDate = new Date()
    let hr = currentDate.getHours().toString().padStart(2,'0')
    let min = currentDate.getMinutes().toString().padStart(2,'0')
    let sec = currentDate.getSeconds().toString().padStart(2,'0')   
    let formatToShow = `${hr} : ${min} : ${sec}`

    document.getElementById("stopWatch").innerHTML = `<h1>${formatToShow}</h1>`
    console.log("date updated")
}


function stop(){
    clearInterval(dateInterval)
}

function start(){
    dateInterval = setInterval(resetdate,1000)
}
let dateInterval;
// let dateInterval = setInterval(resetdate,1000) 

