import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ]
    }
  }

  handleClick(index) {
    console.log(index);
  }

  render() {
    return (
      <div className="board">
      {this.state.board.map((cell, index) => {
        return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
      })}
      </div>
    )
  }
}

export default App;
