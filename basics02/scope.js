// let a = 300
if (true)
{
    let a =10
    const b =20
    // var c = 30
    // console.log("Inner :",a)

}
// console.log("Outer :",a);
// console.log(b);
// console.log(c);


function one() {
    const username = "danish"
    function two() {
        const website = "YT"
        console.log(username);
    }
    //console.log(website);
    two();
}
// one()


 if (true) {
    const username = "danish"
    if (username ==="danish") {
        const website= " YT"
        //console.log(username + website);
        
    }
    //console.log(website);
 }
 //console.log(username);

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ IMP ++++++++++++++++++++++++++++++++++++++++=

console.log(addone(5));
function addone(num) {
    return num +1 
}
const addTwo = function (num)
{
    return num +2
    }
addTwo(5)