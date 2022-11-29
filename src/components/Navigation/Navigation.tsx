import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.css"
import sound from '../../sound/ha_ha_ha.mp3';

const Navigation = () => {

  const music = () => new Audio(sound).play();

  return (
    <div className="Navigation">
      <NavLink className="link" to="/">Choose a Fighter</NavLink>
      <NavLink className="link" to={"/Fight"} onClick={music}>FIGHT</NavLink>
      <NavLink className="link" to="/AddRival">Choose an opponent</NavLink>
    </div>
  );
};

export default Navigation;