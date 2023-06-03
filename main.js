/*
1. Create two variables as strings with your first name and then last name.
2. Create a number variable with your age
3. Print out in the console each of these on a separate line.
4. Print out a concatenated string of Hi, my name is 'yourfullname'. I am 'yourage' years old.
5. Print out what your age would be if you were 10 years younger
6. Repeat steps 1-5 using an object
7. Repeat steps 1-5 using an array.
*/


/* NOTE FROM DYLAN RE: Using objects to create people

function createPerson(lastname, firstname, age) {
  let person = {};
  person.lastname = lastname;
  person.firstname = firstname;
  person.age = age;
  return person;
}

// Create multiple person objects using the createPerson function
let person1 = createPerson("Doe", "John", 30);
let person2 = createPerson("Smith", "Jane", 25);

// Access and modify the values of the person objects
console.log(person1.lastname);  // Output: "Doe"
console.log(person2.firstname); // Output: "Jane"

person1.age = 31;
console.log(person1.age);       // Output: 31
*/

let myFirstName = 'Luke'
let myLastName = 'Skywalker'
let myAge = 31

console.log(myFirstName)
console.log(myLastName)
console.log(myAge)

// console.log('Hi, may name is', + ' ', + myFirstName, + ' ', + myLastName, '. I am' + myAge + ' years old.')

console.log('Hi, my name is' + ' ' + (myFirstName) + ' ' + (myLastName) + '. I am' + ' ' + (myAge) + ' ' + 'years old.')

console.log('If I were 10 years younger, I would be', (myAge - 10), '.')

// 6. OBJECT Example
const slimShady = {
    firstName: 'Marshall',
    lastName: 'Mathers',
    age: 50,
    what: '- what? -',
    who: '- who?! -',
    nickname: 'Slim Shady'
}

const person3 = ['Matthew', 'McConaughey', 53]

console.log('Hi, my name is' + ' ' + person3[0] + ' ' + person3[1] + '.' + ' ' + 'I am' + ' ' + person3[2] + ' ' + 'years old.') 

// function createPerson(lastname, firstname, age) {
//     let person = {}
//     person.lastname = lastname
//     person.firstname = 
// }
// let person4 = createPerson("Foreman", "John", 25)

console.log('Hi, my name is' + ' ' + slimShady.what + ' ' + 'My name is' + ' ' + slimShady.who + ' ' + 'My name is *chka chka*' + ' ' + slimShady.nickname + '!')



