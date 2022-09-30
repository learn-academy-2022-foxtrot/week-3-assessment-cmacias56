// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("newArray", () => {
  it("function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    expect(newArray(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(newArray(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55,]);
  });
});


const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//● array1 › takes in an object and returns an array of the numbers sorted from least to greatest

//ReferenceError: array1 is not defined

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 total
// Snapshots:   0 total
// Time:        0.47 s
// Ran all test suites.

// b) Create the function that makes the test pass.
// create a function named fibOrder
// create variables, num1 and num2 with a new value
// add in a new variable called fibAdd to hold num1 + num2
// need a new but empty array, newFibArr
// for loop for our inptu number to iterate 
// using .push to push num1 into the empty array 
// return newly filled array newfibArr

const fibOrder = (fibLength1) => {
  let num1 = 1;
  let num2 = 1;
  let newFibArr = [];

  for (let i = 0; i < fibLength1; i++) {
    let fibAdd = num1 + num2
    newFibArr.push(num1);
    num1 = num2;
    num2 = fibAdd;

  }
  return newFibArr
}




// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}

describe("array1", () => {
    it("takes in an object and returns an array of the numbers sorted from least to greatest", () => {
        expect(array1(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
        expect(array1(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
    })
})


// ✕ takes in an object and returns an array of the numbers sorted from least to greatest (1 ms)

// ● array1 › takes in an object and returns an array of the numbers sorted from least to greatest

//   ReferenceError: array1 is not defined


// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.
// create a function "array1" that will  take in an array, and return a new array with the index placed in order
// create a new but empty array for the new return which will be represented by arr1
// utilize a series of methods such as push and sort

const array1 = (value) => {
  const arr1 = [];
  for (const key in value) {
    arr1.push(value[key]);
  }
  return arr1.sort((a, b) {
    return a - b;
  });
};


// PASS  ./code-challenges.test.js
//   array1
//     ✓ takes in an object and returns an array of the numbers sorted from least to greatest (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.


describe("accumulator", () => {
  it("takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    expect(accumulator(accountTransactions1)).toEqual([100, 83, 60, 51]);
    expect(accumulator(accountTransactions2)).toEqual([250, 161, 261, 165]);
    expect(accumulator(accountTransactions3)).toEqual([]);
  });
});
// Successful test fail
// ReferenceError: sumAccumulator is not defined


const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.
// create a function "newArray" as well as a conditional for empty array
// create conditional for numbers in array
// create an empty variable "arr2"


      const newArray = (object) => {
        if (objet.length === null) {
            return []
        } else {
          for (i=0, i <arr.length; i++;) {
            let arr2= []
            return arr2= [...arr2, (arr2 + arr[i])]
          }
        }
      }