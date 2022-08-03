// // SETTING AND SWAPPING 
// //Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

// let myNumber = 42;
// let myName = 'David';

// function swap(myNumber, myName){
//     let temp = "";
//     console.log(myNumber,myName);
//     temp = myNumber;
//     myNumber = myName;
//     myName = temp;
//     console.log(myNumber,myName);
// }
// // // swap(myNumber, myName)
// //     //THIS ALGO SHOULD LOGICALLY WORK WITHOUT HAVING A THIRD VAR TO SWAP WITH BUT I THINK THERE IS SOMETHING GETTING LOST IN THE SYNTAX BECAUSE IT RESONDS WITH NaN
// //     myNumber = myNumber + myName;
// //     myName = myNumber - myNumber;
// //     myNumber = myNumber - myName;


// // //PRINT -52 TO 1066 Print integers from -52 to 1066 using a FOR loop.

// function countThis(startPoint, endPoint){
//     for(let i = startPoint; i<= endPoint; i++){
//         console.log(i);
//     }
// }
// //I WANTED TO DO THIS IN A MORE USER ANTICIPATING KIND OF WAY, WHERE WE WOULD MORE THAN LIKELY
// //NOT GET TO CHOOSE THE NUMBERS BUT RATHER HAVE THE USER CHOOSE THE START AND END POINT
// //countThis(-52, 1066);

// //DONT WORRY BE HAPPY ..Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
// let cheer = beCheerful();

// function beCheerful(){
//         console.log("good morning");
// }
// function cheerRequest(){
//     for(let i = 0; i < 98; i++){
//         beCheerful();

//     }
// }

// //MULTIPLES OF THREE-BUT NOT ALL Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
// var i = -300;
// function countByThree(){
//     while(i<0){
//         i++;
//         if(i===-6 || i=== -3){
//             continue;
//         }
//         console.log("the current count is" + i);
//     }
// }

// // countByThree();

// // Printing Integers with While
// //Print integers from 2000 to 5280, using a WHILE.

// let i = 2000;
// function countConditionally(){
//     while(i<=5280){
//         console.log(i);
//         i++;
//     }
// }
// // countConditionally()

// // You Say It’s Your Birthday
// // If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 
// function bdayFilter(x,y){
//     if(x==3&&y==5){
//         console.log("How did you know?");
//     }
//     else if(x==5&&y==3){
//         console.log("How did you know?");
//     }
//     else{
//         console.log("Just another day...");
//     }



// LEAP YEAR Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

// function leapYear(yearInput){
//     if(yearInput % 4 == 0 || yearInput % 400 == 0 && yearInput % 100 != 0){
//         console.log("Happy leap year");
//     }
//     else{
//         console.log("not a leap year")
//     }
// }


// leapYear(2020)

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

// function printAndCount(){
//     let count = 0;
//     for(var i = 512; i <= 4096; i++){
//         if(i % 5 == 0){
//             console.log(i);
//             count++;
//         }
//     }
// console.log(count);
// }

// printAndCount()

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.
// function countBySix(){
//     let start = 6;
//     let end = 60000;
    
//     while(start<=end){
//         if(start % 6 == 0){
//             console.log(start);
//         }
//         start++;
//     }
// }


// countBySix()

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

// function countAndCall(){
//     for(var i = 1; i<=100; i++){
//         if(i%5!=0 && i%10!=0)
//             console.log(i);
//         else if(i%5==0 && i%10!=0){
//             console.log("coding")
//         }
//         else if(i%5==0 && i%10==0){
//             console.log("coding dojo")
//         }
//     }
// }

// countAndCall()

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut? DO I NEED A SHORTCUT?
// let sum = 0;
// function addOdd(){
//     for(var i = -3000000; i<=300000; i++){
//         if(i%2 !=0){
//             sum = sum + i;
//         }
//     }
// console.log(sum);
// }

// addOdd()

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.
// function countDownBy4(){
//     let start = 2016;
//     while(start > 0){
//         if(start%2==0){
//             console.log(start);
//         }
//         start = start - 4;
//     }    
// }

// countDownBy4()

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

// function complexCountdown(lowNum, highNum, mult){
//     for(let i = highNum; i>lowNum; i--){
//         if(i%mult==0){
//             console.log(i);
//         }
//     }
// }
// complexCountdown(2,9,3)

//THE FINAL COUNTDOWN // I DID THIS AS AN ACTUAL COUNTDOWN NOT A COUNT UP SO IT IS TECHNICALLY NO RIGHT. 
// function finalCountWhile(param1,param2,param3,param4){
//     let i = param2;
//     while(i>param3){
//         if(i%param1==0 && i!=param4){
//             console.log(i)
//         }
//         i = i -1;
//     }
// }

// function finalCount(mult,highNum,lowNum,except){
//     for(let i = highNum; i>lowNum;i--){
//         if(i%mult==0 && i!=except){
//             console.log(i);
//         }
//     }
// }

// finalCountWhile(3,17,5,9)