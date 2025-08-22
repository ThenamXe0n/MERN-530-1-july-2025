//global execution context
// variables
// let student;
// var x = 7
// var y =8
// console.log(x)

// var x=10
// console.log(x)

// var can be redeclared (global variable)
// -as well as re assigned

// let cannot be redeclared in same block (block-level variable)
// but can be re assaigned





// ----------------hoisting-------------



const neither be redeclared nor re assigned

// {let student = "aayush"}
// console.log("stundent name is ",student)
// student = "rohit"
// console.log("stundent name is ",student)


{
    let language = "hindi";
language = "english"
    console.log("inner", language);
}


console.log("outer", language);
