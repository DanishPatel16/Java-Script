//singleton (created when we create through constructor)
// object.create


// Object literals
const mySym = Symbol("key1")

const JsUser = {
    name : "Danish",
    "full Name ": "Danish Patel",
    [mySym] : "key1",
    age : 18,
    location : "Nashik",
    email : "danish@gmail.com",
    isLoggedIn :false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["full Name"]);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email= "patel@gmail.com"
//Object.freeze(JsUser)
JsUser.email= "Ganesh@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Danish");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());