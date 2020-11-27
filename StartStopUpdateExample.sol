
pragma solidity >=0.5.11 <0.7.0;
//VALUE: 1 ether, click sendMoney -> 1st ACCOUNT: 98.999(decreased by 1)
//2nd ACCOUNT: copy address & paste it in withdrawAllMoney, click
//-> 2nd ACCOUNT: 101 (increase by 1)

//select 3rd ACCOUNT, copy address & paste in withdrawAllMoney, then click 
//-> Transaction failed: "Your are not the owner"

//after paused, function setPaused(...), require(...) in function withdrawAllMoney
//now  ACCOUNT is 3rd account, then go back to 1st. setPaused to true, click!
//-> Transaction failed( "Your are not the onwner".)

//-> ACCOUNT : 3rd, success!
//Value: 1, click sendMoney
//setPaused -> false, withdrawAllMoney:3rd ACCOUNT -> success!
contract StartStopUpdateExample {
 //control over who owns the smartcontract   
 address owner;
 
 bool public paused;
 
 //
 function setPaused(bool _paused) public {
     require(msg.sender == owner, "Your are not the onwner");
     paused = _paused; 
 }
 
 constructor() public {
     owner = msg.sender;
 }
 
 function sendMoney() public payable {
 }
 function withdrawAllMoney(address payable _to) public {
  require(msg.sender == owner, "Your are not the owner");
  // to succeed=> paused == false
  require(!paused, "Contract is paused");
 _to.transfer(address(this).balance);
 }
}