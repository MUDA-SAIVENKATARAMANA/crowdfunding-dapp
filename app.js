// app.js
const { web3, contract } = configureWeb3(); // Set up Web3.js and get the contract instance

async function updateUI() {
    const goal = await contract.methods.goal().call();
    const raised = await contract.methods.raisedAmount().call();
    
    document.getElementById("goal").textContent = goal;
    document.getElementById("raised").textContent = raised;
}

async function contribute() {
    const contribution = document.getElementById("contribution").value;
    await contract.methods.contribute().send({ value: web3.utils.toWei(contribution, "ether") });
    updateUI();
}

async function withdraw() {
    await contract.methods.withdraw().send();
    updateUI();
}

updateUI();
