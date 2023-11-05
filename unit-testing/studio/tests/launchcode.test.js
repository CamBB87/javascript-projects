// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test ("testing Launchcode", () => {
    expect(launchcode.organization).toBe("nonprofit");
  });
  test("checks executive director", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });
  test(`checks cool employees`, () => {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test(`checks programs offered`, () => {
    expect(launchcode.programsOffered[0]).toBe(`Web Development`);
    expect(launchcode.programsOffered[1]).toBe(`Data Analysis`);
    expect(launchcode.programsOffered[2]).toBe(`Liftoff`);
    expect(launchcode.programsOffered.length).toBe(3);
  });

  describe(`testing the launchOutput method within the object`, () => {

    test(`responds with Launch! when passed a number divisable by only 2`, () => {
      expect(launchcode.launchOutput(8)).toBe(`Launch!`);
    });
    test(`responds with Code! when passed a number divisavle by only 3`, () => {
      expect(launchcode.launchOutput(9)).toBe(`Code!`);
    });
    test(`responds with Rocks! when passed a number divisable by only 5`, () => {
      expect(launchcode.launchOutput(5)).toBe(`Rocks!`);
    });
    test(`responds with LaunchCode! when passed a number divisable by both 2 and 3`, () => {
      expect(launchcode.launchOutput(12)).toBe(`LaunchCode!`);
    });
    test(`responds with Code Rocks! when passed a number divisable by both 3 and 5`, () => {
      expect(launchcode.launchOutput(15)).toBe(`Code Rocks!`);
    });
    //refactor test with (CRASH!!!!)
    test(`responds with Launch Rocks! (CRASH!!!!) when passed a number divisable by both 2 and 5`, () => {
      expect(launchcode.launchOutput(20)).toBe(`Launch Rocks! (CRASH!!!!)`);
    });
    test(`responds with LaunchCode Rocks! when passed a number divisable by 2, 3, and 5`, () => {
      expect(launchcode.launchOutput(30)).toBe(`LaunchCode Rocks!`);
    });
    test(`responds with Rutabagas! That doesn't work. when passed a number NOT divisable by 2, 3, and 5`, () => {
      expect(launchcode.launchOutput(29)).toBe(`Rutabagas! That doesn't work.`);
    });



  });



  // test(``, () => {
  //   expect(launchcode.)
  // })

});