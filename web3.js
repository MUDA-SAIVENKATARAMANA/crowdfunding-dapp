// web3.js configuration
function configureWeb3() {
    const Web3 = require('web3');
    const web3 = new Web3('your-infura-url'); // Replace with your Infura URL or other Ethereum node

    const contractAddress = 'your-contract-address';
    const contractABI = [...]; // Replace with your contract's ABI

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    return { web3, contract };
}
