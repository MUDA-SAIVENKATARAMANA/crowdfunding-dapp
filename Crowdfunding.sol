// Crowdfunding.sol
pragma solidity ^0.8.0;

contract Crowdfunding {
    address public owner;
    uint public goal;
    uint public raisedAmount;
    mapping(address => uint) public contributions;
    bool public closed;

    constructor(uint _goal) {
        owner = msg.sender;
        goal = _goal;
    }

    function contribute() public payable {
        require(!closed, "Crowdfunding is closed.");
        contributions[msg.sender] += msg.value;
        raisedAmount += msg.value;
        if (raisedAmount >= goal) {
            closed = true;
        }
    }

    function withdraw() public {
        require(closed, "Crowdfunding is still open.");
        require(msg.sender == owner, "Only the owner can withdraw funds.");
        payable(owner).transfer(raisedAmount);
    }
}
