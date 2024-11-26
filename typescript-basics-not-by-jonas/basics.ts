// Primitives: number, string, boolean
// More Complex Types: arrays, objects

// Primitives:
let age: number;
age = 12;

let userName: string
userName = 'Max'

let isTrue: boolean
isTrue = true

// More Complex Types
let hobbies: string[];
hobbies = ['gaming', 'football', 'cooking'];

let person: {
    name: string,
    age: number
};
person = {
    name: 'Max',
    age: 12
}

let people: {
    name: string,
    age: number
}[];
people = [{
    name: "User1",
    age: 12
},
{
    name: "User2",
    age: 13
},
{
    name: "User3",
    age: 14
}]

// Using Union
let userId: number | string = 'user1'
userId = 1

// Using Type Aliases
type Person = {
    name: string,
    age: number
}
let typePerson: Person | Person[]

// Functions and Types
function add(a: number, b: number): number {
    return a + b;
}

function printOutput(value: any): void {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1, 2, 3]

const numberArray = insertAtBeginning(demoArray, -1)
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')