//* 14. *Timing-Based Events* - Write a program that:
//todo --- a. Logs "Hello, World!" to the console after 3 seconds using setTimeout.
//todo --- b. Logs the current time to the console every second using setInterval.



//? Answer (a) : 
setTimeout(() => {
    console.log("Hello, World!!");
}, 3000); 






//? Answer (b) :
const getCurrentTime = () => {
    let date = new Date;
    let currentTime = date.toLocaleTimeString();
    return currentTime;
}

setInterval(() => {
    console.log(getCurrentTime());
}, 1000);