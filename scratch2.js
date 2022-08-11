//Data Types in JS
/*
There are eight type of data type in js 
Number, bigint , string, boolean , null, undefined, object, symbol
*/

let msg = "Hello Message";
// we can change the datatype of variable

msg = 21;
let num = 123;
num = 2.345;

//Number types represnts both float and integer it is used for small values like till 2 ^ 31

//Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.

console.log(1/0);//output will be Infinity


//NaN represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:
console.log("Not a Number" / 2);//Output will be NaN

//BigInt in JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a technical limitation caused by their internal representation.

const BigInt = 1234567890123456789012345678901234567890n;
// the "n" at the end means it's a BigInt

//String 

let str = "This is string";
let str2 = 'This is also string';
let str3 = `Embeded string ${str}`;

/*
In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.

In javascript don't have char type like c and java In JavaScript, there is no such type. There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.
*/

let char = 'A';

//Boolean logical type
let nameFieldChecked = true;
let checked = false;

let isGreater = 4 > 1;

//Null value  : The special null value does not belong to any of the types described above.It forms a separate type of its own which contains only the null value:

age = null;

//undefined value : The special value undefined also stands apart. It makes a type of its own, just like null.The meaning of undefined is “value is not assigned”.If a variable is declared, but not assigned, then its value is undefined:

let ans = 100;
ans = undefined;
console.log(ans);

//type of operator : it returns the type of the argument.It is useful when we want to process value of diffrent type or just want to quick check.

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

//Interaction : alert,prompt,confirm functions are used in browser 

//alert : it shows a message and waits for the user to press "OK";
alert("Hello User!");

//prompt it accept two argumments . it shows a model window with a text message an input field for the visitor and the buttons Ok/cancel

let age = prompt("How old are You?",100);
alert(`you are ${age} year old`);

//confirm : it shows a modal window with a question and two buttons Ok and cancel.The result is true if OK is pressed and false otherwie.

let isBoy = confirm
('Are you Boy?');
alert(isBoy);

//Type Conversions in js

// 1. String conversion 

let vallue = true;
vallue = String(vallue);//type cast

//2. Numeric conversion

let numss = "123";
numss = Number(numss);

/*

Value	        Becomes…
undefined	       NaN
null	            0
true and false	  1  and 0

string	Whitespaces from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.*/

// 3.Boolean conversions

/*Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.*/

let anss = 'hello';
anss = Boolean(anss);

