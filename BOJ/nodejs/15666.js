/*
N과 M (12)
boj.kr/15666
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);

nums.sort((a, b) => a - b); // 오름차순 정렬
nums = [...new Set(nums)]; // 중복 제거
const S = [];
const dfs = (s) => {
  if (s.length === M) {
    S.push([...s]);

    return;
  }

  for (let i = 0; i < nums.length; i++) {
    // 부분수열이 마지막원소보다 크거나 같을 때만
    let top = s.length - 1;
    if (s.length === 0 || nums[i] >= s[top]) {
      s.push(nums[i]);
      dfs(s);
      s.pop();
    }
  }
};

dfs([]);

let ans = "";
for (let s of S) {
  ans += s.join(" ") + "\n";
}
console.log(ans);

const end = new Date().getTime();

console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
