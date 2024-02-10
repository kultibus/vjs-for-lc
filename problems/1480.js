export const runningSum = (nums) => {
  return nums.reduce((result, num) => {
    return num + result;
  }, 0);
};
