let pali = require(`../palindrome`);


describe(`should return proper outputs`, () => {
    test("should return true", () => {
        expect(pali(`a`)).toBe(true)
    });
    test("should return true", () => {
        expect(pali(`racecar`)).toBe(true)
    });

    test("should return false for a longer non-palindrome", function() {
        expect(pali("launchcode")).toBe(false);
     });
  
     test("should return false for a simple non-palindrome", function() {
        expect(pali("ab")).toBe(false);
     });
  
     test("should be case-sensitive", function() {
        expect(pali("abA")).toBe(false);
     });
  
     test("should consider whitespace", function() {
        expect(pali("so many dynamos")).toBe(false);
     });

     test("should consider the empty string a palindrome", function() {
        expect(pali("")).toBe(true);
     });
});