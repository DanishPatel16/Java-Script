//Primitve datatypes =>there are 7 types of data types.

// String, Number, Bolean, null, undefined, bigInt, Symbol(To make any value as unique)
const score= 100
const ScorValue=1000.3

const isLoggedIn = false
const outsideTemp= null
let userEmail

const id= Symbol('123')
const anotherID = Symbol('123')

// console.log(id===anotherID);

const bigNumber = 543234424244n
// console.log(typeof bigNumber );


// **************************************************************************************
//Reference (Non Prmitive)

//Array, Object, Functions


//Array
const heros = ["Danish", "Ganesh", "Akshay"];

//Object
let  myObject = {
    name : "Danish",
    age : 22,
    email : "danish@gmail.com"
}

//Functions
const myfunction= function(){
    console.log("Hi Danish");
}

console.log(typeof myfunction);
console.log(typeof myObject);
