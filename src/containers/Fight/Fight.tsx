import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import "./Fight.css";

const Fight = () => {

  return (
    <div className="FightBox">
      <div>
        <NavLink className="winner" to={"Winner"}>FIGHT?</NavLink>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Fight;