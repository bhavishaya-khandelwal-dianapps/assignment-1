//* 13. *Date and Time* - Write a program to display the current date in the format DD-MM-YYYY.

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let todayDate = `${day}-${month}-${year}`;
console.log(todayDate);