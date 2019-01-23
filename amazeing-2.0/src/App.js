import React, { Component } from 'react';
import './App.scss';
import { mazeInfo } from './mazes/maze1';
import { maze1 } from './mazes/maze1';

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentMaze: maze1,
      mazeX: mazeInfo.width,
      mazeY: mazeInfo.height,
      winningPos: mazeInfo.winningPos,
      player: {
        row: mazeInfo.player.row,
        col: mazeInfo.player.col
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

  // setMazeStyle = () => {
  //   if (this.state.mazeX && this.state.mazeY) {
  //     const mazeStyle = {
  //       width: this.state.width * 10, 
  //       height: this.state.height * 10
  //     }
  //     return mazeStyle
  //   }
  // }

  renderMaze = () => {
    const mazeArray = []
      let maze = this.state.currentMaze
      for (let row = 0; row < maze.length; row ++) {
        for (let col = 0; col < maze[row].length; col++) {
          if (maze[row][col] === 1) {
            mazeArray.push(<div id={`row${row}-col${col}`} key={`${row}${col}`} className='wall'></div>);
          } else if (maze[row][col] === 0) {
            mazeArray.push(<div id={`row${row}-col${col}`} key={`${row}${col}`} className='ground'></div>);
          } else if (maze[row][col] === 3) {
            mazeArray.push(<div id='player' key={`${row}${col}`} className='ground'></div>);
          } else if (maze[row][col] === 4) {
            mazeArray.push(<div id={`row${row}-col${col}`} src='/imgs/coin.jpg' key={`${row}${col}`} className='coin'></div>);
          }
        }
      }
    return mazeArray
  }

  showPlayer = () => {
    let player = this.state.player
    return (
      <div id='player' className='player' style={{position: "absolute", top: player.row * 50, left: player.col * 50}}>
      </div>
      )
  }

  movePlayer = (e) => {
    let player = this.state.player
    let winningPos = this.state.winningPos
    let maze = this.state.currentMaze

    if (player.col === winningPos.col && player.row === winningPos.row) {
      console.log("you win!")
      // document.getElementById("map").innerHTML = "";
      // document.getElementById("map").innerHTML = "<img id='victory-img' src='imgs/win-taco.gif' />"
      // document.getElementById("play-again").innerHTML += "<h1>Play again<h1>";
    } else if (e.code === "ArrowLeft" ) {
      if (maze[player.row][player.col-1] !== 1) {
        if (maze[player.row][player.col-1] === 4) {
          // score ++;
        }
        this.setState({player: {...this.state.player, col: this.state.player.col - 1}})
      }
    } else if (e.code === "ArrowUp") {
      if (maze[player.row-1][player.col] !== 1) {
        if (maze[player.row-1][player.col] === 4) {
          // score ++;
        }
        this.setState({player: {...this.state.player, row: this.state.player.row - 1}})
      }
    } else if (e.code === "ArrowRight") {
        if (maze[player.row][player.col+1] !== 1) {
          if (maze[player.row][player.col+1] === 4) {
            // score ++;
          }
        this.setState({player: {...this.state.player, col: this.state.player.col + 1}})
      }
    } else if (e.code === "ArrowDown") {
      if (maze[player.row+1][player.col] !== 1) {
        if (maze[player.row+1][player.col] === 4){
          // score ++;
        }
        this.setState({player: {...this.state.player, row: this.state.player.row + 1}})
      }
    }
  }
  

  render() {
    return (
      <div className="App">
      
        <div className="title-container">a-MAZE-ing</div>
        
        <div className="maze-container" >
        {this.renderMaze()}
        {this.showPlayer()}
        </div>

      </div>
    );
  }
}

export default App;

/*
TO DO:

-set maze container size based on maze



*/