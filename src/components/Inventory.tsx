import React, {useState, useEffect, useContext} from 'react';
import InventorySlot from "./InventorySlot";
import {Item} from "./dataStructures";
import {RPGContext} from "../App";

type Props = {
    items : number;
    columns : number;
}

const emptySlot : Item = {
    title : '',
    type : 0,
    description : '',
    effect : '',
    image :'',
    tooltip:'',
    price:0,
    clickAction : () => null
};

const Inventory : React.FunctionComponent<Props> = ({items, columns}) => {
    const [itemsInInventory, setItemsInInventory] = useState<{[key:string] : Item}>({});
    const rpgData = useContext(RPGContext);

    const moveItem = (newIndex : number) : void => {
        const selectedItemIndex = rpgData.itemIndex ? rpgData.itemIndex[0] : -1;
        const setIndex = rpgData.itemIndex ? rpgData.itemIndex[1] : () => null;
        if(selectedItemIndex!==-1){
            let items : {[key:string] : Item} = itemsInInventory;
            items[newIndex] = items[selectedItemIndex];
            delete items[selectedItemIndex];
            setIndex(-1);
        }
    };
    //JS way  :/
    const inventoryItems = rpgData.inventory![0];

    useEffect(() => {
        let obj : {[key:string] : Item} = {};
        for(let i : number = 0;i<inventoryItems.length;i++){
            obj = {...obj, [i]: inventoryItems[i] }
        }
        setItemsInInventory(obj);
    },[inventoryItems]);

    const constructGrid : Function = () : JSX.Element[] => {
        const itemArray : JSX.Element[] = [];

        for(let i : number = 0; i<items; i++){
            let slottedItem : Item  = itemsInInventory.hasOwnProperty(i) ? itemsInInventory[i] : emptySlot;

            const item = <InventorySlot moveItemFunc={moveItem} slottedItem={slottedItem}  createOrder={i}/>;
            itemArray.push(item);
        }
        return itemArray;
    };

    return(
        <div style={{display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gridGap: '10px', gridAutoRows: 'minMax(20px, auto)'}}>
            {constructGrid()}
        </div>
    )
};

export default Inventory;