const Web3 = require('web3')

//cryptokitty abi
const { abi } = require('./abi')

const cryptokittiesContractAddress =
  '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'

const ws_provider = 'wss://mainnet.infura.io/ws'

const web3 = new Web3(new Web3.providers.WebsocketProvider(ws_provider))

const contract = new web3.eth.Contract(abi, cryptokittiesContractAddress)

contract.events
  .Birth(
    {
      toBlock: 'latest'
    }
    // ,function(error, event) {
    //   console.log('err', error)
    //   console.log('event', event)
    // }
  )
  .on('data', event => console.log('data', event))
  .on('changed', event => console.log('changed', event))
  .on('error', event => console.log('error', event))
