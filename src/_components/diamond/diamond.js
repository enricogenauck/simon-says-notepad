import React from 'react';

import DiamondButton from './diamondButton';
import './diamond.css';

function Diamond({addEntry}) {
  return (
    <div className="diamond">
      <div className="diamond-button-wrapper">
        <DiamondButton color='blue'   position='1' addEntry={addEntry} />
        <DiamondButton color='yellow' position='2' addEntry={addEntry} />
        <DiamondButton color='green'  position='3' addEntry={addEntry} />
        <DiamondButton color='red'    position='4' addEntry={addEntry} />
      </div>
    </div>
  );
}

export default Diamond;
