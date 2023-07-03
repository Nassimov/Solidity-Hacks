import { ethers } from "hardhat";
import { Contract } from "ethers";
async function main() {
  const [deployer] = await ethers.getSigners();

  // let tfucket: Contract;
  // let _tfucket = await ethers.getContractFactory("tfucket");
  // tfucket = await _tfucket.connect(deployer).deploy();
  // await tfucket.deployed();
  // console.log(`tfucket deployed to ${tfucket.address}`);
  let tfucket: Contract;
  let _tfucket = await ethers.getContractFactory("Tfucket");
  tfucket = await _tfucket.connect(deployer).deploy();
  await tfucket.deployed();
  console.log(`Tfucket deployed to ${tfucket.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

