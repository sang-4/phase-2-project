import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Coin from './Coin';
import { Container } from 'react-bootstrap';
import {blue} from "@material-ui/core/colors";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')
  useEffect(()=>{
    fetch('https://api.coincap.io/v2/assets')
    .then(res=>{
      setCoins(res.data)
      console.log(res.data)
    }).catch(error=> console.error(error))
  }, [])

  const handleChange = e =>{
    setSearch(e.target.value);
  }
 
  const filteredCoins= coins.filter(coin =>
    coins.name().inludes(search)
    )
  return (
    <div className="App">
      <div className="coin-search">

    </div>

    {filteredCoins.map(coin=>{
    return(
      <Coin
      key={coin.id}
      name={coin.name}
      image={coin.image}
      symbol={coin.symbol}
      pricechange={coin.price_change_perentage_24h}
      />
    );
    })}
    </div>
  );
}

export default App;
