import React, { useState } from "react";

import { CountryDetails } from "../CountryDetails";
import "./Dropdown.css";

export const Dropdown = ({ countries: { countries } }) => {
  const [country, setCountry] = useState("VE");

  const handleChangeCountry = ({ target: { value } }) => {
    setCountry(value);
  };

  return (
    <>
      <div className="row text-center Dropdown__Wrapper">
        <div className="col-md-6">
          <h2 className="my-3">Busqueda por país:</h2>
          <select
            value={country}
            name="countryDetails"
            onChange={handleChangeCountry}
          >
            {countries.map(({ name, iso2 }) => (
              <option key={iso2} value={iso2}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <CountryDetails country={country} />
      </div>
    </>
  );
};
