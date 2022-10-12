// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Erc20Token is ERC20("Token1", "TKN") {

    address owner;

    constructor (address addr) public {
        owner = msg.sender;
        _mint(addr, 10000e18);
    } 

}