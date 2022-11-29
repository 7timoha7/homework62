import React from 'react';
import {FightersUser} from "../../types";
import Fighter from "./Fighter";
import "./AddPlayer.css"


interface Props {
  fighter: FightersUser[];
  onClick: (user:FightersUser)=>void;
}

const AddPlayer:React.FC<Props> = ({fighter, onClick}) => {
  return (
    <div className="AddPlayerBox">
      {fighter.map(item=>{
        return <Fighter fighter={item} key={item.id} onClick={()=>onClick(item)}/>
      })}
    </div>
  );
};

export default AddPlayer;