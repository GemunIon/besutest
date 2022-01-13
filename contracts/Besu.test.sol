// SPDX-License-Identifier: UNLICENSED

// Author: TrejGun
// Email: trejgun+gemunion@gmail.com
// Website: https://gemunion.io/

pragma solidity ^0.8.0;

contract BesuTest {

  uint256 cId;
  constructor() {
    cId = block.chainid;
  }
}
