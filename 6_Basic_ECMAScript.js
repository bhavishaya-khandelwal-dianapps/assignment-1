//* 6. *Basic ECMAScript* - Use ES6 features to:
//todo --  a. Create an arrow function that calculates the square of a number.
//todo --  b. Use let or const in a block scope.

//? Answer (a) : Arrow function to find the square 
const findSquare = (num) => {
    let sq = num * num;
    return sq;
}

console.log(findSquare(4));
console.log(findSquare(13));




//? Answer (b) : Use let or const in a block scope 

var ct = 0;
function fun(num) {
    let x = Math.floor(Math.random() * 5) + 1;  //* To generate random number from 1 to 5 
    const waiting = "Not Matched";
    ct++;
    if(x == num) { 
        console.log(`Number Matched in ${ct} sec`);
        return; 
    }
    else {
        console.log(waiting);
        fun(num);
    }
}
fun(4);