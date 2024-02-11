// export const runningSum = (nums) => {
//   let currentSum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     currentSum += nums[i];
//     nums[i] = currentSum;
//   }

//   return nums;
// };

// export const runningSum = (nums) => {
//   const result = [];

//   nums.reduce((acc, num) => {
//     result.push((acc += num));

//     return acc;
//   }, 0);

//   return result;
// };

// export const runningSum = (nums) => {
//   return nums.reduce((acc, n, i) => {
//     if (!acc.length) return [n];
//     else return [...acc, (n += acc[i - 1])];
//   }, []);
// };

export const runningSum = (nums) => {
  nums.reduce((acc, n, i, arr) => (arr[i] += acc));
  return nums;
};
