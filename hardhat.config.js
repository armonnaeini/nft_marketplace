require("@nomiclabs/hardhat-waffle")
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectID = "3e67afc960b64fefaf35b16540a52f92"

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/${projectId}',
      accounts: [] //accounts from which we are deploying our contracts
    },
    mainnet: {
      url: 'https://polygon-mainnet.infura.io/v3/${projectId}',
      acounts: [] //accounts from which we are deploying our contracts
    }
  },
  solidity: "0.8.4",
};
