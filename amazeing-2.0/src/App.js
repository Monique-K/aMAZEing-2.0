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

  render() {
    return (
      <div className="App">
        
        <div className="maze-container" style={{width: this.state.width, height: this.state.height}}>
        </div>

      </div>
    );
  }
}

export default App;
