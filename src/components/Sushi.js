import React, {useState} from "react";

function Sushi({name, image, price, onPayment}) {
  const [isEaten, setIsEaten] = useState(false)

  function handleEaten () {
    setIsEaten(true)
    !isEaten ? onPayment(price) : alert("Already Eaten!")
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={image}
            alt={name + "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
