const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputArray = [];

function getUserInput() {
  rl.question('Enter a number (or "done" to finish): ', (input) => {
    if (input.toLowerCase() === 'done') {
      processInputArray();
    } else {
      const number = parseInt(input);
      if (!isNaN(number)) {
        inputArray.push(number);
      }
      getUserInput();
    }
  });
}

function processInputArray() {
  console.log('Input Array:', inputArray);
  const sum = inputArray.reduce((acc, num) => acc + num, 0);
  console.log('Sum of all numbers:', sum);
  
  rl.close();
}

getUserInput();
