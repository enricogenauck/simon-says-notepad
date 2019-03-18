import React from 'react';

import './diamond.css';

function Diamond({addEntry}) {
  return (
    <div className="diamond">
      <div className="diamond-button-wrapper">
        <button className='diamond-button-1 blue'   onTouchStart={() => addEntry('blue')}></button>
        <button className='diamond-button-2 yellow' onTouchStart={() => addEntry('yellow')}></button>
        <button className='diamond-button-3 green'  onTouchStart={() => addEntry('green')}></button>
        <button className='diamond-button-4 red'    onTouchStart={() => addEntry('red')}></button>
      </div>
    </div>
  );
}

export default Diamond;
