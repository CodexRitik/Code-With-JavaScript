//Conditional statement
let age = 20;
if(age < 18)
{
    console.log("Your age is less then 18");
}else if(age == 18)
{
    console.log("Age is 18");
}else{
    console.log("Age is > 18");
}

//switch case 
let result ='B';
switch(result)
{
    case'A':
        console.log("You Have A Grade!");
        break;
    case 'B':
        console.log("You Have B Grade!");
        break;
    case 'C':
        console.log("You Have C Grade!");
        break;
    default:
        console.log("Sorry! You Have No Any Grade");
}

//Loops
let counter = 0;
for(let i = 0;i<5;i++)
{
    counter++;
    console.log("Counter : ",counter);
}

let j = 5;
while(j>=1)
{
    console.log(j);
    j--;
}

let odd = 3;
do{
    if(odd%2==0)console.log("Even Nuumber");
    odd--;
}while(odd>0)

