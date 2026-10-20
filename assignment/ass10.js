const readline = require('node:readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printLine(value, multiplier) {
  console.log(`${value} x ${multiplier} = ${value * multiplier}`);
}

function printWithForLoop(value) {
  console.log('\nUsing a for loop:');
  for (let multiplier = 1; multiplier <= 10; multiplier += 1) {
    printLine(value, multiplier);
  }
}

function printWithWhileLoop(value) {
  console.log('\nUsing a while loop:');
  let multiplier = 1;
  while (multiplier <= 10) {
    printLine(value, multiplier);
    multiplier += 1;
  }
}

function printWithDoWhileLoop(value) {
  console.log('\nUsing a do...while loop:');
  let multiplier = 1;
  do {
    printLine(value, multiplier);
    multiplier += 1;
  } while (multiplier <= 10);
}

terminal.question('Enter a whole number: ', function (answer) {
  const value = Number(answer.trim());

  if (!Number.isInteger(value)) {
    console.log('Please enter a valid whole number.');
    terminal.close();
    return;
  }

  console.log(`\nMultiplication table for ${value}`);
  printWithForLoop(value);
  printWithWhileLoop(value);
  printWithDoWhileLoop(value);
  terminal.close();
});
