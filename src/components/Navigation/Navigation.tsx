import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.css"



const Navigation = () => {


  return (
    <div className="Navigation">
      <NavLink className="link" to="/">Choose a Fighter</NavLink>
      <NavLink className="link" to={"/Fight"}>FIGHT</NavLink>
      <NavLink className="link" to="/AddRival">Choose an opponent</NavLink>
    </div>
  );
};

export default Navigation;