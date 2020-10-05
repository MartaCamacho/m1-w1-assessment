// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
    return Math.max(a,b);
  }

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  return i
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for(let j=1;j<numbers.length;j++){
        for(let k =2;k<numbers.length;k++){
            if(numbers[i]>numbers[j] && numbers[i]>numbers[k]){
                  return (numbers[i]);
         }
       }
    }
 }
}

// Return the longest string in an array
function longestString(strings) {
  for (let i = 0; i < strings.length; i++) {
    for(let j=1;j<strings.length;j++){
        for(let k =2;k<strings.length;k++){
            if(strings[i]>strings[j] && strings[i]>strings[k]){
                  return (strings[i]);
         }
       }
    }
 }
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  
} 

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
