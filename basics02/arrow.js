const user ={
    username : "danish",
    price : 999,

    welcomeMeassage : function () {
        console.log(`${this.username}, Welcome website`);    
        console.log(this);   
    }
}
// user.welcomeMeassage()
// user.username="sam"
// user.welcomeMeassage()

// console.log(this);

// function dd() {
//     let username = "danish"
//     console.log(this.username);
// }
// dd();

// const instagram = function () {
//     let username = "danish"
//     console.log(this.username);
    
// }



const instagram =  () => {
    let username = "danish"
    console.log(this);
    
}

// instagram()

// const addTwo =(num1, num2)=>{
//     return num1 + num2
// }

// const addTwo =(num1, num2)=>  num1 + num2
// const addTwo =(num1, num2)=>  (num1 + num2)
const addTwo =(num1, num2)=>  ({username : "danish"})


console.log(addTwo(3,4));