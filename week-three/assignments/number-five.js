'use strict';

// Given two pieces of information: an array of numbers and another number representing a sum, find if there is a pair of numbers in the array that add up to the given sum.

// If there is at least one pair return the pair of numbers,
// If not return false.

// Try to find the most optimal solution 
// Hint: this can be solved in linear time.


function isSumPresent(input, sum) {
  const sumPairs = {}
  const filteredInput = []

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    
    if (element <= sum) {
      filteredInput.push(element);
    }
  }

  for (let i = 0; i < filteredInput.length; i++) {
    const element = filteredInput[i];
    
    sumPairs[element] = sum - element;
  }


  for (const [key, value] of Object.entries(sumPairs)) {
    if(sumPairs[value]) {
      console.log(`[${key},${value}]`)
      return
    }
  }
}


// Test cases


isSumPresent([1, 8, 23, 3, 7, 9], 8) 
// return [1,7]  (b/c 1 and 7 add up to 8)

isSumPresent([1, 8, 23, 3, 7, 9], 11) 
// return [8,3] (b/c 8 and 3 add up to 11)

isSumPresent([1, 8, 23, 3, 7, 9], 19) 
// false (b/c no two numbers add up to 19)