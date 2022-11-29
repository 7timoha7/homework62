import React from 'react';
import Fighter from "../../components/Fighter/Fighter";
import {FightersUser} from "../../types";

interface Props {
  fighterComp: FightersUser[];
  onClick: (user: FightersUser) => void;
}

const AddRival: React.FC<Props> = ({fighterComp, onClick}) => {
  return (
    <div className="AddPlayerBox">
      {fighterComp.map(item => {
        return <Fighter fighter={item} key={item.id} onClick={() => onClick(item)}/>
      })}
    </div>
  );
};

export default AddRival;