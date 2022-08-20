/*
바이러스
boj.kr/2606
 */
const start = new Date().getTime();

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
//const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const C = 1 * input[0];
const N = 1 * input[1];
const mat = Array.from(Array(C + 1), () => Array(C + 1).fill(0)); // 인접행렬
for (let n = 0; n < N; n++) {
  let [s, e] = input[2 + n].split(" ").map(Number);
  mat[s][e] = mat[e][s] = 1; // 양방향
}

const dfs = (s) => {
  visit[s] = 1;
  ans++;

  for (let i = 1; i < C + 1; i++) {
    let e = i;
    if (mat[s][e] === 1 && visit[e] === 0) {
      dfs(e);
    }
  }

  return;
};

const visit = Array.from({ length: C + 1 }, () => 0);
let ans = 0;
dfs(1); // 1번 컴퓨터 감염

console.log(--ans); // 첫 감염 제외

const end = new Date().getTime();
console.log("--------------------");
console.log(`Elapsed Time: ${(new Date().getTime() - start) / 1000}s`);
