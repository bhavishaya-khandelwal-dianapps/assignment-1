//* 7. *Arrays* - Write a program to add and remove elements from an array.


let arr = [1, 2, 3, 4, 5];
console.log(`Initial Array = ${arr}`);


//? Add element in the last 
arr.push(6);
console.log(arr);            //* Updated Array = [ 1, 2, 3, 4, 5, 6 ]


//? Add element in the beginning 
arr.unshift(0);
console.log(arr);           //* Updated Array = [ 0, 1, 2, 3, 4, 5, 6 ]



//? Remove the last element from the array 
arr.pop();
console.log(arr);           //* Updated Array = [ 0, 1, 2, 3, 4, 5 ]



//? Remove the first element from the array  
arr.shift();
console.log(arr);           //* Updated Array = [ 1, 2, 3, 4, 5 ]