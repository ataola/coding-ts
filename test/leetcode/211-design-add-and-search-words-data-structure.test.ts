// test/leetcode/design-add-and-search-words-data-structure.test.ts
import WordDictionary from '../../code/leetcode/211-design-add-and-search-words-data-structure';

describe('test class WordDictionary:', () => {
  test('', () => {
    const wordDictionary = new WordDictionary();
    wordDictionary.addWord('bad');
    wordDictionary.addWord('dad');
    wordDictionary.addWord('mad');
    expect(wordDictionary.search('pad')).toBe(false); // return False
    expect(wordDictionary.search('bad')).toBe(true); // return True
    expect(wordDictionary.search('.ad')).toBe(true); // return True
    expect(wordDictionary.search('b..')).toBe(true); // return True
  });
});
