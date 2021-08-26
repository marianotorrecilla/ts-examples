//Basic Types

let id: number = 5
let first_name: string
let isPublished: boolean = true
let x: any = 'Hello'
let age: number

first_name = 'Mariano'
age = 32

let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'Hello']

// Tuple - multiple types especify 

let person: [number, string, boolean] = [7, 'Mariano', true]

//example-error tuple
//person = ['Mariano', true, 7]

// Tuple Array

let employee: [number, string][]

employee = [
    [1, 'Mariano'],
    [2, 'Anselmo'],
    [3, 'Iker'],
]

// Union

let p_id: string | number = 22

p_id = '22'

// Enum
enum Direction1 {
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction1.Up, Direction1.Right);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction2.Right);


//Objects

type User = {
    id: number
    username: string
}

const user: User = {
    id: 7,
    username: 'Mariano',
}

// Type assertion
let cid: any = 1
//let customerId = <number>cid
let customerId = cid as number
customerId = 1

//Functions

function addNum(x: number, y: number): number {
    return x + y
}

console.log(addNum(1,2));

//Void

function log(message: string | number): void {
    console.log(message);
}

log(7)


//Interfaces
interface UserInterface {
    id: number
    username: string
    age?: number
}

const user1: UserInterface = {
    id: 7,
    username: 'Mariano',
}

//Interface functions
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y:number): number => x + y
const sub: MathFunc = (x: number, y:number): number => x - y

console.log(add(4,4));
console.log(sub(4,2));

//Classes
class Person {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const mariano = new Person(14, 'Mariano')

console.log(mariano.register());

console.log(mariano);


//Classes with interface

interface PersonInterface {
    id: number
    name: string
    register(): string
}

class Person2 implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const mariano2 = new Person2(22, 'IKER')

console.log(mariano2.register());

console.log(mariano2);

//Extending classes

class Employee extends Person2 {
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

const empleo = new Employee(26, 'Mariano', 'Developer')

console.log(empleo);
console.log(empleo.register());

//Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let stringArray = getArray<string>(['Mariano', 'Iker', 'Anselmo', 'Manuel'])

stringArray.push('hello')