const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

// Creates instance of web3 and tells it to connect to the provider (ganache, in this case)
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  try {
    // get a list of all accounts
    accounts = await web3.eth.getAccounts();
    // console.log(accounts);

    // ! contract is a constructor function, first argument is our ABI, parsed to JS object from JSON to be deployed and sent
    inbox = await new web3.eth.Contract(JSON.parse(interface))
      // ! deploy new contract with data property and arguments (argument that starts the Inbox function on the .sol file)
      .deploy({ data: bytecode, arguments: ["Hi there!"] })
      // account that is deploying the contract and gas limit
      .send({ from: accounts[0], gas: "1000000" });
  } catch (error) {
    console.log(error);
  }
});

describe("Inbox", () => {
  // test to guarantee we are deploying a contract
  it("deploys a contract", () => {
    // console.log(accounts);
    // console.log(inbox);

    // if this value is any truthy value, the assertion will pass
    assert.ok(inbox.options.address);
  });

  // test to guarantee we have a default message on our contract
  it("has a default message", async () => {
    // reference the contract, access the "methods" property
    // "methods" is an object that contains all of our contracts functions
    const message = await inbox.methods.message().call(); // .message(arguments).call(customize transaction)
    assert.strictEqual(message, "Hi there!");
  });

  // test to guarantee we can edit our contracts message
  it("can change the message", async () => {
    // since we are trying to modify the contracts data we use .send({who is paying})
    const transactionObject = await inbox.methods.setMessage("bye").send({ from: accounts[0] });

    const message = await inbox.methods.message().call();
    assert.strictEqual(message, "bye");

    // we don't need this transaction object, I just included it to see what we receive from a transaction
    console.log(transactionObject);
  });
});
