import React, {MouseEventHandler} from 'react';
import {FightersUser} from "../../types";
import "./AddPlayer.css"
import sound1 from '../../sound/scorpion.mp3';
import sound2 from '../../sound/zero.mp3';
import sound3 from '../../sound/raiden.mp3';
import sound4 from '../../sound/kitana.mp3';
import sound5 from '../../sound/mileena.mp3';
import sound6 from '../../sound/sonya.mp3';




interface Props {
  fighter: FightersUser;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Fighter: React.FC<Props> = ({fighter, onClick}) => {
  const music = (number: string) => {
    if (number === '1') {
      new Audio(sound1).play();
    } else if (number === '2') {
      new Audio(sound2).play();
    } else if (number === '3') {
      new Audio(sound3).play();
    } else if (number === '4') {
      new Audio(sound4).play();
    } else if (number === '5') {
      new Audio(sound5).play();
    } else if (number === '6') {
      new Audio(sound6).play();
    }
  }
  return (
    <div onClick={() => music(fighter.id)}>
      <div className="item" onClick={onClick}>
        <p>{fighter.fighter}</p>
        <img className="imgFighter" src={fighter.image} alt={fighter.fighter}/>
      </div>
    </div>

  );
};

export default Fighter;