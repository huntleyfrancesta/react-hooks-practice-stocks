import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [filterBy, setFilterBy] = useState('Tech')
  const [sortBy, setSortBy] = useState('Alphabetically')

  useEffect(()=>{
      fetch('http://localhost:3001/stocks')
      .then(res => res.json())
      .then(stockData => {
        setStocks(stockData)
      })

  }, [])

  function addStock(stockObj){
    // console.log(stockObj)
    const inPortfolio = portfolio.find( 
      (stock) => stock.id === stockObj.id)

    if(!inPortfolio){
      setPortfolio([...portfolio, stockObj])
    }       
  }

  function removeStock(stockObj){
     const updatedPortfolio = portfolio.filter(stock =>{
            return stock.id !== stockObj.id
     }) 
     setPortfolio(updatedPortfolio)
  }

  return (
    <div>
      <SearchBar setFilterBy={setFilterBy} sortBy={sortBy} setSortBy={setSortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stockList={stocks}  onBuyStock={addStock} filterBy={filterBy} sortBy={sortBy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stockPortfolio={portfolio} onSellStock = {removeStock}/>
        </div>
      </div>
    </div>

  )}