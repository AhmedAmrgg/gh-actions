const httpp = require('http'); // غلط ف كتابة http

const fs = require('fs-extraa'); // غلط: موديول مش موجود اصلا

const server = httpp.createServr((req, res) => { // غلط: createServr مش createServer
res.end("Hello World); // غلط: double quotes مفتوحة ومفيش قفل

if(req.url = "/test") { // غلط: عامل = بدل ==
 console.log('Test path'); 
} else { 
 console.log('Other path' 
} // غلط: مفيش قوس قافل للـ console.log

server.listen(3000 () => { // غلط: مفيش فاصلة بعد 3000
 console.log("Server is running on port 3000")
 // نسيت قوس النهاية
