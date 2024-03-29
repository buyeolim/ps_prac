/*
통계학
boj.kr/2108
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const MAX_ABS_VAL = 4000;

const N = 1 * input[0];
const cnts = Array.from({ length: 2 * MAX_ABS_VAL + 1 }, () => 0);
let sum = 0,
  maxCnt = 0,
  maxNum = -Number.MAX_SAFE_INTEGER,
  minNum = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < N; i++) {
  const n = 1 * input[1 + i];
  sum += n;
  cnts[MAX_ABS_VAL + n]++;
  maxCnt = Math.max(maxCnt, cnts[MAX_ABS_VAL + n]);
  maxNum = Math.max(maxNum, n);
  minNum = Math.min(minNum, n);
}

const nums = new Array();
const modes = new Array();
for (let i = 0; i < 2 * MAX_ABS_VAL + 1; i++) {
  const n = i - MAX_ABS_VAL;

  if (cnts[i] > 0) {
    for (let cnt = 0; cnt < cnts[i]; cnt++) {
      nums.push(n);
    }
  }

  cnts[i] === maxCnt ? modes.push(n) : "";
}
// 산술평균
const avg = Math.round(sum / N) === 0 ? 0 : Math.round(sum / N);
// 중앙값
const median = nums[Math.floor(N / 2)];
// 최빈값
let mode = modes[0];
if (modes.length > 1) mode = modes[1];
// 범위
const range = maxNum - minNum;

console.log(avg);
console.log(median);
console.log(mode);
console.log(range);

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
