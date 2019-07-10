import React, { Component } from 'react';
import Web3 from 'web3';
const AxieClockAuctionABI = require('../lib/AxieClockAuctionABI');
const AxieClockAuctionAddress = "0xF4985070Ce32b6B1994329DF787D1aCc9a2dd9e2";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isConnected: false};
    // this.web3 = new Web3('ws://localhost:8545');
    this.web3 = new Web3(Web3.givenProvider, null, {});
    }

  componentWillMount() {
    var contract = this.web3.eth.Contract(
        AxieClockAuctionABI,
        AxieClockAuctionAddress
    );
    this.web3.eth.getBlock('latest').then(r => {
      console.log(`latest block is ${r.number}`)
        contract.getPastEvents('AuctionSuccessful', {
            fromBlock: r.number - 1000,
            toBlock: r.number
        }).then(r => console.log(r)).catch(e => console.error(e));
    }).catch(e => console.error(e))
    // console.log(contract.getPastEvents('OwnershipTransferred'))
  }

  render() {
    return (
      <div>
        <h2>Current provider is</h2><br/>
      </div>
    );
  }
}

export default App;