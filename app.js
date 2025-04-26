const htp = require('http'); // خطأ: كتبت http غلط

const server = htp.creatServer((req, res) => { // خطأ: creatServer مش createServer
  res.end('Hello, Docker!)'; // خطأ: قوس الاقتباس مش مقفول صح
});

server.listen(3000 () => { // خطأ: نسيت فاصلة قبل الكولباك
  console.log('Server running on port 3000'); // دي السطر الوحيد الصح 😂
};
