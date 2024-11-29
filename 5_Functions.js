//* 5. *Functions* - Write a function that takes two numbers as arguments, adds them, and returns the result. Call this function with different inputs.


//? Regular function :- 
function sum(a, b) {
    let s = a + b;
    return s;
}



//? Fat Arrow Function :- 
const addTwoNum = (a, b) => {
    return (a + b);
}



console.log(sum(2, 4));
console.log(addTwoNum(2, 4));
console.log(sum(34, 34));
console.log(addTwoNum(34, 34));