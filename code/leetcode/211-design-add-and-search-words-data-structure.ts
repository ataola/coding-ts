// code/leetcode/design-add-and-search-words-data-structure.ts
declare type wordsType = {
  [key: string]: string[];
};

export default class WordDictionary {
  words: wordsType;
  constructor() {
    this.words = {};
  }

  /**
   *
   * @param {string} word
   */
  addWord(word: string): void {
    if (this.words[word.length]) {
      this.words[word.length].push(word);
    } else {
      this.words[word.length] = [word];
    }
  }

  /**
   *
   * @param {string} word
   * @returns { boolean }
   */
  search(word: string): boolean {
    if (!this.words[word.length]) {
      return false;
    }

    if (!word.includes('.')) {
      return this.words[word.length].includes(word);
    }

    const reg = new RegExp(word);
    return this.words[word.length].some((item) => reg.test(item));
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
