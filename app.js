const http = require('http');

// ❌ Hardcoded credentials with clearer name
const dbPassword = "admin123";

// ❌ Unused variable
let unusedValue = 42;

// ❌ Long function with bad code smell
function veryBigFunction() {
  console.log("Starting...");
  for (let i = 0; i < 100; i++) {
    console.log("Processing item " + i);
    if (i % 10 === 0) {
      console.log("Checkpoint");
    } else if (i % 3 === 0) {
      console.log("Another checkpoint");
    } else {
      console.log("Still going...");
    }
  }
  console.log("Ending...");
}

// ❌ Duplicated code
function duplicatedLogger() {
  console.log("This is a log that is exactly the same");
  console.log("Another line that is the same");
}

function anotherDuplicatedLogger() {
  console.log("This is a log that is exactly the same");
  console.log("Another line that is the same");
}

const server = http.createServer((req, res) => {
  let input = null;
  res.end(input.length); // ❌ Risk of crash
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
