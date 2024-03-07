// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductVerification {
    mapping(bytes32 => bool) private verifiedProducts;

    event ProductVerified(bytes32 indexed hash, bool verified);

    function generateHash(string memory productName, string memory productCategory,string memory productDesc) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(productName, productDesc,productCategory));
    }

    function verifyProduct(bytes32 hash) public view returns (bool) {
        return verifiedProducts[hash];
    }

    function markProductVerified(bytes32 hash) public {
        require(!verifiedProducts[hash], "Product already verified");
        verifiedProducts[hash] = true;
        emit ProductVerified(hash, true);
    }
}