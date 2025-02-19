let score="50abc"

console.log(typeof score);//string
console.log(typeof (score));//string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//number
console.log(valueInNumber);//not a number

let score_M = null
console.log(typeof score_M)//object
console.log(score_M);//null

let score_S =undefined
console.log(typeof score_S);//undefined
console.log(score_S);//undefined

let score_C = true
console.log(typeof score_C)//boolean
console.log(score_C);// 1

let score_B = false
console.log(typeof score_B);//boolean
console.log(score_B);// 0

//"50" => 50
//"50abc" => NaN (not a number)
// true => 1 , false => 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn); // true



// 1=> true , 2=> false
//" " => false 
// "Sushan" => true

let anyNumber = "20"

let stringNumber = String(anyNumber)
console.log(stringNumber);//20
console.log(typeof stringNumber);//string






