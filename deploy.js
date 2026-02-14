const { ethers } = require('ethers');

const DEPLOYER_KEY = '';

async function deploy() {
  const wallet = new ethers.Wallet(DEPLOYER_KEY);
  console.log('Deploying from:', wallet.address);
}

deploy();
