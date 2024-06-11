//const tinderUser = new Object() //SinglTon object
const  tinderUser={}
tinderUser.id = "123abc",
tinderUser.name="sammy",
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regulareUser ={
    email :"some@gmail.com",
    fullName : {
        userfullname : {
            firstname : "Danish",
            lastname : "Patel"
        }
    }
}
//console.log(regulareUser.fullName.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// //const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2,obj4)

const obj3 = {...obj1,...obj2}
console.log(obj3);
//console.log([obj1][obj2]);

// const users = [{
//     id:1,
//     email :"danish@gmial.com"
// },
// {
//     id:2,
//     email :"danish@gmial.com"
// },
// {
//     id:3,
//     email :"danish@gmial.com"
// },
// {
//     id:3,
//     email :"danish@gmial.com"
// }
// ]

// console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name")); // 
