//functions in js
/*const readline = require("readline-sync");
let num = Number(readline.question());
console.log("Inputed Value :",num);
let nums = ["A","B"];
console.log(nums.length);
console.log(nums[0]);*/

function addTwoNumber(number1,number2)
{
    let sum = number1 + number2;
    console.log("Total Sum : ",sum);
}
addTwoNumber(10,20);

function getMax(num1,num2)
{
    return num1 > num2 ? num1 : num2;
}

let maxValue = getMax(25,55);
console.log(`MaxValue : ${maxValue}`);

function strCheck(str="Default Value")
{
    console.log(str);
}

strCheck();
strCheck("This is inputed string");

//use one function inside a function

function isPrime(num)
{
    for(let i = 2;i<num;i++)
    {
        if(num%i==0 || num==1)return false;
    }
    return true; 
}

function showOnlyPrime(start=1,end=10)
{
    for(let nums = start;nums<=end;nums++)
    {
        if(isPrime(nums))console.log(`Prime : ${nums}`);
    }
}

//print all prime number in range
showOnlyPrime(1,4);