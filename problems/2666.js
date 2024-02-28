export const once = (fn) => {
  let isOnce;
  return (...args) => {
    if (!isOnce) {
      isOnce = true;
      return fn(...args);
    }
  };
};
