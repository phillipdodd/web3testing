import React, { Component } from 'react';
import AxieCard from '../components/AxieCard'
import Web3 from 'web3';
const AxieClockAuctionABI = require('../lib/AxieClockAuctionABI');
const AxieClockAuctionAddress = "0xF4985070Ce32b6B1994329DF787D1aCc9a2dd9e2";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      web3: new Web3(Web3.givenProvider, null, {}),
      axies: []
    };
  }

  componentWillMount() {
    var contract = this.state.web3.eth.Contract(
        AxieClockAuctionABI,
        AxieClockAuctionAddress
    );
    this.state.web3.eth.getBlock('latest').then(r => {
        contract
          .getPastEvents('AuctionSuccessful', {
            fromBlock: r.number - 1000,
            toBlock: r.number
          })
          .then(responseArray => {
            console.log(responseArray)
            responseArray.forEach(response => {
              let {
                returnValues: {
                  1: _tokenId
                },
                returnValues: {
                  2: _totalPrice
                }
              } = response;
              _totalPrice = this.state.web3.utils.BN(
                this.state.web3.utils.fromWei(_totalPrice._hex, 'ether')
              ).toFixed(4).valueOf();
              _tokenId = this.state.web3.utils.hexToNumberString(_tokenId._hex);
              this.setState(prevState => ({
                axies: [...prevState.axies, {_totalPrice, _tokenId}]
              }));            
            })
          })
          .catch(e => console.error(e));
    }).catch(e => console.error(e))
  }

  render() {
    let key = 1;
    return (
      <div>
        {this.state.axies.map(axie => (
          <AxieCard key={key++} axieId={axie._tokenId} axiePrice={axie._totalPrice}/>
        ))}
      </div>
    );
  }
}

export default App;