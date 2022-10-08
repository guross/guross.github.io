import React, { useState, useEffect } from "react";
import { Card } from "../components/Cards/Card";
import InputGroup from "../components/Filter/Category/InputGroup";

const Location = () => {
  let [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResult] = useState([]);
  let { name ,type, dimension} = info;
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResult(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center mb-4">
          Episode :{"  "}
          <span className="text-primary">
            {name === "" ? "Unknown" : name}{" "}
          </span>
        </h1>
        <h5 className="text-center">
          Dimension :{dimension === "" ? "Unknown" : dimension}
        </h5>
        <h6 className="text-center">
          Type :{type === "" ? "Unknown" : type}
        </h6>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Pick Location</h4>
          <InputGroup total={126} name={"Location"} setID={setId} />
        </div>
        <div className="col-lg-8  col-12">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
