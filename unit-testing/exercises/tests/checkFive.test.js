const checkFive = require(`../checkFive.js`)




describe(`testing check five function`, () => {
    test(`returns correct string for # 5`, () => {
        expect(checkFive.checkFive(5)).toBe(`5 is equal to 5.`);
    });
    test(`returns correct string for a # below 5`, () => {
        expect(checkFive.checkFive(3)).toBe(`3 is less than 5.`);
    });
    test(`returns correct string for a # above 5`, () => {
        expect(checkFive.checkFive(7)).toBe(`7 is greater than 5.`)
    });
});