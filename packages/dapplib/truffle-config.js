require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remember promote idea nation flee tennis'; 
let testAccounts = [
"0xcbc305d50682a86b39a5cc0480dd99715c4b6116f9b3b604f3dab17590118464",
"0xf251bad7f1880efac0b54eaa3379fe4794d6742d621fb4b01329b28497812978",
"0x25ff30ebba4366c3e30ca9e7f2535954bc221adf2b09f3eb473c2f540d8ee124",
"0x9642f6c3e871e061f40e966e97262c51ffcffda28eae8a8901eef2ce705c8fa3",
"0x7c3bfe7eff582d2fd99a36b76053ec5eea7c48d40260983f26867b78f1ae2df0",
"0xba21270f36ecf4008f6c4437d8593be4f2e1e558a95ef9c0526d4ba551caffb3",
"0xa44077c11a8b05f6959fba6a5b6d3f860b30e9bc6c6b439da2c8ebf320622c36",
"0x26cc38a748bb86fbee6f6f178ea79770f3e7cb78f686e13513d39555fffc9974",
"0x5d8bffdf35953bc3514bd1e8ed20e5d9ee3c4a8d4c5d5591030c8a3e4d1cc34e",
"0x711e06cd4dce9f662f365008cda973ae0cd54d34203bd930885ad95c093294b8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
