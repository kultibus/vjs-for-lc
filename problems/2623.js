export const memoize = (fn) => {
  const cache = new Map();

  return (...args) => {
    const params = JSON.stringify(args);
    const res = cache.get(params) ?? fn(...args);

    cache.set(params, res);

    return res;
  };
};
