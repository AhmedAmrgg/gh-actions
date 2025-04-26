const http = require('http');

const hardcodedPassword = "admin123"; // ❌ Hardcoded credentials

let unusedVariable = 42; // ❌ Unused variable

function bigFunction() { // ❌ Long function
  console.log("Start");
  for (let i = 0; i < 100; i++) {
    console.log("Processing " + i);
  }
  console.log("End");
}

function duplicatedCodeExample() {
  console.log("This is duplicated code");
}

function anotherDuplicatedCodeExample() {
  console.log("This is duplicated code"); // ❌ Duplicate code
}

const server = http.createServer((req, res) => {
  let input = null;
  res.end(input.length); // ❌ Risk of TypeError: Cannot read property 'length' of null
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
