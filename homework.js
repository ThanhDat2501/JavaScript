// 1. Difference(s) between == and ===?
// ==: compares the value of the variables 
// ===: compares the type and value of the variables
// Ex: 2=="2" ==> True but 2==="2" ==> False 
// because not same the type (2 is Integer, "2" is String)

// 2. Compare let, const, var

// var: function or global scope and allows re-declaration and updates within the same scope.
// let: block scope, allowing updates but not re-declaration within the same block.
// const: block-scoped variables that cannot be reassigned after their initial assignment.


// Calculate BMI (Body Mass Index)
// formula of BMI is: BMI = weight (kg) / [height (m)]2
const weight = 75;
const height = 1.72;
const BMI = weight / height ** 2;
console.log("BMI :", BMI)

// Calculate Simple Interest (principal * rate * time)
const principal = 10000;
const rate = 3.875;
const time = 5;

const simpleInterest = principal * rate * time;
console.log("Calculate Simple Interest :", simpleInterest)


// Convert Currency (USD to local currency)

const usd = 1000;
const exchange = 23000;
const vnd = usd * exchange;
console.log(`USD = ${usd} convert to VND =`, vnd)


// Calculate Time (hours:minutes:seconds)

function calculateTime(second) {
    let hours = 0;
    let minutes = 0;
    if (second < 0) {
        return "Not exist time";
    }
    else {
        if (second >= 60) {
            minutes = Math.floor(second / 60);
            second = second % 60;
        }
        if (minutes >= 60) {
            hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
        }
    }
    return `${hours} : ${minutes} : ${second}`;
}
const times = 6 * 60 * 60 + 9 * 60 + 59;
console.log('Calculate Time :', calculateTime(times))