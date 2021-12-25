const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

// Creates instance of web3 and tells it to connect to the provider (ganache, in this case)
const web3 = new Web3(ganache.provider());
