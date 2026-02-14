const { ethers } = require('ethers');

const DEPLOYER_KEY = '0x4b87f4a3a2335d0ea59b53539e852bd35f5134d97a467fe279200a84b2ebb019';

async function deploy() {
  const wallet = new ethers.Wallet(DEPLOYER_KEY);
  console.log('Deploying from:', wallet.address);
}

deploy();
