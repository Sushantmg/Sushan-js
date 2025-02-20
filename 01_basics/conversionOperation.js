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


let value = 7
let negvalue = -value
console.log(negvalue);

console.log(2+2);//addition
console.log(2-2);//subtraction
console.log(2**3);//power to 3
console.log(2/2);//divide
console.log(2*2);//multiplication

let str1 ="Hajimemaste watasiwa"
let str2 =" Sushan des"
let str3 = str1 + str2
console.log(str3);

console.log(2+2+"2"+"2");//422 // not prefered type code

//prefix increment
let x=2
const y=++x
console.log(x,y);//3,3

//postfix increment
let x1=2
const y1=x1++
console.log(x1,y1);//3,2












