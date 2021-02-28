import React from "react";
import "./TotalBudget.css";
const TotalBudget = (props) => {
  const players = props.data;
  const total = players.reduce((total, player) => total + player.salary, 0);

  return (
    <div className="budget-cart">
      <h3>
        Selected players: <strong>{players.length}</strong>
      </h3>
      <br />
      {players.map((player) => (
        <li className='name'>
          <mark>
            <strong className="result">
              {player.name} ${player.salary}
            </strong>
          </mark>
        </li>
      ))}
      <br />
      <h4>
        Total Budget: <strong className='result2'>${total}</strong>
      </h4>
    </div>
  );
};

export default TotalBudget;
