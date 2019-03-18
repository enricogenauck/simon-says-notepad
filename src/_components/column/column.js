import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Diamond from '../diamond/diamond';
import './column.css';

import Entry from '../entry/entry';

class Column extends Component {
  constructor(props) {
    super(props);

    this.state       = { entries: [] };
    this.addEntry    = this.addEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
  }

  addEntry(color) {
    const new_entries = this.state.entries.concat([color]);

    this.setState({entries: new_entries});
  }
  removeEntry(position) {
    let new_entries = this.state.entries.slice();
    new_entries.splice(position, 1);

    this.setState({entries: new_entries});
  }
  purgeEntries() {
    this.setState({entries: []});
  }

  render() {
    const entries = this.state.entries.map((entry, i) => (
      <Entry key={i}
             color={entry}
             position={i}
             removeEntry={this.removeEntry} />
    ));

    return (
      <div className="column">
        <CSSTransitionGroup
          transitionName="column-entry"
          transitionEnterTimeout={200}
          transitionLeaveTimeout={200}>
            { entries }
        </CSSTransitionGroup>

        <div className="column-diamond-container">
          <Diamond addEntry={this.addEntry} />
        </div>
      </div>
    );
  }
}

export default Column;
