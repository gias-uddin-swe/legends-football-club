import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData/fakeData.json";
import Players from "../Players/Players";
import "./Club.css";
import TotalBudget from "./../TotalBudget/TotalBudget";

const Club = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(fakeData);
  });
  const [count, setCount] = useState([]);

  const addClickHandler = (props) => {
    const newCount = [...count, props];
    setCount(newCount);
  };
  return (
    <div className="players">
      <div className="players-info-div">
        {data.map((player) => (
          <Players
            addClickHandler={addClickHandler}
            player={player}
            key={player.id}
          ></Players>
        ))}
      </div>
      <div className="selected-players">
        <TotalBudget data={count}></TotalBudget>
      </div>
    </div>
  );
};

export default Club;
