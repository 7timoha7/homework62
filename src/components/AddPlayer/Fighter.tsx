import React, {MouseEventHandler} from 'react';
import {FightersUser} from "../../types";
import "./AddPlayer.css"





interface Props {
  fighter: FightersUser;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Fighter: React.FC<Props> = ({fighter, onClick}) => {

  return (
    <div>
      <div className="item" onClick={onClick}>
        <p>{fighter.fighter}</p>
        <img className="imgFighter" src={fighter.image} alt={fighter.fighter}/>
      </div>
    </div>

  );
};

export default Fighter;