const winning = require(`../RPS.js`);

beforeAll(() => {
    rock = `rock`;
    paper = `paper`;
    scissors = `scissors`;
})
describe(`testing the whoWon function`, () => {
    test(`corectly responds to a tie`, () => {
        expect(winning.whoWon(rock, rock)).toBe(`TIE!`);
    });
    test(`correctly responds if paper beats rock`, () => {
        expect(winning.whoWon(rock, paper)).toBe(`Player 2 wins!`);
    });
    test(`correctly responds if scissors beats paper`, () => {
        expect(winning.whoWon(paper, scissors)).toBe(`Player 2 wins!`);
    });
    test(`correctly responds if rock wins over scissors`, () => {
        expect(winning.whoWon(scissors, rock)).toBe(`Player 2 wins!`);
    });
    test(`checks and stops invalid inputs`, () => {
        expect(winning.whoWon(`rock`, `phil`)).toBe(`enter valid input`);
    });
});