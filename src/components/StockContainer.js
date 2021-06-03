import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, onBuyStock, filterBy, sortBy}) {

  const sortedStocks = stockList.sort((stock1, stock2)=>{
      if(sortBy === 'Alphabetically'){
        return stock1.name.localeCompare(stock2.name)
      } else {
        return stock1.price - stock2.price
      } 
  })

  const filteredStocks = sortedStocks.filter(stock =>{
      return stock.type === filterBy
  })
  const listStocks = filteredStocks.map(stock =>{
    return <Stock key={stock.id} stock={stock} onStockClick={onBuyStock}/>

  })
  return (
    <div>
      <h2>Stocks</h2>
      {listStocks}
    </div>
  );
}