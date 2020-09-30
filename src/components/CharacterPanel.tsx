import React from 'react';
import "../App.css";
import MiniHeader from "./MiniHeader";
import Inventory from "./Inventory";
import Equipment from "./Equipment";
import ActionLog from "./ActionLog";


// Props and State Examples
interface ComponentProps{
    displayPanel : boolean
}
interface ComponentState{

}

export default class CharacterPanel extends React.Component<ComponentProps,ComponentState>{
    constructor(props : ComponentProps){
        super(props);
    }
    render(){
        return(
         this.props.displayPanel && <div className="characterContainer">
              <div className="sidePanel">
                  <div className="equipmentContainer">
                        <MiniHeader title="EQUIPMENT"/>
                       <Equipment/>
                  </div>
                  <div className="statsContainer">
                      <MiniHeader title="ACTION LOG"/>
                        <ActionLog/>
                  </div>
              </div>
              <div className="sidePanel">
                  <MiniHeader title="INVENTORY"/>
                  <Inventory items={24} columns={4}/>
              </div>
          </div>
        );
    }
}