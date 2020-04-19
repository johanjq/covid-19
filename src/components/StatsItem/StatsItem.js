import React from "react";

import "./StatsItem.css";

export const StatsItem = ({
  stats: {
    confirmed: { value: totalConfirmed },
    recovered: { value: totalRecovered },
    deaths: { value: totalDeaths },
  },
}) => {
  return (
    <>
      <div className="row text-center StatsItem__Wrapper">
        <div className="col-12">
          <div className="card-deck">
            <div className="card" style={{ backgroundColor: "#D0D3D4" }}>
              <div className="card-body">
                <h4 className="card-title">Confirmados:</h4>
                <span className="text-warning card-text">
                  {totalConfirmed.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: "#D0D3D4" }}>
              <div className="card-body">
                <h4 className="card-title">Recuperados:</h4>
                <span className="text-success card-text">
                  {totalRecovered.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="card" style={{ backgroundColor: "#D0D3D4" }}>
              <div className="card-body">
                <h4 className="card-title">Muertes:</h4>
                <span className="text-danger card-text">
                  {totalDeaths.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
