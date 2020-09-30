import React, {useContext} from 'react';
import {RPGContext} from "../App";

const divStyle : React.CSSProperties = {
    background : '#1a1614',
    height : '180px',
    width : '90%',
    marginLeft : '20px',
    border : '3px solid gray',
    padding : '10px',
    color : '#b8e2e3',
    boxSizing : 'border-box',
    fontFamily : 'Courier New',
    fontWeight : 'bolder'
}
const ActionLog : React.FC = () => {
    const rpgData = useContext(RPGContext);
    return(
        <div style={divStyle}>
            {rpgData.actionLog!.map(e => {
               return (<p>{e}</p>);
            })}
        </div>
    )
};

export default ActionLog;