const name = "Sushan"
const repoCount= 7

console.log('My name is ${name} and my repoCount is ${repCount}'); // My name is Sushan and my repoCount is 7

const gameName = new String ("lalakta")

console.log(gameName[1]);// a
console.log(gameName.__proto__)// {..}
console.log(gameName.toUpperCase());//LALAKTA
console.log(gameName.length);//7
console.log(gameName.charAt(1));//a
console.log(gameName.indexOf('t'));//5


// go through string methods throughly all at mdn docs

const newString = gameName.substring(0,4)
console.log(newString); //lala

const anotherString = gameName.slice(-7,4)
console.log(anotherString);//lala

const newStringOne = "     Sushan     "
console.log(newStringOne);//   Sushan
console.log(newStringOne.trim());//Sushan


const url = "https://Sushan.com/Sushan%20tamang"
console.log(url.replace('%20','%10'));//"https://Sushan.com/Sushan%10tamang"

console.log(url.includes("Sushan"));//true
console.log(url.includes("Rock"))//false

const str = "The girl behind me is beautiful"
const words= str.split(" ")
console.log(words[3])//me
console.log(words[2]);//behind

const chars= str.split(" ")
console.log(chars[3]);

const strCopy = str.split( )
console.log(strCopy) // The girl behind me is beautiful
