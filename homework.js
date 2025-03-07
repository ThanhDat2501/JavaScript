// 1. Difference(s) between == and ===?
// ==: compares the value of the variables 
// ===: compares the type and value of the variables
// Ex: 2=="2" ==> True but 2==="2" ==> False 
// because not same the type (2 is Integer, "2" is String)

// 2. Compare let, const, var

// var: function or global scope and allows re-declaration and updates within the same scope.
// let: block scope, allowing updates but not re-declaration within the same block.
// const: block-scoped variables that cannot be reassigned after their initial assignment.
if (true) {
    // var dat = 'deptrai';
    // let dat = 'deptrai'; 
    const dat = 'deptrai'
    // dat = 'khongdeptrai'
    console.log(dat);
}
// console.log(dat)

// Calculate BMI (Body Mass Index)
// formula of BMI is: BMI = weight (kg) / [height (m)]2
let weight = 75;
let height = 1.72;
BMI = weight / height ** 2;
console.log("BMI :", BMI)

// Calculate Simple Interest (principal * rate * time)
let principal = 10000;
let rate = 3.875;
let time = 5;

simpleInterest = principal * rate * time;
console.log("Calculate Simple Interest :", simpleInterest)


// Convert Currency (USD to local currency)

let usd = 1000;
let exchange = 23000;
vnd = usd * exchange;
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
let times = 6 * 60 * 60 + 9 * 60 + 59;
console.log('Calculate Time :', calculateTime(times))