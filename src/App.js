import React, { Component } from 'react';
import './App.css';
import './login.js';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "", "", "", "", "", "", "", "", ""
      ],
      winner: null
    }
  }

// signUp() {
//   return (
//     this.state.login.signUp.email.indexOf(`@`) &&
//     this.state.login.signUp.password === this.state.login.signUp.passwordConfirmation &&
//     this.state.login.signUp.password.length > 8 &&
//     this.state.login.signUp.passwordConfirmation.length > 8
//   )
// }

  handleClick(index) {
    if (this.state.board[index] === "") {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn === this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL,
        winner: this.checkForWinner()
      })
    }
  }

  checkForWinner() {
    var currentTurn = this.state.currentTurn
    var symbols = this.state.board
    var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find(function(combo) {
      if(symbols[combo[0]] !=="" && symbols[combo[1]] !=="" && symbols[combo[2]] !== ""  && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn
      } else {
        return false
      }
    })
  }

  // newGame() {
  // if (this.state.winner !== null) {
  //   this.state.board.setState({
  //     board = ""
  //   })
  // } else {
  //   return false
  // }
  // }

  render() {
    return (
      <div className="App-container">
          <h1 className="App-title">Tic Tac Toe</h1>
          <form className="Login">Login</form>

          {this.state.winner ? <h2>{`The winner is ${this.state.winner}`}</h2> : null}
            <div className="board">
            {this.state.board.map((cell, index) => {
              return <div onClick={() => this.handleClick(index)} className="square">{cell}</div>;
            })}
            </div>
            <div>
            <button className="btn-primary">New Game</button>
            {this.newGame ? <h3>{`Sorry, you must finish the game before playing a new one.`}</h3> : null}
            </div>
            </div>
    )
  }
}

export default App;
