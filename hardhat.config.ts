import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-truffle5";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import * as dotenv from 'dotenv';
dotenv.config();
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: {  
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 250,
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,

    },
  
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/FcBMDTwfZJqASzsKMreJJwda7JNw6v-E`,
      accounts: ["9ff2109a0fe9891689ec9e9e187fcc0495f96be7d7f60d8a0bfd99136c72d022"],
    },
    meta: {
      url: "http://localhost:8545",
       chainId: 1337,
    },
   
  },
  etherscan: {
    apiKey: "UIRKFIKTY5G4KWIPJMYWTCX2Z3EDBRFS3A",
  },
};

export default config;