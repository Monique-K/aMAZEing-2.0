import React, { Component } from 'react';
import './App.scss';
import { maze1Info } from './mazes/maze1';
import { maze1 } from './mazes/maze1';
import { maze2Info } from './mazes/maze2';
import { maze2 } from './mazes/maze2';

class App extends Component {
  constructor(){
    super()

    this.state = {
      win: false,
      currentMaze: maze2,
      mazeX: maze2Info.width,
      mazeY: maze2Info.height,
      boxSize: maze2Info.boxSize,
      score: 0,
      winningPos: {
        row: maze2Info.winningPos.row,
        col: maze2Info.winningPos.col
      },
      player: {
        row: maze2Info.player.row,
        col: maze2Info.player.col
      },
    }
  }

  // componentWillMount = () => {
  //   this.setState({
  //     currentMaze: maze1,
  //     mazeX: mazeInfo.width,
  //     mazeY: mazeInfo.height
  //   })
  // }

  componentDidMount = () => {
    document.addEventListener("keydown", this.movePlayer)
  }

  renderMaze = () => {
    const mazeArray = []
    let maze = this.state.currentMaze
    let px = this.state.boxSize

    if (!this.state.win) {
      for (let row = 0; row < maze.length; row ++) {
        for (let col = 0; col < maze[row].length; col++) {
          if (maze[row][col] === 1) {
            mazeArray.push(<div id={`row${row}-col${col}`} key={`row${row}-col${col}`} className='box wall' style={{height: px, width: px}}></div>);
          } else if (maze[row][col] === 0) {
            mazeArray.push(<div id={`row${row}-col${col}`} key={`row${row}-col${col}`} className='box ground' style={{height: px, width: px}}></div>);
          } else if (maze[row][col] === 3) {
            mazeArray.push(<div id='player' key={`row${row}-col${col}`} className='box ground' style={{height: px, width: px}}></div>);
          } else if (maze[row][col] === 4) {
            mazeArray.push(<div id={`row${row}-col${col}`} key={`row${row}-col${col}`} className='box coin' style={{height: px, width: px}}></div>);
          } else if (maze[row][col] === 5) {
            mazeArray.push(<div id={`row${row}-col${col}`} key={`row${row}-col${col}`} className='box treasure' style={{height: px, width: px}}></div>);
          }
        }
      }
      return mazeArray
    } 
    return <img src={require('../src/images/win-taco.gif')} alt="You win, have a taco!" className="win-img"/>
  }

  showPlayer = () => {
    let player = this.state.player
    let px = this.state.boxSize

    if (player && !this.state.win) {
      return (
        <div id='player' 
          className='player' 
          style={{
            position: "absolute", 
            top: player.row * px, 
            left: player.col * px,
            height: px,
            width: px
            }}>
        </div>
      )
    }
  }

  // 180l  X 30h
 // col 11 row 6 

  getPoints = (newPos) => {
    // Allot points if player moves over coins or treasure
    if (newPos === 4) {
      let newMaze = this.state.currentMaze
      newMaze[this.state.player.row][this.state.player.col] = 0
      this.setState({score: this.state.score + 1, currentMaze: newMaze})
      }
    if (newPos === 5) {
      let newMaze = this.state.currentMaze
      newMaze[this.state.player.row][this.state.player.col] = 0
      this.setState({score: this.state.score + 10, currentMaze: newMaze})
    }
  }

  movePlayer = (e) => {
    let player = this.state.player
    let winningPos = this.state.winningPos
    let maze = this.state.currentMaze
    let newPos 

    // only move player if game is not over (win = false)
    if (!this.state.win) {

      // win the game if player exists the maze
      if (player.col === winningPos.col && player.row === winningPos.row) {
        this.setState({win: true, player: null})
      } 
      
      // move player's position if move will not put player inside a wall
      else if (e.code === "ArrowLeft" ) {
        newPos = maze[player.row][player.col - 1]
        if (maze[player.row][player.col - 1] !== 1) {
          this.setState({player: {...this.state.player, col: this.state.player.col - 1}})
        }
      } 
      else if (e.code === "ArrowUp") {
        newPos = maze[player.row - 1][player.col]
        if (maze[player.row - 1][player.col] !== 1) {
          this.setState({player: {...this.state.player, row: this.state.player.row - 1}})
        }
      } 
      else if (e.code === "ArrowRight") {
        newPos = maze[player.row][player.col + 1]
          if (maze[player.row][player.col + 1] !== 1) {
          this.setState({player: {...this.state.player, col: this.state.player.col + 1}})
        }
      } 
      else if (e.code === "ArrowDown") {
        newPos = maze[player.row + 1][player.col]
        if (maze[player.row + 1][player.col] !== 1) {
          this.setState({player: {...this.state.player, row: this.state.player.row + 1}})
        }
      }
      this.getPoints(newPos)
    }
  }
    

  replay = () => {
    this.setState({
      win: false,
      currentMaze: maze1,
      mazeX: maze1Info.width,
      mazeY: maze1Info.height,
      boxSize: maze1Info.boxSize,
      score: 0,
      winningPos: {
        row: maze1Info.winningPos.row,
        col: maze1Info.winningPos.col
      },
      player: {
        row: maze1Info.player.row,
        col: maze1Info.player.col
      }
    })
  }
  

  render() {
    const px = this.state.boxSize

    return (
      <div className="App">
      
        <div className="title-container">a-MAZE-ing</div>
        
        <div className="maze-container" style={{height: this.state.mazeY * px, width: this.state.mazeX * px}}>
          {this.renderMaze()}
          {this.showPlayer()}
        </div>
        <div className="bottom-container">
          <div className="score">
            Score: {this.state.score}
          </div>
          <div className="replay-btn-container">
            <div className="replay-btn" onClick={this.replay}>Play Again</div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

/*
TO DO:

- set maze container size based on maze
- change replay fn to account for which maze is current
- fix diseappearing treasure on replay
- add timing to score
- add name and leaderboard, persistent score



*/