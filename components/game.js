import React, { Component } from 'react';
import { Board } from './board';
import { Form } from './form';
export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
      playerOne: 'Player One',
      playerTwo: 'Player Two'
    };
  }



  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

  
  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = this.calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner ;
    } else {
      status =  (this.state.xIsNext ? this.state.playerOne : this.state.playerTwo);
    }

    return (
      <div className="contianer">
        <div className="row mb-3">
          <div className="col-md-12 text-center">
          <div className="game-info">
              <h3>{status}</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Form  />
          </div>
          <div className="col-md-6">
           
            <div className="game">
              <div className="game-board">

                <Board
                  squares={current.squares}
                  onClick={(i) => this.handleClick(i)}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
