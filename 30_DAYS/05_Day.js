//DAY-5 Functions

//Activiy-1 (Function Declaration)
 
//Task-1
let x = 19;

function num(x) {
 if (x % 2 ==0) {
    console.log(`value of x is even: ${x}`)
 } else { 
    console.log(`value of x is odd: ${x}`)
}
   }
num(x);

//Task-2
let y = 5
let result = sqaure(y);
function sqaure(y) {
    return y*y;
} 
sqaure(y);
console.log(`the square of ${y} is ${result}`);

//Activity- 2 (Function Expression)
//Task-3
let num1 = 50;
let num2 = 40;
function MaximumNum(num1,num2) {
//     if (num1>num2) {
//         console.log(`value of num1 is Maximum ${num1}`);
//     } else {
//         console.log(`value of num2 is Maximum ${num2}`);
//     }
// }
// Or Differnet Approach
if (num1 > num2) {
    console.log(`The maximum of ${num1} and ${num2} is ${num1}`);
} else if (num2 > num1) {
    console.log(`The maximum of ${num1} and ${num2} is ${num2}`);
} else {
    console.log(`${num1} and ${num2} are equal`);
}
   }
MaximumNum(num1,num2);

//Task-4
function isuserLoggedIn(Name = "Ashish" , SureName = " Kumar" ){
    return Name + SureName
} 
isuserLoggedIn(Name = "Ashish" , SureName = " Kumar" );
console.log(`user is Now Logged in ${Name + SureName}`);

//Activity- 3 (Arrow Function)

//Task- 5
const AddNum = (num1,num2) => {
    return num1+num2
} 
console.log(AddNum(4,5));

//Task- 6
const containeCharacter = (str, char) => str.includes(char);

console.log(containeCharacter("Hey eveyone", "e"));
console.log(containeCharacter("Hey eveyone", "k"));

//Activity - 4 
//Task- 7
function ProductOfTwoNumbe(a,b = 1) {
    return a*b
}
console.log(ProductOfTwoNumbe(2,));
console.log(ProductOfTwoNumbe(2,5));

//Task- 8
function UserloggedIn(Name,age = 18) {
    
    return `Welcome to CodeZone
 ${Name}, Age: ${age}`;
}
// console.log(UserloggedIn("Ashish"));
console.log(UserloggedIn("Manish", 21));

//Activity - 5 (High Order Function)
//Task- 9 
function IsuserLogIn(fn,times) {
    return function() {
        for (let i =0; i < times ; i++) {
        fn();
        }
    }
}
const UserName = () => console.log('Hello! Ashish');
const UserLogInThreeTimes = IsuserLogIn(UserName,3);
UserLogInThreeTimes();

//Task- 10
function compose(func1,func2,value) {
    return func2(func1(value));
}
const add = (x) => x + 5
const Multiple = (x) => x*8
const Result = compose(add,Multiple,4); //((4+5) * 8)

console.log(Result);






