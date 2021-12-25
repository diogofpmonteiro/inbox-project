const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

const provider = new HDWalletProvider(
  "trigger slim someone measure outside flush never high tide bounce cabbage possible",
  "https://rinkeby.infura.io/v3/1f9973ec86b141bc882ffffe36c855eb"
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    // get a list of all accounts
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);

    // the argument is our ABI parsed to a JS object from JSON to be deployed and sent
    // when we call eth.Contract() we are creating a new contract
    const result = await new web3.eth.Contract(JSON.parse(interface))
      // deploy new contract
      .deploy({ data: evm.bytecode.object, arguments: ["Hi there!"] })
      // specify details, like account that is deploying the contract and gas limit
      .send({ from: accounts[0], gas: "1000000" });

    console.log("Contract deployed to ", result.options.address);
    // this code serves to prevent a hanging deployment
    provider.engine.stop();
  } catch (error) {
    console.log(error);
  }
};
deploy();
