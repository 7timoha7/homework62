import React from 'react';
import "./Fight.css";
import {NavLink, Outlet} from "react-router-dom";
import sound from '../../sound/Fatality.mp3';

const Fight = () => {
  const music = () => new Audio(sound).play();
  return (
    <div className="FightBox">
      <div onClick={music}>
        <NavLink className="winner" to={"Winner"}>FIGHT?</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Fight;