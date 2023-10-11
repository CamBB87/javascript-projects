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







});