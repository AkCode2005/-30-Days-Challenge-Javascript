//Day - 8 (ES6+ Features)

//Activity - 1
//Task - 1
let UserName = "Ashish kumar"
let ageofuser = 18
console.log(`User LoggedIn ${UserName} and His age is ${ageofuser}`);

//Task - 2
let UserloggedIn = "Ashish kumar"
let EmailId = "ashishku@gmail.com"
console.log(`Hello ${UserloggedIn} 
How May I Assist you`)

//Activity - 2 (Destructuring Objects and Array)

//Task - 3
const DCHeroes = ["Superman","Batman","Aqauman"];
let[value1,value2] = DCHeroes
console.log(value1,value2);

//Task - 4
const Book = {
    Title: "Sherlok Holmes",
    Author: "Arthur Conan Doyle",
    Year:1927,
}
const {Title,Author} = Book
console.log(Title,Author);

//Actvity - 3 (Spread and Rest operators )
//Task - 5
const ExistingArr = [1,2,3];
const ExtraArr = [4,5,6];
const MyNewArr = [...ExistingArr,...ExtraArr];
console.log(MyNewArr);

//Task - 6
function Sum(...values) {
    return values.reduce((Num,SumofNum) => Num+SumofNum , 0);
}
const result = Sum(20,30,40,20);
console.log(result);

//Activity - 4 (Deaafult Parameter)
//Task - 7
function Num(a,b=1) {
    return a*b;
}
console.log(Num(2,3));
console.log(Num(5));

//Activity - 5 (Enhanced Object Literals)
//Task - 8
function MarketLists(Iteam,Price) {
    const Iteam1 = "Rice" 
    const Price1 = 50
    const Iteam2 = "Wheat"
    const Price2 = 30
    return {
        Iteam1,
        Price1,
        Iteam2,
        Price2,
        totalprice() {
        return `total price of iteam is ${this.Price1+this.Price2}`;
        }
    }
}
const marketLists = MarketLists();
// const {totalprice,...marketlistswithouttotalprice} = marketLists;

// console.log(marketlistswithouttotalprice);
console.log(marketLists);
console.log(marketLists.totalprice());

//Task - 9
let StudName = "Ajay Kumar"
let age = 14
let DateofBirth = "12 Sept 2009"

const studentInfo = {StudName,age,DateofBirth};
console.log(studentInfo);



