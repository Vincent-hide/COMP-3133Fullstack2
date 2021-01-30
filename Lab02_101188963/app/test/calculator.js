const expect = require("chai").expect;
const calc = require("../calculator");

console.log(calc);

describe("MY TEST", () => {
  it("add(5, 2) expected result 7", (done) => {
    expect(calc.add(5, 2)).to.equal(7);
    done();   
  });

  it("add(5, 2) expected result 8", (done) => {
    expect(calc.add(5, 2)).to.equal(8);
    done();   
  });

  it("sub(5, 2) expected result 3", (done) => {
    expect(calc.sub(5, 2)).to.equal(3);
    done();   
  });

  it("sub(5, 2) expected result 5", (done) => {
    expect(calc.sub(5, 2)).to.equal(5);
    done();   
  });

  it("mul(5, 2) expected result 10", (done) => {
    expect(calc.sub(5, 2)).to.equal(10);
    done();   
  });

  it("mul(5, 2) expected result 12", (done) => {
    expect(calc.sub(5, 2)).to.equal(12);
    done();   
  });

  it("div(5, 2) expected result 5", (done) => {
    expect(calc.sub(5, 2)).to.equal(5);
    done();   
  });

  it("div(5, 2) expected result 2", (done) => {
    expect(calc.sub(5, 2)).to.equal(2);
    done();   
  });

})