const express = require('express');
const app = express();

const unusedVar = "I am not used anywhere"; // ❌ متغير مش مستخدم

function veryBigFunction() { // ❌ دالة طويلة جدا
  console.log("Start function...");
  for (let i = 0; i < 50; i++) {
    console.log("Processing item " + i);
  }
  console.log("End function...");
}

function duplicatedCode() {
  console.log("Duplicated message");
}

function anotherDuplicatedCode() {
  console.log("Duplicated message"); // ❌ كود مكرر
}

function riskyFunction(input) {
  return input.length; // ❌ احتمال input يكون undefined أو null
}

app.get('/', (req, res) => {
  riskyFunction(); // ❌ مش مرسل input أصلا
  res.send('Hello World!');
});

const hardcodedPassword = "123456"; // ❌ Password ثابت في الكود

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
