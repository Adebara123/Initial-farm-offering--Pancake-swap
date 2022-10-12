import { ethers } from "hardhat";

async function main() {

  const [addr1] = await ethers.getSigners(); 
  
  
  const IFO = await ethers.getContractFactory("IFO");
  const ifo = await IFO.deploy();

  await ifo.deployed();

  console.log(`IFO deployed to ${ifo.address}`);

  const Token = await ethers.getContractFactory("Erc20Token");
  const token = await Token.deploy(addr1.address)
  await token.deployed()

  console.log("Token address",token.address)

  const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const startBlock = await ifo.startBlock();
  const endBlock = await Number(startBlock) + (28592 * 4);
  console.log(Number(startBlock))

 const initializeContract = await ifo.initialize(DAI, token.address, startBlock, endBlock, 100, 100, addr1.address) 
 console.log(initializeContract);




}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
