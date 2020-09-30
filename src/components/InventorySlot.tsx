import React, {useState, useContext, CSSProperties} from 'react';
import {Item} from "./dataStructures";
import {RPGContext} from "../App";


interface MyProps {
    createOrder : number,
    slottedItem : Item,
    moveItemFunc : (arg0: number) => void
}

const styleX :React.CSSProperties = {
    background : "#1c1c1c",
    height : "80px",
    width : "80px",
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    borderRadius : "10px",
    border : "1px solid #ffd85b",
};

const tooltipStyleContainer : React.CSSProperties = {
    position : "relative",
};

const tooltip : React.CSSProperties = {
    position : 'absolute',
    left : '10px',
    background : 'black',
    borderRadius : '5px',
    border : '1px solid yellow',
    width : '150px',
    height : '180px',
    padding : '15px',
    color : '#e3b842'
}

const borderImages : React.CSSProperties = {
    border : "2px solid yellow"
};


const InventorySlot : React.FC<MyProps> = ({slottedItem,createOrder,moveItemFunc, ...props}) => {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const hasSlottedItem = () => slottedItem.image !== '';

    const rpgContext = useContext(RPGContext);

    const itemIndex : number = rpgContext.itemIndex ? rpgContext.itemIndex[0] : -1;
    const setItemIndex = rpgContext.itemIndex ? rpgContext.itemIndex[1] : () => null;

    const showTooltip : Function = () : void => {
        if(hasSlottedItem()){
            setIsHovering(true);
        }
    };

    const hideTooltip : Function = () : void => {
        setIsHovering(false);
    }

    const onClickFunc = () => {
        if(createOrder === itemIndex){
            setItemIndex(-1);
        }
        else if(!hasSlottedItem() && itemIndex!== -1){
            moveItemFunc(createOrder);
        }
        else{
            setItemIndex(createOrder)
        }
    };

    const onRightClick  = (event : React.MouseEvent) : void => {
        const equipFunc : Function = rpgContext.equippedItem![1];
        equipFunc(slottedItem);
        event.preventDefault();
    };

    return(
        <div onMouseEnter={() => showTooltip()} onMouseLeave={() => hideTooltip()} style={styleX} onClick={() => onClickFunc()} onContextMenu={(event) => onRightClick(event)}>
            {hasSlottedItem() && <img style={createOrder === itemIndex ? borderImages : {}} height="60px" width="60px" src={slottedItem.image}/>}
            {isHovering && <div style={tooltipStyleContainer}>
                <div style={tooltip}>
                    <strong>{slottedItem.title}</strong>
                    <p style={{color : 'white', display: 'block'}}>{slottedItem.effect}</p>
                    <i style={{color : '#b5b5b5', display: 'block', fontSize:'12px'}}>{slottedItem.description}</i>
                    <p>{slottedItem.price} &#8362;</p>
                </div>
            </div>}
        </div>
    )
};

export default InventorySlot;