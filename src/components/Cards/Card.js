import React from "react";
import { Link } from "react-router-dom";
import {} from "./CardModules.scss";

export const Card = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <Link
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 mb-4 col-md-6 col-12 position-relative text-decoration-none"
        >
          <div className="cards d-flex flex-column justify-content-center">
            <img src={image} alt=" " className="img img-fluid" />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-4  fw-bold mb-4 ">{name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5 ">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div className={`badge bg-danger position-absolute`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`badge bg-success position-absolute`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`badge bg-secondary position-absolute`}>
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found Amk :(";
  }

  return <>{display}</>;
};
