// Write a test function to test all your functions
// Store all test cases in an array and pass to the test function
// Test function should return all failed test cases

// [functionName, parameters, expected]

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function testAll(testCases) {
  return testCases
    .map(([functionCall, params, expected]) => {
      const actual = functionCall(...params);
      return [functionCall.name, params, expected, actual];
    })
    .filter(([, , expected, actual]) => actual !== expected);
}

const testCases = [
  [add, [5, 5], 10],
  [sub, [10, 3], 7]
];


const failedTests = testAll(testCases);
console.table(failedTests);
// [functionName, parameters, expected, actual]
// [[function: sub], [10, 3], 23, 7];
