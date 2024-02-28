// export const majorityElement = (nums) => {
//   let map = new Map();

//   for (const n of nums) {
//     let cnt = map.get(n);
//     map.set(n, cnt ? cnt + 1 : 1);
//   }

//   let res;
//   let major = 0;

//   for (const [n, cnt] of map.entries()) {
//     if (cnt > major) {
//       major = cnt;
//       res = n;
//     }
//   }

//   return res;
// };

export const majorityElement = (nums) => {
  let res = 0;
  let majority = 0;

  for (let n of nums) {
    if (majority === 0) {
      res = n;
    }

    majority += n === res ? 1 : -1;
  }

  return res;
};
