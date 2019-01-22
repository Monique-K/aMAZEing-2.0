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
      mazeY: mazeInfo.height
    }
  }

  componentWillMount = () => {
    this.setState({
      currentMaze: maze1,
      mazeX: mazeInfo.width,
      mazeY: mazeInfo.height
    })
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
    // if (this.state.currentMaze !== null) {
      let maze = this.state.currentMaze
      for (let row = 0; row < maze.length; row ++) {
        for (let col = 0; col < maze[row].length; col++) {
          if (maze[row][col] === 1) {
            mazeArray.push(<div id={`row${row}-col${col}`} className='wall'></div>);
          } else if (maze[row][col] === 0) {
            mazeArray.push(<div id={`row${row}-col${col}`} className='ground'></div>);
          } else if (maze[row][col] === 3) {
            mazeArray.push(<div id='player' className='player'></div>);
            // mazeArray.push(img id='player' src='/imgs/t-rex.jpeg' className='player'></div>);
          } else if (maze[row][col] === 4) {
            mazeArray.push(<div id={`row${row}-col${col}`} src='/imgs/coin.jpg' className='coin'></div>);
          }
        }
      }
    // }
    return mazeArray
  }
  

  render() {
    return (
      <div className="App">
      
        <div className="title-container">a-MAZE-ing</div>
        
        <div className="maze-container">
        {this.renderMaze()}
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