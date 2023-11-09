//object literal
const person = {
  firstName: "Olugbenga",
  lastName: "Taiwo",
};

console.log(person.profile);

//function factory
function createPerson(fname, lname) {
  return {
    firstName: fname,
    lastName: lname,
    profile: function () {
      return `Your fullname is ${this.firstName} ${this.lastName}`;
    },
  };
}

const ife = createPerson("ife", "badejo");
const treasure = createPerson("treasure", "Manugee");

console.log(ife);
console.log(treasure.profile());

//Constructor Function
function Person(fname, lname, age) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.profile = function () {
    return `Your fullname is ${this.fname} ${this.lname} and your date of birth is ${this.dob}`;
  };
}

const Tolu = new Person("tolu", "oluwa", 34);
const Taye = new Person("Bomboy", "Similoluwa", 36);

console.log(Tolu.profile());
console.log(Taye.fname);

//using both factory and constructor functions, create a object system for calculating the volume of a cylinder: formular: Area of a circle * Height of the cylinder

//factory function

function calcVolOfCylinder(area, height) {
  return {
    area: area,
    height: height,
    result: function () {
      return `The volume of your cylinder is ${this.area * this.height}`;
    },
  };
}

const homeCylinder = calcVolOfCylinder(7, 10);

console.log(homeCylinder.result());

//constructor function

function VolumeOfCylinder(radius, height) {
  this.height = height;

  this.result = function () {
    let area;
    const pie = Math.PI;
    area = pie * radius ** 2;
    return `Your result is ${(area * this.height).toFixed(2)}`;
  };
}

const GasCylinder = new VolumeOfCylinder(4, 15);

console.log(GasCylinder.result());

//Cloning Object
//using spread operator
const another = { ...Taye };
console.log(another);

//using object assign method
const another2 = {};
Object.assign(another2, treasure);
console.log(another2);

//Javascript built-in objects\

//string object
let text = "     Hello World!     ";
let email = "olugbenga@gmail.com";

console.log(text.indexOf("e"));
console.log(text.lastIndexOf("World"));
console.log(text.substring(6, 11));
console.log(text.toLowerCase());
console.log(text.trim()); //removes whitespaces at left and right

//getting name from the email
let output = email.split("@"); //splits into an array
const username = output[0];
console.log(username); //olugbenga

let sabi = text.replace("Hello", "Welcome"); //Welcome World!

console.log(sabi.startsWith("Welcome")); //checks if a character starts with something

//date object
const currentDate = new Date(); //creating a new date
const year = currentDate.getFullYear();
const day = currentDate.getDate();
const month = currentDate.getMonth(); //zero based

const formattedDate = `${currentDate.getFullYear()}-${
  currentDate.getMonth() + 1
} -${currentDate.getDate()} `;

let date2 = new Date("12, July, 2023 09:30:50");

console.log(formattedDate);

//Array
const nums = [3, 6, 8];

for (const key of nums) {
  // console.log(key);
}

//MAP - it returns the result in an array
const newArr = nums.map(function (num) {
  return Math.pow(num, 2);
});

console.log(newArr);

// filter - it checks the original and returns the filters in array
const evenArray = nums.filter(function (num) {
  return num % 2 === 0;
});

// console.log(evenArray);

//Assignment
/* 
create a function that takes an array and return another array which contain squares of each of the items in the original array */

function sqGen(arr) {
  let newArr = [];
  arr.forEach((num) => {
    const square = Math.pow(num, 2);
    newArr.push(square);
  });
  // console.log(newArr);
}

sqGen([2, 3, 4]);

//Assignment
function arrayFromRange(min, max) {
  const newArr = [];

  for (let i = min; i <= max; i++) {
    newArr.push(i);
  }

  const evenArr = newArr.filter(function (num) {
    return num % 2 === 0;
  });

  console.log(newArr);
  console.log(evenArr);
}

arrayFromRange(1, 5);

//Working with arguements
function adddIt(a, b) {
  arguments; //this accepts parameters without limit
  let total = 0;
  for (const num of arguments) {
    total += num;
  }

  //displaying values: it behaves like an array but not an array
  // console.log(arguments);

  //displaying specific value
  // console.log(arguments[3]);

  //logging the total
  // console.log(`sum is ${total}`);
}

adddIt(3, 5, 8, 10, 4, 67, 23, 11); //this accepts several parameters

//The rest Operator(...). It converts the parameters passed into the function into an array
function addIt2(...num) {
  console.log(num);
  let sum = 0;
  num.forEach((i) => {
    sum += i;
  });
  // console.log(sum);
}

addIt2(23, 55, 2, 3, 90, 12, 6, 5);

function addIt3(discount, ...num) {
  // console.log(num);
  let sum = 0;
  num.forEach((i) => {
    sum += i;
  });
  console.log(`sum is ${sum}`);

  let discountTotal = sum - sum * discount;
  console.log(`discount total is ${discountTotal}`);
}

addIt3(0.1, 90, 10, 50, 20);


function calcArea(_rad) {
  const PI = 3.142
  const result = PI * (_rad**2)
  return result
}

// function assignVal(val) {
//   const myVal = 0;
//   myVal = val
// }

// try {
//   assignVal(4)
// } catch (error) {
//   console.log(`sorry, something went wrong. we will fix it`);
// }

const fruits = ["orange","mango","seatle", 'mango', 'pawpaw'];
const numbers = [2,4,6,9,87,65]

fruits.forEach(fruit => {
  console.log(`each ${fruit} is awesome`);
});

const multiple = numbers.map((number) => number * 3)

const evenNum = multiple.filter((number) => number%2 ===0)

const addAll = evenNum.reduce((acc,cur) => acc + cur,5)

/** 
numbers.forEach(number => {
  multiple.push(number*2)
});*/

console.log(multiple);
console.log(evenNum);
console.log(addAll);

function person2(num1,num2, ...other) {
  let total = num1 + num2
  console.log(other);
}

person2(40,32,40,50,60,90)

//factory function
function createShop(address, name,manager) {
  return{
    shopName: name,
    address: address,
    manager: manager,
    description: function () {
      console.log(`The shop name is ${this.shopName} with address ${address} is managed by ${manager}`);
    }
  }
}

const shop1 = createShop("20, ikeja, lagos", 'BOSCH','Mr John')

console.log(shop1);

//constructor function
function School(name,principal,students,address) {
  this.name = name,
  this.principalName = principal,
  this.studentsNo = students,
  this.schoolAddress = address,
  this.summary = function () {
    console.log(`The name of the school is ${this.name} which is located at ${this.schoolAddress}. The school is led by the principal ${this.principalName} with ${this.studentsNo} number of students `);
  }
}

const school1 = new School("Ayo High School","Folu Adeboye",'190','2, mami street, london, UK')

school1.summary()

const clone = {...school1}

console.log(clone.name);