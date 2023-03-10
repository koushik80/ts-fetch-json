let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects

let date: Date = new Date();

// Array

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let truths: boolean[] = [true, false, true, false, false];

// classes

class Car {

};

let car: Car = new Car();

// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that returns the 'any' type

const json = '{"x": 10, "y": 20}';
const coordinates: { x: number;  y: number } = JSON.parse(json);

console.log(coordinates); // output: {x: 10, y: 20}

// When we declare a variable on one line
// and initialize it later

let words = ['red', 'green', 'yellow', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'red') {
    foundWord = true;
  }
}

// 3) Variable whose type can not be inferred correctly

let numbers = [-10, -1, 12];

let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}





