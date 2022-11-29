import React from 'react';
import {FightersUser} from "../../types";
import Fighter from "../Fighter/Fighter";
import "./UserVsComputer.css";

interface Props {
  fighter: FightersUser;
  fighterComp: FightersUser;
}

const UserVsComputer: React.FC<Props> = ({fighter, fighterComp}) => {
  const noPlayer = (fighter: FightersUser) => {
    if (fighter.id) {
      return <Fighter fighter={fighter}/>
    } else {
      return (
        <div className="item">
          <p style={{fontSize: "70px"}}>?</p>
        </div>
      )
    }
  }
  const getBox = () => {
    if (fighter.id || fighterComp.id) {
      return (
        <div className="UserVsComputer">
          <div className="vs-box">
            <h2>User</h2>
            {noPlayer(fighter)}
          </div>
          <div>
            <h3 className="vs">VS</h3>
          </div>
          <div className="vs-box">
            <h2>Computer</h2>
            {noPlayer(fighterComp)}
          </div>
        </div>
      )
    }
  }
  return (
    <div>
      {getBox()}
    </div>
  );
};

export default UserVsComputer;