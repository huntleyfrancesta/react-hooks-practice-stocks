import React from "react";
import Stock from "./Stock";

function PortfolioContainer({stockPortfolio, onSellStock}) {
  const stockList = stockPortfolio.map(stock =>{
      return <Stock key={stock.id} stock={stock} onStockClick={onSellStock}/>
  })


  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList }
    </div>
  );
}