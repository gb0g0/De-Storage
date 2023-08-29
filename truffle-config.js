
// const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
   
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    
  },


  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20",      
    }
  },

};