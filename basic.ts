//Primitives: Nums, Strings, Bools
//Complex Types: Arrays, Objs
//Function Types & Params

//Primitives

let age:number;

age = 12;

let userName:string;

userName = "Laverne"

let isInstructor: boolean;

isInstructor = true

// let hobbies: null;

// hobbies = "golf"

//Complex Types

let hobbies: string[];

hobbies = ["golf", "ski", "eat"]

type Person = {
	name: string;
	age: number;
}

let person: Person; // default: any

person = {
	name: "Laverne",
	age: 21
}

let people: {
	name: string;
	age: number;
}[];

//Type Inference

// let course = 'React da\' Guide';
// let course: string = 'React da\' Guide';

// course = 12345

//Union Types

let course: string | number = 'React da\' Guide'
course = 12345

//Function Types & Params

// function add(a: number, b: number):number //number by default
// {
// 	return a + b;
// }

function printOutput(value: any) {
	console.log(value)
}

//Generics 

function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];

	return newArray
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 0, 1, 2]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');