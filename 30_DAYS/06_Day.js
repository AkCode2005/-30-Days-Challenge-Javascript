//Day - 6 (Arrays)
//Activity - 1 (Array Creation and Access)
//Task - 1
const num = [1,2,3,4,5];
console.log(num);
//Task-2
console.log(num[0]);
console.log(num[4]);

//Acrivity - 2
//Task - 3
const num2 = [1,2,3,4,5]
console.log(num2);
console.log(num2.push(6));
console.log(num2);
console.log(num2.pop());
console.log(num2);
console.log(num2.shift());
console.log(num2);
console.log(num2.unshift(1))
console.log(num2);

// Activity - 3 (Intermediate)
// Task - 7
const MyNum = [1,2,3,4,5,6,7,8,9,10]
const DoubleNum = MyNum.map( (MyNum) => MyNum * 2);
console.log(DoubleNum);

//Task - 8
const Nums = [0,1,2,3,4,5,6,7,8,9]
const EvenNums = Nums.filter( (nums) => nums % 2 == 0);

console.log(EvenNums);

//Task - 9
const MyNewNum = [0,1,2,3,4,5,6,7,8,9]

// const AddNum = MyNewNum.reduce(function (acc,nums) {
//      console.log(`acc: ${acc} and nums: ${nums}` )
//      return acc + nums;
// },0 )
// console.log(AddNum);
//Or (Alternate Way)
const AddNum = MyNewNum.reduce( (acc,nums) => acc+nums , 0 )
console.log(AddNum);

//Actvity - 4 (Array Iteration)

//Task - 10
const Iteam = ["Apple", "Grapes" , "Mango"] 
for (const fruits of Iteam ) {
    console.log(fruits);
}

//Task - 11
const Heroes = ['Spiderman','Ironman','Hulk','Thor']
Heroes.forEach(function (MCUHero) {
    console.log(MCUHero);
})
//OR (Aletrnate Way)
// Heroes.forEach( (MCU) => {
// console.log(MCU)
// }) 

//Activity - 5 (Two Dimension array)

//Task - 12
let Myarr1 = ["Ashish",19 ,2341]
let Myarr2 = ["Ajay" , 18, 2452]
let Myarr3 = ["Raju", 20 , 2365]

let StudentInfo = [Myarr1, Myarr2, Myarr3]

console.log(StudentInfo);

//Task - 13
console.log(StudentInfo[1][0])//Name
console.log(StudentInfo[1][1])//Age
console.log(StudentInfo[1][2])//ID