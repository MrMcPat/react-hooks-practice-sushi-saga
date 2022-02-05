import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


function SushiContainer({ sushis, onFourSushis, onPayment }) {
  const sushiCards = sushis.map((sushi) => {
    return (
      <Sushi
        key={sushi.id}
        id={sushi.id}
        name={sushi.name}
        image={sushi.img_url}
        price={sushi.price}
        onPayment={onPayment}
      />
    );
  });
  return (
    <div className="belt">
      {sushiCards}
      <MoreButton onFourSushis={onFourSushis} />
    </div>

  );
}

export default SushiContainer;
