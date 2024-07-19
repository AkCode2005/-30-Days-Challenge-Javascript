//DAY-4 Loops 

//Activity-1 (For loop)

//Task-1
for (let i = 0; i <=10; i++) {
    const element =i ;
    console.log(element);
    
}  
//Task-2
for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(5 + '*' + i + '=' + 5*i);

}
//Acitvity- 2 (While Loop)

//Task - 3
let sum = 0
let number = 1;
while (number <=10) {
    
    sum+= number;
    number++
} console.log(`The sum of numbers from 1 to 10 is ${sum}`)

//Task-4
let index = 10
while (index >=0) {
    console.log(`value of i is ${index}`)
    index--;
} 

//Actvity - 3 (Do.. while loop)

//Task- 5
let x = 1
do {
    console.log(`value of x is ${x}`);
    x++;
} while (x<=5);

//Task- 6
function factorial(n) {
    let result = 1
    let i = n
    do { 
        result*=i;
        i--;
    } while (i > 0);
    return result;
} const val1 = 6
console.log(`vaule of factorial of ${val1} is ${factorial(val1)}`);

// Activity- 4 (Nestesd loop)

// Task-7
const rows = 5

for (let i = 1; i <= rows; i++) {
    let rowpattern = '';
    for (let j = 1; j <= i; j++) {
        if (j==1) {
            rowpattern += '*';
        } else {
            rowpattern += ' *';
        }
        console.log(rowpattern);
    }
    
}
//Activity- 5 (Loop Control Structure)
//Task - 8

for (let i = 0; i<= 10; i++) {
    if (i==5) {
        console.log(`Value 5 is skip`);
        continue;
    } console.log(`value of i is ${i}`);
}  
//Task- 9
for (let i = 0; i<= 10; i++) {
     if (i==7) {
            console.log(`Detected 7`);
    
            
        } console.log(`value of i is ${i}`)
        
    }