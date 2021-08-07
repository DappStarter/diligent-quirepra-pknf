require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good enter bottom solution finger deliver remind concert harvest nasty foster total'; 
let testAccounts = [
"0x1a728a7ea92266a13ec1b4dd8ad1ba7487cf6f91ae47188e8578af5ca330abc8",
"0x5d07e49a2c03d9bcf406b1d5ee73af057ad85eb0d9b26ceec7ec6d54a905ca92",
"0x998630fe68793daecb9ec53342c5f90fcdcf3dd57e89d34085172ef355f114cd",
"0xd5e1e99ea353e3db2d5de3a235aee5a798562eb0d5a4658c9281342ae6c2056e",
"0xcdf51ad7d4fc2da07c8bac3ed62e223bb6391513ede5234e7ed19f739976c444",
"0x478c20fc1a886b1beb8455eca6e783aa8dd580437eee4e2827a7020b5e346ac7",
"0x7d0fdc8f8a59170ba047561543ed5b51a0f018820f5b7965aabe320cf60d6ea5",
"0x26f6153059f074963478a3274d563bfb3fd83b8e5d6e6a20869938868f509962",
"0x8bc6eb80aacd821fb1f67d21d8bee9183720fd682c468fb02836625175768408",
"0x9a046935ac54215da29ff4f5b6c1c37e102a95e41271788d0c5df5f1b63d2134"
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
            version: '^0.8.0'
        }
    }
};

