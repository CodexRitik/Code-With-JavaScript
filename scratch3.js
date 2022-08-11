//Basic Operators.Maths
let x = 10;//Assingment operators : =
let y = 20;
let z = 30;

//Arihmetic Opearators

/*
 + Addition , - Subtraction, * Multiplication, ** Exponentiation ,/ division, % Modulus, ++ Increment , -- Decrement
*/
console.log(`${x} + ${y} = ${x + y}`);
console.log(`${z} - ${y} = ${z - y}`);
console.log(`${x} * ${y} = ${x * y}`);
console.log(`${z} / ${y} = ${z / y}`);
console.log(`${z} % ${y} = ${z % y}`);
console.log("2 to the power 5 = ",2**5);
//same like 
console.log(Math.pow(2,5));
//Increment or decrement  unary operator

x = ++x;
y = y--;

z = -z;

console.log(x+" "+y+" "+z);

//Assignment operators
/*
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
*/

//Comparison Operators
/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
*/

//Bitwise Operators
/*
&	Bitwise AND	(10==20 & 20==33) = false
|	Bitwise OR	(10==20 | 20==33) = false
^	Bitwise XOR	(10==20 ^ 20==33) = false
~	Bitwise NOT	(~10) = -10
<<	Bitwise Left Shift	(10<<2) = 40
>>	Bitwise Right Shift	(10>>2) = 2
>>>	Bitwise Right Shift with Zero	(10>>>2) = 2
*/

//Logical Operators

/*
&&	Logical AND	(10==20 && 20==33) = false
||	Logical OR	(10==20 || 20==33) = false
!	Logical Not	!(10==20) = true
*/

//Special Operators
/*
(?:)	Conditional Operator returns value based on the condition. It is like if-else.
,	Comma Operator allows multiple expressions to be evaluated as single statement.
delete	Delete Operator deletes a property from the object.
in	In Operator checks if object has the given property
instanceof	checks if the object is an instance of given type
new	creates an instance (object)
typeof	checks the type of object.
void	it discards the expression's return value.
yield	checks what is returned in a generator by the generator's iterator.
*/