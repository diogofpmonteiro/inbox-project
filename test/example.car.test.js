// const assert = require("assert");
// const ganache = require("ganache-cli");
// const Web3 = require("web3");

// // Creates instance of web3 and tells it to connect to the provider (ganache, in this case)
// const web3 = new Web3(ganache.provider());

// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

// let car;
// // any logic placed inside this function will be executed before each "it" block
// beforeEach(() => {
//   // since we ran the before each we don't need the "car" variable in the "it" blocks
//   car = new Car();
// });

// // output report
// describe("Car", () => {
//   it("can park", () => {
//     const car = new Car();
//     assert.strictEqual(car.park(), "stopped");
//   });

//   it("can drive", () => {
//     const car = new Car();
//     assert.strictEqual(car.drive(), "vroom");
//   });
// });
