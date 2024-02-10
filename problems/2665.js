export const createCounter = (init) => {
  let cnt = init;

  return {
    increment: () => ++cnt,
    reset: () => (cnt = init),
    decrement: () => --cnt,
  };
};
