console.log("stings in javascript");


// /string methods (string predefined function )
let str = "javaScript java java"

//find length of string (string.length)
console.log(`the length of given string is ${str.length}`)

// check char in string string.includes
let word = "java"
//check if word is present in given string str
console.log("check",str.includes(word))

//check position of word i.e (index no) indexOf() first index of first occuring string
console.log("position of given word in str is :",str.indexOf(word,2))
console.log("last index",str.lastIndexOf(word))

//charAt() str[index]
console.log(str.charAt(11),str[11])



/// getting index of last letter of matched word
console.log("index of java",str.indexOf(word))

console.log("index of last char of java",str.indexOf(word)+word.length-1)
console.log(str.charAt(3))



//trim method
let word2 = "javascript  programming"
console.log("length of word2 is :",word2.trim())
console.log("length of word2 is :",word2.trimStart())
console.log("length of word2 is :",word2.trimEnd())

//padding methods
let card = '5464'

console.log("cardno:",card.padStart(10,'*'))
console.log("cardno:",card.padEnd(10,'*'))

//concat method
let word3 = str.concat(word2,card)
console.log(str+word2+card)

//slice method
//extract programming from word2
// let toExtract = "programming"
// let start=word2.indexOf(toExtract)
// let end=start+toExtract.length
// let extractedPart = word2.slice(start,end)
// console.log(word2.charAt(22))
// console.log(`start index is${start} and end index is ${end}`,extractedPart)



let greet =  "hellow"
console.log(greet.slice(0,3))
console.log(word2.slice(3))
console.log(word2.slice(-4,-2))

console.log("subStr",word2.substring(-4,-2))


//split => convert a string into array and splits it char as array items 
let name = "mindcoders-learn-code-succeed"
// let arr=name.split("-")
// console.log(typeof(arr))
console.log(name.replaceAll(" e ","*"))


