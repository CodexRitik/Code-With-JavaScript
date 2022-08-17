/*var line = readline().split(' ');
var a = parseInt(line[0]);
var b = parseInt(line[1]);
//input in js
var n = parseInt(readline());
var cards = readline().split(' ');
 
for (var i = 0; i < n; i++) {
  cards[i] = parseInt(cards[i]);
}*/

//objects in javascript it is like a map value in kry : value pair
//object = {property1 : value1,property2 : value2.......propertyN:valueN}

emp = {id : 102,name : 'Ritik Yadav',rollNo : 191500658};
console.log(`Id : ${emp.id} \nName : ${emp.name} \nRoll No : ${emp.rollNo}`);

let student = new Object();
//new keyword is used to create object
//by creating a instacnce  of object
student.id = 9396;
student.name = 'ritik';
student.rollNo = 40;
console.log(student.id);

// created object By using an object constructor

function employeeData(id,name,salry)
{
  this.id = id;
  this.name = name;
  this.salry = salry;
}

emp = new employeeData(100,'CodexRitik',40000);
console.log(emp.id + " "+emp.name+" "+employeeData.salry);

//defining method in js object

function ritik(id,name,rollNo)
{
  this.id = id;
  this.name = name;
  this.rollNo = rollNo;

  this.changeId = changeId;

  function changeId(Newid)
  {
    this.id = Newid;
  }
}

obj = new ritik(10,'ritik',191);
console.log(obj.id + " "+obj.name+" "+obj.rollNo);
obj.changeId(20);
console.log(obj.id + " "+obj.name+" "+obj.rollNo);

/* 
1	Object.assign()
This method is used to copy enumerable and own properties from a source 
object to a target object*/

const obj1 = {a:1 , b:2, c:3};
const obj2 = Object.assign({c:4,d:5},obj1);
console.log(obj2.c+" "+obj2.d);

const object1 = {  
  a: 1,  
  b: 2,  
  c: 3  
};  

const object2 = Object.assign({ a:3,c:4,d:5,g:23});

/*2	Object.create()
This method is used to create a new object with the specified prototype object and properties.
object.create(prototype,[propertiesObject])*/

const people = {
  printIntro : function()
  {
    console.log(`My Name is ${this.name} Am I a Developer ? ${this.isDeveloper}`);
  }
};

const me = Object.create(people);
me.name = "CodexRitik";
me.isDeveloper = true;
me.printIntro();


//2nd example 

function mastii()
{
  this.name = 'khelna';
}
  function play()
  {
      mastii.call(this);
  }
play.prototype = Object.create(mastii.prototype);
const app = new play();
console.log(app.name);

/*
3	Object.defineProperty()
This method is used to describe some behavioral attributes of the property.
4	Object.defineProperties()
This method is used to create or configure multiple object properties.
5	Object.entries()
This method returns an array with arrays of the key, value pairs.
6	Object.freeze()
This method prevents existing properties from being removed.
7	Object.getOwnPropertyDescriptor()
This method returns a property descriptor for the specified property of the specified object.
8	Object.getOwnPropertyDescriptors()
This method returns all own property descriptors of a given object.
9	Object.getOwnPropertyNames()
This method returns an array of all properties (enumerable or not) found.
10	Object.getOwnPropertySymbols()
This method returns an array of all own symbol key properties.
11	Object.getPrototypeOf()
This method returns the prototype of the specified object.
12	Object.is()
This method determines whether two values are the same value.
13	Object.isExtensible()
This method determines if an object is extensible
14	Object.isFrozen()
This method determines if an object was frozen.
15	Object.isSealed()
This method determines if an object is sealed.
16	Object.keys()
This method returns an array of a given object's own property names.
17	Object.preventExtensions()
This method is used to prevent any extensions of an object.
18	Object.seal()
This method prevents new properties from being added and marks all existing properties as non-configurable.
19	Object.setPrototypeOf()
This method sets the prototype of a specified object to another object.
20	Object.values()
This method returns an array of values.
*/