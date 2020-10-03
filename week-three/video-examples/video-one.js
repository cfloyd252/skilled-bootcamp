'use strict';

const inputOne = [1, 2, 2, 3, 4]
const inputTwo = [3, 2, 1, 4, 1]

function myFindDupe(input) {
  input.sort((a,b) => a - b);
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i+1]) {
      console.log(input[i])
    }
  }
}

function findDupe1(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (i !== j && input[i] === input[j]) {
        console.log(input[i]);
        return;
      }
    }
  }
}

function findDupe2(input) {
  const numbers = {}
  for (let i = 0; i < input.length; i++) {
    if (numbers[input[i]] === 'exists') {
      console.log(input[i])
    }

    numbers[input[i]] = 'exists'
  }
}

findDupe2(inputTwo)