// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  const contracts = [
    "ZombieAttack",
    "ZombieFactory",
    "ZombieFeeding",
    "ZombieHelper",
    "ZombieOwnership",
  ];

  for (const contract of contracts) {
    const contractFactory = await ethers.getContractFactory(contract);
    const deployedContract = await contractFactory.deploy();

    await deployedContract.deployed();
    console.log(`${contract} deployed to:`, deployedContract.address);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
