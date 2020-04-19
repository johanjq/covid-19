import React from "react";

import { RequestData } from "../../requestData";

export const CountryDetails = ({ country }) => {
  const countryData = RequestData(
    `https://covid19.mathdro.id/api/countries/${country}`
  );

  if (!countryData) return "Loading...";

  const {
    confirmed: { value: totalConfirmed },
    recovered: { value: totalRecovered },
    deaths: { value: totalDeaths },
  } = countryData;

  const countryImage = `https://www.countryflags.io/${country}/flat/64.png`;
  return (
    <div className="card card-body mb-3" style={{ backgroundColor: "#D0D3D4" }}>
      <div>
        <img src={countryImage} alt="countryFlag"></img>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h4>Confirmados</h4>
          <p className="text-warning">{totalConfirmed.toLocaleString()}</p>
        </div>
        <div className="col-md-4">
          <h4>Recuperados</h4>
          <p className="text-success">{totalRecovered.toLocaleString()}</p>
        </div>
        <div className="col-md-4">
          <h4>Muertes</h4>
          <p className="text-danger">{totalDeaths.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
