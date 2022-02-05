import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [number, setNumber] = useState(0)
  const [wallet, setWallet] = useState(500)

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      setSushis([data[number], data[number+1], data[number+2], data[number+3]])
    })
  }, [number])

  function handleFourSushis(){
    setNumber(number+4)
  }

  function handlePayment(price) {
    wallet < price ? alert("Not enough money!") : setWallet(wallet-price)
  }

  function handleAddMoney (money) {
    setWallet(wallet + money)
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onFourSushis={handleFourSushis} onPayment={handlePayment}/>
      <Table wallet={wallet} onAddMoney={handleAddMoney}/>
    </div>
  );
}

export default App;
