console.log('Hello World!\n==========\n');

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n');

const numbers = [2, 22, 12, 17, 18, 39, 129];

const arraySum = (numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
};

console.log(arraySum(numbers));

// Exercise 2 Section
console.log('EXERCISE 2:\n==========\n');

let book = {};

book.title = 'The Sound and the Fury';
book.author = 'William Faulkner';
book.pages = 326;
book.readCount = 2;
book.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, read ${this.readCount} times.`;
};

console.log(book.info());
