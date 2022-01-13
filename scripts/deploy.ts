import { ethers } from "hardhat";

async function main() {
  const contractFactory = await ethers.getContractFactory("BesuTest");

  const contractInstance = await contractFactory.deploy();

  console.info("Contract addr:",  contractInstance.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
