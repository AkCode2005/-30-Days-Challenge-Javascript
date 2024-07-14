// Day-2 Operators

//Activity-1

//Task-1 (ADD)
let A = 20
let B = 10
let C = A + B
console.log(C);
//Task-2 (SUBTRACT)
A = 30
B = 10
C = A - B
console.log(C);
//Task-3 (MULTIPLY)
A = 3
B = 5
C = A * B
console.log(C);
//Task- 4 (DIVISION)
A = 12
B = 3
C = A/B
console.log(C);
//Task-5 (Remainder)
A = 5
B = 3
C = A%B
console.log(C);

//Activity - 2 (Assignment Operator)

//Task-6
let a = 10
let b = 20
console.log(a += b);

//Task-7
a = 50
b = 30
console.log(a -=b);

//Activity - 3 (Comparsion)

//Task-8
let Studentscore = 80
let Studentscore2 = 70
console.log(Studentscore > Studentscore2)
console.log(Studentscore < Studentscore2)

//Task-9
let score1 = 90
let score2 = 95
console.log(score1 >= score2);
console.log(score1 <= score2);

//Task- 10 
let x = 2
let y = 2
console.log(x == y);
console.log("2" == 2); 
console.log("2" === 2);

//Note - Here in above eg. the "==" => can convert the datatype then output will be come true.
//"===" => strictly Equality, it can check the datatype if it will found different datatype then output will be come False.
// Try to avoid to use in comparison operator of null and Undefined datatype because it get convert value the of it.
// Comparison and Equality Check are two different.

//Activity - 4 (Logical Operator)

//Task-11
let xValue = 4
let yValue = 2
console.log(xValue > yValue && xValue < yValue ); // && => AND
console.log(xValue > yValue && yValue < xValue);

//Task-12
xValue = 6
yValue = 5
console.log(xValue > yValue || xValue < yValue); // || => OR
console.log(xValue < yValue || xValue == yValue);

//Task-13
xValue = 0
yValue = 1
console.log(!xValue); // != NOT
console.log(!yValue);

//Activity- 5 (Ternary or Conditional operators) 

//Task-14
let age = 18
let EligibleForVote = (age >= 18) ? "Eligible" : "Not Eligible"

console.log(EligibleForVote);










