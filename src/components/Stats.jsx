import React from "react";
import { useState, useEffect } from "react";

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/population")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data &&
        data.map((population) => {
          return (
            <>
              <div className="card m-4 p-1 bg-success text-white">
                <p className="card-text">id: {population.id}</p>
                <h5 className="card-title">country: {population.country}</h5>
                <h5 className="card-title"> people: {population.people}</h5>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default Customer;
