import React from "react";

import { StatsItem } from "./components/StatsItem";
import { Dropdown } from "./components/Dropdown";
import { RequestData } from "./requestData";
import "./App.css";
import Logo from "./virusLogo.png";

export const App = () => {
  const stats = RequestData("https://covid19.mathdro.id/api");
  const countries = RequestData("https://covid19.mathdro.id/api/countries");

  return (
    <div className="container App_Wrapper">
      <h1 className="display-4 my-3 text-center">
        Estadisticas Corona Virus{" "}
        <img src={Logo} alt="" style={{ width: "100px" }} />
      </h1>
      {stats && <StatsItem stats={stats} />}
      {stats && <img className="App__Image" src={stats.image} alt="" />}
      {countries && <Dropdown countries={countries} />}
      <p className="App__Copyrights">Derechos de autor: Johan Quiroz</p>
    </div>
  );
};
