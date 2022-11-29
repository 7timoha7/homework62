import React from 'react';
import "./Fight.css";
import {NavLink, Outlet} from "react-router-dom";

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