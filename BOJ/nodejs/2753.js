/*
윤년
https://www.acmicpc.net/problem/2753
 */
const start = new Date().getTime();
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

let year = 1 * input[0];

let ans = 0;
if (year % 4 === 0) {
  if (year % 100 !== 0 || year % 400 === 0) {
    ans = 1;
  }
}

console.log(ans);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
