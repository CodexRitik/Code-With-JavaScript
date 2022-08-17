function ans(num1,num2)
{
    return num1 + num2;
}
console.log(ans(10,5).toString());


//Arrays in js

let arr = [10,20,30];
let stringArr = ["Rohit",'Manish',"Aman"];
for(let i = 0;i<stringArr.length;++i)
{
    console.log(stringArr[i]);
}

let nums = new Array();
for(let index = 0;index<5;++index)
{
    nums[index] = "Aman";
}
console.log(nums);

let blankArray = [];
let count = 0;
while(true){
    blankArray.push("Ritik");
    ++count;
    if(count>5)break;
}
console.log(blankArray);

//Array Methods in js

//1 .concat 
let newArr = arr.concat(stringArr);
console.log(newArr);
//2.copyWithin() syntax : array.copyWithin(target,start,end);
let copiedArray = newArr.copyWithin(0,1,newArr.length-1);
console.log(copiedArray);
//3.entries
let arr1 = newArr.entries();
for(let e of arr1)
{
    console.log(e);
}
//4.every method syntax array.every(callback(currentValue,index,arr),thisArg) it check every element with given condition
let marks = [10,20,30,40,50];
function check(value)
{
    return value % 2 == 0;
}

console.log(marks.every(check));
console.log([2,3,6,8].every(check));

//flat() this function is used to flatt the array suppose we have 2d array then we can make a new array which is 1d array containing every element

let evens_2D = [2,4,[6,8,0],10,12];
let evens_1D = evens_2D.flat();
console.log(evens_1D);//result -> [2,4,6,8,0,10,12];

//flatMap()

let ele = [2,4,6,8,10];
let a = ele.flatMap(x => [x/2]);
console.log(a);//a = [1,2,3,4,5];

let students  = ['Ritik','Rohit','Rohan'];
let scores = [80,76,90];
let scoreCard = students.flatMap((students,index) => [students,scores[index]]);
console.log(scoreCard);

//split using this;
let stringArray = ['This is an Array']
