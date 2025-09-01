//NUMBERS and methods
let num1 = +"5"
let num2 = 5
let str = +"abcd"
console.log(num1+num2) //output : 55
console.log(+num1+num2)

console.log(typeof(num1))
//convert a string into number (method : parseInt())
console.log(typeof(str))

// function sum(){
//     let a = parseInt(prompt("enter number 1"))
//     let b = parseInt(prompt("enter number 2"))
//     console.log(a,b,"=>" , a+b)
// }
// sum()

console.log(num2.toString(),"=>",num2)


//number methods
// toExponential()
let testNumber = 155.228177
console.log(testNumber.toExponential(3)) //fraction digits fix
console.log("fixed value",testNumber.toFixed(4))

console.log(testNumber.toPrecision(3))



//Math object
// exponential of a number
console.log("2 cube is : ",Math.pow(2,100))

//square root of number
// console.log("square root of 625 is :" , Math.SQRT2

// console.log(Math.max(1,2,3,4,5,6))



// round of
console.log("round of :=>",Math.round(2.3))

// ceil (round up)
console.log("ceil :=>",Math.ceil(2.3))

//floor (round down)
console.log("floor value = >",Math.floor(2.888))


//generate a random number Math.random()
Math.ceil(Math.random()*15)
