export const reduce = (nums, fn, init) => {
  let res = init;
  for (const num of nums) {
    res = fn(res, num);
  }
  return res;
};
