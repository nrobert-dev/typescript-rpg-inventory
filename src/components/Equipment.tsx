import React, {useContext} from 'react';
import {RPGContext} from "../App";


interface MyProps {
}
const styleCont : React.CSSProperties= {
    margin : '80px auto',
    background : 'black',
    border : '1px solid yellow',
    borderRadius : '5px',
    height : '150px',
    width : '150px'
};

const imageStyle : React.CSSProperties = {
    margin : '0px auto',
}
const Equipment : React.FC<MyProps>= () => {
    const rpgData = useContext(RPGContext);

    const equippedItem = rpgData!.equippedItem![0];


    return(
        <div style={styleCont}>
            <img height="150px" width="150px" style={imageStyle} src={equippedItem!.image}/>
            <strong style={{color: '#b8e2e3'}}>STATS : {equippedItem!.effect}</strong>
        </div>
    )
};

export default Equipment;