// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {

  const GuestBook = await ethers.getContractFactory("GuestBook");

  // here we deploy the contract
  const deployedGuestBookContract = await GuestBook.deploy();

  // wait for the contract to deploy
  await deployedGuestBookContract.deployed();
 
  // print the address of the deployed contract
  console.log("GuestBook Contract Address:", deployedGuestBookContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
