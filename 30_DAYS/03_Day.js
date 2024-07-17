//DAY-3 Control Structure 

//Activity- 1 (if-Else Statement)

//Task-1

const score1 = 20
if (score1 > 0) {
    console.log("This number is Positive");
} else {
    console.log("This number is negative");
}
const score2 = -12
if (score2 < 0) {
    console.log("This number is Positive");
} else {
    console.log("This number is negative");
}
const score3 = 0
if (score3 >= 0) {
    console.log("Zero Number");
}

//Task-2
const EligibleForVote = 18
if (EligibleForVote >= 18){
    console.log("Eligible");
} else {
    console.log("Not Eligible")
}

// Activity- 2 (Nested if-Else)

// Task- 3
// const x = 40
// const y = 50
// const z = 20
// if (x>y) {
//     console.log("x is larger number than y");
// } else if (y<z) {
//     console.log("y is larger number than z");
// } else if (x<z) {
//     console.log("x is larger number than y");
// } else {
//     console.log("y is larger number than x and y");
// }

//Activity- 3 (Switch case)

//Task-4
const Days = 5
switch (Days) {
    case 1:
        console.log("Monday");
        
        break;
    case 2:
            console.log("Tuesday");
            
        break;    
    case 3:
            console.log("Wednesday");
            
        break;    
    case 4:
            console.log("Thursday");
            
        break;    
    case 5:
            console.log("Friday");
            
        break;    
    case 6:
            console.log("Saturday");
            
        break;    
    case 7:
            console.log("Sunday");
            
        break;    
          
    default:
        console.log("Day is not in calender")
        break;
}

//Task-5
const Score = "60-70"
switch (Score) {
    case "91-100":
        console.log("Grade : A")
    
        break;
    case "80-90":
        console.log("Grade : B")
    
        break;
    case "70-80":
        console.log("Grade : C")
    
        break;
    case "60-70":
        console.log("Grade : D")
    
        break;
    case "50-60":
        console.log("Grade : F")
    
        break;

    default:
        console.log("Score is less than 50")
        break;
}

//Activity- 4 (Conditional Operator)

//Task-6
let x = 40;
let result = (x % 2 ==0 ) ? "Even" : "Odd"
x = 30
result = (x % 2 !==0) ? "Even" : "Odd"

console.log(result);

//Activity- 5 (Combining conditions)
let inputyear = 2025

if (inputyear % 100 === 0 ? inputyear % 400 === 0 : inputyear % 4 === 0) {
    console.log("This is leap year");
} else {
    console.log("This is not a leap year");
}





