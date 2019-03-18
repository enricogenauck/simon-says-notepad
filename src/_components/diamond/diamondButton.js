import React from 'react';

function DiamondButton({addEntry, color, position}) {
  return (
    <button className={'diamond-button-'+ position + ' ' + color}
            onClick={() => addEntry(color)}>
    </button>
  );
}

export default DiamondButton;
