
function sayMyName(params) {
console.log("D");
console.log("A");
console.log("N");
console.log("I");
console.log("S");
console.log("H");
}

//sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let results =number1+number2
    //     return results
    return number1+number2
}

const result = addTwoNumbers(3,4)
// console.log("Ans is :", result);

function loginUserMessage(username = "Patel") {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} Just logged in` 
}

// console.log(loginUserMessage("Danish"));

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(200,100,300));

const user = {
    username : "danish",
    price : 199
}

function handelObjet(anyObject){
    console.log('User is ${anyobject.username} and price is ${object.price}')
}

// handelObjet(user)
handelObjet({
    username: "sam",
    price :300
})