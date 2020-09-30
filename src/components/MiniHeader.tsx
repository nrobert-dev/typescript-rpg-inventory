import React from 'react';
import "../App.css";

const MiniHeader : React.FC<{title : string}> = ({title}) => {
  return(
      <div className="header">
          {title}
      </div>
  )
};

export default MiniHeader