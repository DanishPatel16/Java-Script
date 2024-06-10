const name = "danish"
const repoCount = 10

// console.log(name + repoCount + "value");

//console.log(`hello my name is ${name} and my report count is ${repoCount}`);

const gameName = new String ("danish-patel-com");

// console.log(gameName[0]);
console.log(gameName.length);

console.log(gameName.toUpperCase()  );
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString =gameName.slice(-5,3)
console.log(anotherString);

const newStringOne = "    danish    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://danish.com/danish%20patel"
console.log(url.replace('%20','-'))
console.log(url.includes('diensh'));
console.log(gameName.split('-'));