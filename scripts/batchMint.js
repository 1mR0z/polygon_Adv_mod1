const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("Imroz_NFT");
  const myNFT = await MyNFT.attach(
    "0xa17EcA0640A0Ac5589396F4F9009F14915018081"
  );

  // Generate an array of recipient addresses
  const recipient = "0xB029C7CAB1f6eDb937051b1DA87bFD5EF90f7378";

  // Generate an array of token URIs corresponding to the recipients
  const tokenURIs = [
    "ipfs://QmQ5J6PbBNGXgzbqP1H2fykFJ95MndxMN7eDmz67D7MA2w",
    "ipfs://QmYAun7Ho6pwoZXi8t98rb3Zr8xK6WjB5LAi4Ztsdj1cHA",
    "ipfs://QmZjyA6LhmuYMKwMd4RnLo4vHLUQ7oijwByLYXzuXrYk2Y",
    "ipfs://QmcKY3str8vYEHKdPRojzFogwGnHyABZDSDTDY7PdG5nSv",
    "ipfs://QmWxCDR6PUfx4852UNngBV4xXep71tNihpDU4g1c9udwhq",
    // Add more token URIs as needed
  ];

  // Batch mint NFTs
  const batchMint = await myNFT.batchMint(recipient, tokenURIs);

  // Wait for the transaction to be mined
  await batchMint.wait();

  console.log("You have successfully minted NFTS");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
