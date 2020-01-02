import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NumberHolder } from './NumberHolder';
import { RouletteInput } from './RouletteInput';
import { RouletteButton } from './RouletteButton';

const randomizer = (money)=>{
	let value;
        switch (Math.trunc(Math.random()*8)) {
          case 0 : 
            value = 0;
            break;
          case 1 : 
            value = 0.3;
            break;
          case 2 : 
            value = 0.5;
            break;
          case 3 : 
            value = 0.8;
            break;
          case 4 :
            value = 1.3;
            break;
          case 5 :
            value = 1.5;
            break;
          case 6 :
            value = 1.8;
            break;
          case 7 :
            value = 2;
        }
	  value = Math.trunc(value * money);
	  return value;
}

class App extends React.Component {
constructor(props) {
  super(props)
  this.state = {
    value: 0,
    money: 0,
    onChange : (number) => {
      if(!isNaN(Number(number))){
        let money = number
        this.setState({money: Number(money)})
      }
    },
    onClick : ()=>{
	Array.apply(null,Array(5)).map((x)=>randomizer(this.state.money)).forEach(e=>this.setState({value: e}));
    }
  } 
}


render = () => {
  console.log(this.state.value, this.state.money)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Despair Roulette!
        </h1>
      </header>
      <div className="game-area">
        <NumberHolder value={this.state.value}/>
        <label className="roulette-label">Apuesta</label>
        <RouletteInput value={this.state.money} onChange={this.state.onChange} />
        <RouletteButton onClick={this.state.onClick} />
      </div>
    </div>
  );
}

}

export default App;