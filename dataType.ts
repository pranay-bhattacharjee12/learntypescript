//run ts file steps
//1. install tsconfigfile by tsc --init
//2. compile ts file by tsc filename.ts(in this way you crete js file automatically)
// or else directly use tsx filename.ts to run ts file without creating js file
//3. run js file by node filename.js


//number type initialization
const x: number =13;
console.log(x);


//function type initialization
function greet(name: string, age: number) {
    console.log(`Hello ${name}, you are ${age} years old.`);
}

//function call
greet("John", 25);


//any type initialization can be used to store any type of value
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);

//function when returning a value
//type inference is used to determine the return type of the function
function add(a: number, b: number): number {
    return a + b;
}       

//function call
const sum = add(5, 10);
console.log(`The sum is: ${sum}`);

