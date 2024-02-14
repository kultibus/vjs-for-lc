export const firstPalindrome = (words) => {
  let res = "";

  words: for (let i = 0; i < words.length; i++) {
    let reverse = "";

    let word = words[i];

    for (let j = word.length - 1; j >= 0; j--) {
      reverse += word[j];

      if (word === reverse) {
        res = word;
        break words;
      }
    }
  }

  return res;
};
