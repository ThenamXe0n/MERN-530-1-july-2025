//operators in js 
// 1 arithmetic opr. 
// 2 assignment opr.
// 3 comparission opr.
// 4 logic


//arithmetic
// "+" (concate)
// -
// * mutiplication
// / divide
// % reminder

// ++ increment opr.
// -- decrement opr
// ** exponentials (ES^6 2015)

let num1=17
let num2=3

console.log(num1%num2)

num1++
num1++
num1++
num1--
console.log(num1)


// print the output of 5^2
let num3=5 
let result = num3*num3
let exporesult = num3**1000
console.log("result:",exporesult)


// /=======================assignment opr==================
// "=" assignment opr 
// += 
let firstname = "Mind"
let lastname = "coders"
console.log("before",num1)
//+=
num1 = num1+num2
num1+=num2
firstname = firstname+lastname
console.log("after",num1)
//-=
// /=

//========comparission opr=============
// < less than
// <=
// > greater than
// >=

// equality == perform coerrsion before comparing value
console.log("compare 'A'=='a'","A"=="a")

console.log("compare 5==5",5==5)
console.log("compare true==0",true==1)
console.log("compare false==1",false==0)
console.log("compare undefine>=0",undefined>=0)
console.log("compare '6'==5'",'5'==5)

// strict equality === do not perform coerrsion
console.log("compare '5'===5",'5'===5)
console.log("compare true===1",true===1)

// coerrsion



// != not equal to
// !==
console.log(!false)



//logical operators(multi-condition)

// && AND
// || OR
// ! 
let number = 16
let condition1 = number>17
let condition2 = number%2===0
console.log("check",condition1 || condition2)



//string operator / ``
console.log(
    'the value of number is:'+number+ "stored in var"
)
console.log(`the value of number is:${++number} stored in var`) //es6
//the value of number is 16


//(if else) condition ?"if true print this " :"is false print this "
//(if) condition  && "output"

// nullish operator ??

"value 1" ?? "value 2" 
// value 1 = null  print rhs i.e value 2
// value 1 =0,undefined, value 1


