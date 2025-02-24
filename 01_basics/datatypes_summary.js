// primitive 
// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

// Non-primitve ( reference)
// array , objects, functions

const num = 1
const id = Symbol("123")
const anotherID = Symbol("123")
console.log(id === anotherID)



// Non-primitve ( reference)
// array , objects, functions

const heros = ["SpiderMan","BatMan","WonderWoman"]; // array


let myObj = {
    F_name:"Sushan",age: 20
}

const myFunction = function()
{
    console.log("Hello World")   
}

// primitive ( STACK) and non-primitive ( HEAP )

let myYouTubeName = "SushanG"

let anothername = myYouTubeName
anothername = "Susg"

console.log(myYouTubeName);
console.log(anothername);

let userOne = {                          //heap
    email : "Sushan@gmail.com", 
    pp : "sus@gg"
}
let userTwo = userOne

userTwo.email = "Susg@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

