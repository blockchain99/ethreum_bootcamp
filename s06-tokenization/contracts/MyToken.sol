//SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;
import "../openzeppelin3.2.0/contracts/token/ERC20/ERC20.sol";
contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("StarDucks Capu-Token", "SCT") public {
        //_mint : giving initiaalSupply(2_deploy_contract.js: await deployer.deploy(MyToken, 1000000000);) 
        // to msg.sender (who create the token)
        _mint(msg.sender, initialSupply); 
        // _setupDecimal(0);
        _setupDecimals(0);

}
}