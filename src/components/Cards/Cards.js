import React from "react";
import "./Cards.css";
import CountUp from "react-countup";
function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return <h2>Loading....</h2>;
  }
  return (
    <div>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card neon_card p-4 mb-4">
            <div className="card-title">
              <h3>Infected</h3>
            </div>
            <div className="card-body text-center">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
                className="font-weight-bold h4"
              />
              <br />
              <small>As of: {new Date(lastUpdate).toDateString()}</small>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card neon_card p-4 mb-4">
            <div className="card-title">
              <h3>Recovered</h3>
            </div>
            <div className="card-body text-center">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
                className="font-weight-bold h4"
              />
              <br />
              <small>As of: {new Date(lastUpdate).toDateString()}</small>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div className="card neon_card p-4 mb-4">
            <div className="card-title">
              <h3>Deaths</h3>
            </div>
            <div className="card-body text-center">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
                className="font-weight-bold h4"
              />
              <br />
              <small>As of: {new Date(lastUpdate).toDateString()}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
