"use strict";
//Basic Types
let id = 5;
let first_name;
let isPublished = true;
let x = 'Hello';
let age;
first_name = 'Mariano';
age = 32;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple - multiple types especify 
let person = [7, 'Mariano', true];
//example-error tuple
//person = ['Mariano', true, 7]
// Tuple Array
let employee;
employee = [
    [1, 'Mariano'],
    [2, 'Anselmo'],
    [3, 'Iker'],
];
// Union
let p_id = 22;
p_id = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 10] = "Up";
    Direction1[Direction1["Down"] = 11] = "Down";
    Direction1[Direction1["Left"] = 12] = "Left";
    Direction1[Direction1["Right"] = 13] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up, Direction1.Right);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Right);
const user = {
    id: 7,
    username: 'Mariano',
};
// Type assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
customerId = 1;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void
function log(message) {
    console.log(message);
}
log(7);
const user1 = {
    id: 7,
    username: 'Mariano',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(4, 4));
console.log(sub(4, 2));
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const mariano = new Person(14, 'Mariano');
console.log(mariano.register());
console.log(mariano);
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const mariano2 = new Person2(22, 'IKER');
console.log(mariano2.register());
console.log(mariano2);
//Extending classes
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const empleo = new Employee(26, 'Mariano', 'Developer');
console.log(empleo);
console.log(empleo.register());
//Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(['Mariano', 'Iker', 'Anselmo', 'Manuel']);
stringArray.push('hello');
