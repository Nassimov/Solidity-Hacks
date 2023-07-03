import { Contract, BigNumber, utils } from "ethers";
import { createFixtureLoader } from "ethereum-waffle";
import { contractsDeployment } from "./deployements";
import { ethers, expect } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { log } from "console";


const loadFixture = createFixtureLoader();
let tnaket: Contract;
let tfucket: Contract;

let user1: SignerWithAddress;
let deployer: SignerWithAddress;

const YOUSOV_USER_ROLE = ethers.utils.id("YOUSOV_USER_ROLE");

describe("Contract", () => {
  beforeEach(async function () {
    const fixture = await loadFixture(contractsDeployment);

    deployer = fixture.deployer;

    user1 = fixture.user1;

    tnaket = fixture.tnaket
    tfucket = fixture.tfucket
  
  });


  describe("CONTRACT ==> 'Tnaket '", async () => {

    it("test mint", async () => {
        console.log("###");
        
        console.log(""+await tfucket.balanceOf(deployer.address, BigNumber.from('0')));
        
        await tfucket.connect(deployer).mint(deployer.address,BigNumber.from('0'),BigNumber.from('13000000000000') , [])
        console.log(""+await tfucket.balanceOf(deployer.address, BigNumber.from('0')));
        
    });
  });

});