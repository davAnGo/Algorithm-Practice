// Rockin’ the Dojo Sweatshirt
// Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.

// function sweatshirtPricing(numOfShirts){
//     cost = 0;
//     discount1 = 20-(20*.09);
//     discount2 = 20-(20*.19);
//     discount3 = 20-(20*.35);
//     if(numOfShirts === 2){
//         cost = Math.ceil(numOfShirts*discount1);
//     }
//     else if(numOfShirts === 3){
//         cost = Math.ceil(numOfShirts*discount2);
//     }
//     else if(numOfShirts >= 4){
//         cost = Math.ceil(numOfShirts*discount3);
//     }
//     console.log(cost);
//     return cost;
// }
// sweatshirtPricing(3)


// function extractDigit(num, digitNum){
//     let factor = 1;
//     let answer = 0;

//     if(digitNum === 0){
//         answer = Math.floor(num%10);
//     }
//     else if(digitNum>0){
//         while(digitNum>0){
//             factor=factor*10;
//             digitNum--;
//         }
//         answer = Math.floor((num/factor)%10);
        
//     }
//     console.log(answer);
// }
// extractDigit(9876543210,9)

//EXTRACTING DIGITS AFTER I REALIZED HOW UNNECESSARILY DIFFICULT I MADE IT THE FIRST TIME
// function extractDigit(num, digitNum){
//     while(digitNum>0){
//         num = num/10;
//         digitNum--;
//     }
//     answer = Math.floor((num)%10);
//     console.log(answer);
// }

// extractDigit(2743,0)

// Most Significant Digit
// function findSig(userInput){
//     while(userInput>10){
//         userInput=userInput/10;
//         console.log(userInput);
//     }
//     answer = Math.floor((userInput));
//     console.log(answer);
// }

// findSig(2143)