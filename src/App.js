import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.css';

import Column from './_components/column/column.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 1
    };
  }

  render() {
    var columns=[];
    for(var i=0;i<this.state.columnCount;i++){
      columns.push(<Column key={i} />);
    }

    return (
      <div className="App">
        <AppBar>
          <Toolbar>
             <Typography variant="title" color="inherit">
               Simon Says - Notepad
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="columns-container">
          {columns}
        </div>
      </div>
    );
  }
}

export default App;
