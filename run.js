Web3 = require('web3')
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log(web3.eth.accounts)
var fs  = require('fs')
code = fs.readFileSync('Voting.sol').toString()
solc = require('solc')
compiledCode = solc.compile(code)
//console.log(compiledCode)
abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface)
VotingContract = web3.eth.contract(abiDefinition)
byteCode = compiledCode.contracts[':Voting'].bytecode
deployedContract = VotingContract.new(['Rama','Nick','Jose'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000}, function(e, contract){
 if(!e) {
   if(!contract.address) {
     console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
   } else {
     console.log("Contract mined! Address: " + contract.address);
contractInstance = VotingContract.at(deployedContract.address)
console.log(contractInstance.totalVotesFor.call('Rama'))
contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
contractInstance.voteForCandidate('Rama', {from: web3.eth.accounts[0]})
console.log(contractInstance.totalVotesFor.call('Rama').toLocaleString())

   }     
}   else{   console.log(e);     
     }  
     })



