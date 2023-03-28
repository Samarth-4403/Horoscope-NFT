const hre = require("hardhat"); 

async function main() {  

    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
	
	//since we are testing, you should mention your own Eth wallet address
    const myAddress="0x696dcEF069A64Cfd7D12F0C67ce889F6E5C2a22A";
    console.log("horoscopeNFT deployed to:", hscp.address);   

    let txn = await hscp.mintNFT(myAddress, 'Aries');
    await txn.wait();

 } 

main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1); 
 });