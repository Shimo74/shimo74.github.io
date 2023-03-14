// // .github/actions/hello/index.js
// console.log("SECRET_HOGE_1 = ", process.env.SECRET_HOGE_1); 
// console.log("SECRET_HOGE_2 = ", process.env.SECRET_HOGE_2);
const secret = process.argv[2];
console.log(`The value of TEST_SECRET is: ${secret}`);