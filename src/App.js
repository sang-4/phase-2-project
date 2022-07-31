import React, { useEffect, useState } from 'react';
import './App.css';
import Coin from './Coin';
// import Navbar from './Navbar';
// import Home from './Components/Home'; 
import Button from 'react-bootstrap/Button';



function App() {
  const [coins,setCoins] = useState([])
  const [search,setSearch] = useState('')
  useEffect(() => {
    fetch(' https://salty-depths-82016.herokuapp.com/crypto')
    .then(res=> res.json())
    .then(data =>setCoins(data))
    .catch(error=>console.log(error))
  }, [])
  const handleChange = e =>{
    setSearch(e.target.value)
  }
  const filteredCoins = coins.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()
    )
    )

  return (
    <div className="coin-app">
       <Button variant="success">Home </Button>{' '}
       <Button variant="success">About </Button>{' '}
       <Button variant="success">Contact Us </Button>{' '}
      <div className="coin-search">
        <h1 className="coin-text">CryptIt</h1>
        <form action="">
          <input type="text" className="coin-input" placeholder="Enter your preffered asset name" onChange={handleChange}/>

        </form>

      </div>
    

      {filteredCoins.map(coin=>{
        return(
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
          />
        )
      })}


    </div>
  );
}



export default App;