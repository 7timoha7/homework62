import React, {useEffect} from 'react';
import {FightersUser} from "../../types";
import {NavLink} from "react-router-dom";
import "./Winner.css"
import Fighter from "../AddPlayer/Fighter";
import sound from '../../sound/Fatality.mp3';


interface Props {
  fighter: FightersUser;
  fighterComputer: FightersUser;
}

const Winner: React.FC<Props> = ({fighter, fighterComputer}) => {
  const getRandom = () => {
    return Math.floor(Math.random() * (2 - 1 + 1)) + 1
  }

  const getWinner = (getRandom: number) => {
    if (!fighter.id || !fighterComputer.id) {
      return <div className="alert">
        <h3>You have not chosen a fighter</h3>
      </div>
    } else if (getRandom === 1) {
      return <div>
        <p className="winner-name">WINNER:</p>
        <Fighter fighter={fighter}/>
      </div>
    } else {
      return <div>
        <p className="winner-name">WINNER:</p>
        <Fighter fighter={fighterComputer}/>
      </div>
    }
  }
  const music = () => new Audio(sound).play();

  useEffect(() => {
    if (fighter.id && fighterComputer.id) {
      music()
    }
  }, [fighter.id, fighterComputer.id])

  return (
    <div className="winnerPlayer">
      <div className="winner-box">

        {getWinner(getRandom())}
        <NavLink className="back" to={"/"}>Back</NavLink>
      </div>
    </div>
  );
};

export default Winner;