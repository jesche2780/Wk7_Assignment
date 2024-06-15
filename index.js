const ages = [3, 9, 23, 64, 2, 8, 28, 93, 52];
    const agesMath = ages[ages.length - 1] - ages[0]

///Created an array of ages, and created a variable "agesMath" that formulated the last number and subtracted it by the first.

function agesAvg(ages) {
    let sum = 0;
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    }
    return sum / ages.length
}
const average = agesAvg(ages);
///Wrote a "for" loop that will tage the ages lengths, and introduced a "sum" of the ages, and then divide that sum by the total numbers.

console.log(ages)
console.log(agesMath)
console.log("Average:" + average)

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
    let letterCount = 0;
    for (let i = 0; i < names.length; i++) {
        letterCount += names[i].length;
///Created a for loop that will add to the number the length of each "names" array entry until reaching the end of the array.
    }
const namesLetterAvg = (letterCount/names.length)

    let namesList = "";
    for (let i = 0; i < names.length; i++) {
        namesList += names[i]
        if (i < names.length - 1) {
            namesList += " ";
///Wrote an if statement that will report the names list point as along as the name isn't the last in the length, and adding to it, otherwise it would create a space between each name.
        }
    }

console.log("Average number of letters per name: " + namesLetterAvg)
console.log(namesList)

///The last element of an array is accessed by using the array.length descriptor to show the length of the array and then using the "-1" such as this: array[array.length - 1]
///The first element of an array is accesssed by calling the array length number "0" such as this: array[0]

    let nameLengths = [];
    for (let i = 0; i < names.length; i++) {
        nameLengths.push(names[i].length);
    }

///Adapted the above script for creating a for loop in order to go through each names in the names array as long as the length, and then pushed to the new array each name in the array until the end of the array is reached.
console.log(nameLengths)

let sumOfNameLengths = 0;
for (let i =0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i];
}
///Used the for loop to calculate the already calculated nameLengths array to then create a sum to add each number of the nameLengths objects together.
console.log("Sum of name Lengths: " + sumOfNameLengths)

const repeatedWords = (word, n) => (word.repeat(n))
///Created a function with the variable "repeatedWords" with the input of "word" and "n" where it returns the "word" script an "n" number of times by using the ".repeat" function.
console.log(repeatedWords('Hello', 3))

const fullName = (firstName, lastName) => (`${firstName} ${lastName}`)
///Created variable "fullName" that accepted input "firstName" and "lastName" that returned the full name by using the literals to combine first name and last name.
console.log(fullName('testfirstName', 'testlastName'))

function isSumGreaterThan100(numbersArr) {
    let sum = 0;
    for (let i=0; i < numbersArr.length; i++) {
        sum += numbersArr[i];
    }
    return sum > 100
}
///Function "isSumGreaterThan100" created to accept array "exampleArr" that then runs a "for" loop and runs a return of "true" if it is greater than 100.
const exampleArr = [2, 5, 60, 75]
console.log(isSumGreaterThan100(exampleArr))

function numAvg(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum / number.length;
}
///Used the average script written earlier in this script to then accept the array in "number", which is then passed from the console.log command that inputs the array.
console.log(numAvg([2, 3, 5]));

function arrayChallenge(arrOne, arrTwo) {
    function calculateAvg(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
    const arrOneAvg = calculateAvg(arrOne)
    const arrSecAvg = calculateAvg(arrTwo)
    return arrOneAvg > arrSecAvg
}

///created function that accepted two arrays where each was then calculated as an average, where two variables were created from the results and then used the "return" to show a binary true or false result if the first is greater than the second.

console.log(arrayChallenge([10, 20, 1000], [5, 25, 35]))

const willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside == true && moneyInPocket > 10.50

///Used a fat arrow function to create variable "willBuyDrink" that accepts two inputs "isHotOutside, moneyInPocket" that then returned a bootlean argument as "true" if it's hot outside and the money in the pocket is greater than 10.50.

console.log(willBuyDrink(true, 11)) 

const worldPeace = (warCurrent, becomeDemocracy) => warCurrent == false && becomeDemocracy == true

///Created a fat arrow function where variable "worldPeace" then determines if we have world peace yet by testing to see if the world is still at war and if democracy is spreading, if the first is false and the second is true, we will have world peace, but if anything else, it is false.

console.log(worldPeace(true, true))
