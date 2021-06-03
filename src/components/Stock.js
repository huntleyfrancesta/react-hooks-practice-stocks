import React from "react";

function Stock({stock, handleClick}) {
  const {id, ticker, name, type, price} = stock

  const onClick= ()=>{handleClick(id)}
  return (
    <div>
      <div onClick={onClick} className="card">
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{ticker} : {price}</p>
        </div>
      </div>
    </div>
  )}