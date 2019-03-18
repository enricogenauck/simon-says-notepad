import React from 'react';

import './entry.css';

const Entry = ({color, position, removeEntry}) => {
  return (
    <div
      className={color + ' entry'}
      onClick={() => removeEntry(position)}>
    </div>
  );
}

export default Entry;
