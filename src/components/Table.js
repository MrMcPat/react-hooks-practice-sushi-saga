import React from "react";
import WalletForm from "./WalletForm";


function Table({ plates = [], wallet, onAddMoney }) {
  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${wallet} remaining!
      </h1>
 
      <div className="table">
      <WalletForm onAddMoney={onAddMoney}/>
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
