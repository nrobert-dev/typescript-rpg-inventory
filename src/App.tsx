import React, {useState} from 'react';
import './App.css';
import CharacterPanel from "./components/CharacterPanel";
import {Item, ITEM_TYPE, noEquipSlot, RPG} from "./components/dataStructures";
import {inventoryItems} from "./components/mockupData";
import test from "./image/main.png";


export const RPGContext = React.createContext<Partial<RPG>>({});


const App : React.FC = () => {
  const [inventory, setInventoryItem] = useState<Item[]>(inventoryItems);
  const [selectedItem, setSelectedItem] = useState<number>(-1);
  const [equippedItem, setEquippedItem] = useState<Partial<Item>>(noEquipSlot);
  const [actionLog, setActionLog] = useState<string[]>([]);

  const setSelectedItemFunc = (index : number) : void => {
      setSelectedItem(index);
  };

  const setEquippedItemFunc = (item : Item) : void => {
      switch(item.type){
          case ITEM_TYPE.Spell:
              const newActionLog : string[] = actionLog.slice(0);
              newActionLog.push(item.effect);
              setActionLog(newActionLog);

              const newInventory = inventory.filter(e => e.title !== item.title);
              setInventoryItem(newInventory);
              break;
          case ITEM_TYPE.Equipable:
                  const previouslyEquipped = equippedItem;
                  setEquippedItem(item);
                  const newInv = inventory.filter(e => e.title !== item.title);
                  newInv.push(previouslyEquipped as Item);
                  setInventoryItem(newInv);
              break;
          default:
              break;
      }
  };

  return(
      <RPGContext.Provider value={
          {
              inventory : [inventory, setInventoryItem],
              itemIndex : [selectedItem, setSelectedItemFunc],
              equippedItem : [equippedItem, setEquippedItemFunc],
              actionLog : actionLog
          }}>
          <div style={{width:"100%"}}>
                <img style={{margin:'50px 550px -50px 550px', justifyContent:"center"}} src={test}/>
                <CharacterPanel displayPanel={true}/>
          </div>
      </RPGContext.Provider>
  )
};

export default App;
