import React, {useState} from 'react';

function WalletForm({onAddMoney}) {
const [money, setMoney] = useState("")

function handleSubmit(e) {
    e.preventDefault();
    onAddMoney(money)
    setMoney("")
}

  return <div className="wallet-form" onSubmit={handleSubmit}>
    <form>
      <input type="number" name="wallet" value={money} onChange={(e) => setMoney(parseInt(e.target.value))}/>
      <button type="submit">Add Money</button>
    </form>
  </div>

}

export default WalletForm;
