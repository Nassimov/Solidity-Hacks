import { Contract } from "ethers";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

export async function contractsDeployment() {

  let deployer: SignerWithAddress;

  let user1: SignerWithAddress;
  let tnaket: Contract;
  let tfucket: Contract;

  [
    deployer,
    user1
  ] = await ethers.getSigners();

  // define address relayer
  let _tnaket = await ethers.getContractFactory("Tnaket");
  tnaket = await _tnaket.connect(deployer).deploy();
  await tnaket.deployed();
  console.log(`tnaket deployed to ${tnaket.address}`);



  let _tfucket = await ethers.getContractFactory("Tfucket");
  tfucket = await _tfucket.connect(deployer).deploy();
  await tfucket.deployed();
  console.log(`tfucket deployed to ${tfucket.address}`);




  return {
    //wallets
    deployer,

    user1,
    tnaket,
    tfucket
   
  };
}
