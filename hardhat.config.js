/** @type import('hardhat/config').HardhatUserConfig  */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: ".env" });

const QUICKNODE_RPC= process.env.QUICKNODE_RPC;
const PRIVATEKEY = process.env.PRIVATEKEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: QUICKNODE_RPC,
      accounts: [PRIVATEKEY],
    },
  },
};


