import React, { Component } from 'react';

import './App.css';

import Column from './_components/column/column.js';
import Menu from './_components/menu/menu.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnCount: 3
    };

    this.columnRefs = [];
    this.emptyColumns = this.emptyColumns.bind(this);
  }

  emptyColumns() {
    this.columnRefs.map((ref) => ref.current.purgeEntries());
    console.log(this.columnRefs);
  }

  render() {
    var columns=[];
    for(var i=0;i<this.state.columnCount;i++){
      var ref = React.createRef();
      this.columnRefs.push(ref);

      columns.push(<Column key={i} ref={ref} />);
    }

    return (
      <div className="App">
        <Menu resetCallback={this.emptyColumns} />
        <div className="columns-container">
          {columns}
        </div>
      </div>
    );
  }
}

export default App;
