import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {FightersUser} from "../../types";
import Navigation from "../../components/Navigation/Navigation";
import AddPlayer from "../AddPlayer/AddPlayer";
import AddRival from "../AddRival/AddRival";
import UserVSComputer from "../../components/UserVSComputer/UserVSComputer";
import Fight from "../Fight/Fight";
import Winner from "../Winner/Winner";
import "./AppMortalCombat.css";

const AppMortalCombat = () => {
  const fightersUser: FightersUser[] = [{
    fighter: "Scorpion",
    id: "1",
    image: "https://avatars.dzeninfra.ru/get-zen_doc/3533726/pub_60674fbba649f87c911924d5_60682dadb2078603797b07b8/scale_1200"
  },
    {
      fighter: 'Sub zero',
      image: 'https://media.gq.com.mx/photos/5fdfba615d174b43c29bc94c/16:9/w_2992,h_1683,c_limit/sub-zero-cosplay-mujer.jpg',
      id: "2"
    },
    {
      fighter: 'Raiden',
      image: "https://bbts1.azureedge.net/images/p/full/2021/01/38826fa0-c35c-44a8-a95c-2a0d4c4c98c4.jpg",
      id: "3"
    }
  ];

  const fightersComputer: FightersUser[] = [{
    fighter: "Kitana",
    id: "4",
    image: "https://avatars.dzeninfra.ru/get-zen_doc/1911692/pub_5d45a0fca2d6ed00ae7c6c63_5d45aabfec575b00ad9a1cf9/scale_1200"
  },
    {
      fighter: 'Mileena',
      image: 'https://cutewallpaper.org/21/mortal-kombat-mileena-wallpaper/Mortal-Kombat-Mileena-PS4Wallpapers.com.jpg',
      id: "5"
    },
    {
      fighter: 'Sonya Blade',
      image: "https://img.championat.com/c/1350x759/news/big/g/b/aktrisa-iz-mortal-kombat-hochet-vernut-seksualnuyu-sonyu-blejd_165393919971835455.jpg",
      id: "6"
    }
  ];

  const [add, setAdd] = useState<FightersUser>({
    fighter: "",
    id: "",
    image: "",
  });

  const [addComputer, setAddComputer] = useState<FightersUser>({
    fighter: "",
    id: "",
    image: "",
  });

  const AddFighterUser = (user: FightersUser) => {
    setAdd(user);
  }

  const AddFighterComputer = (user: FightersUser) => {
    setAddComputer(user);
  }

  return (
    <div className="AppMortalCombat">
      <Navigation/>
      <UserVSComputer fighter={add} fighterComp={addComputer}/>
      <Routes>
        <Route path={"/"} element={(
          <AddPlayer fighter={fightersUser} onClick={AddFighterUser}/>
        )}/>
        <Route path={"/Fight"} element={(
          <Fight/>
        )}>
          <Route path="Winner" element={(
            <Winner fighter={add} fighterComputer={addComputer}/>
          )}/>
        </Route>
        <Route path={"/AddRival"} element={(
          <AddRival fighterComp={fightersComputer} onClick={AddFighterComputer}/>
        )}/>
        <Route path="*" element={(
          <h1 style={{color: "white"}}>Not found</h1>
        )}/>
      </Routes>
    </div>
  );
};

export default AppMortalCombat;