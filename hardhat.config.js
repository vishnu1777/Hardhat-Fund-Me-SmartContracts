require("@nomicfoundation/hardhat-toolbox");
require('hardhat-deploy')
require('dotenv').config()
require('hardhat-gas-reporter')
require("solidity-coverage")
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-solhint");


const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETH_API_KEY = process.env.ETHER_API_KEY || "0xapi"
const coinmarketcapApiKey = process.env.COIN_MARKET_CAP_API || "bsbs"
module.exports = {
  defaultNetwork: 'hardhat',
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.6.6",
      },
    ],
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETH_API_KEY,
  },
  networks: {

    hardhat: {
      chainId: 31337,
      // gasPrice: 130000000000,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
      blockConfirmations: 6,
    },
  },
  gasReporter:
  {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "INR",
    coinmarketcap: coinmarketcapApiKey,
    token: "MATIC"

  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
  }
};