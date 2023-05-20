import food from "../utils/Images/food.jpg";
import "../components/menu.css";
import { useState } from "react";
const Card = ({ item }) => {
  const [counter, setCounter] = useState(0);
  const [total, setTotal] = useState(0);
 
  const handlePlus = () => {
    setCounter(counter + 1);
    setTotal(total + item.price);
    
  };
  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setTotal(total - item.price);
      
    }
  };
  console.log(total)
  return (
    <>
      <div className="card-container">
        <div className="card-img">
          <img src={item?.img} />
        </div>
        <div className="card-name-add-remove">
          <div className="card-inner">
            <h2>{item?.name}</h2>
            <div className="card-add-remove">
              <span className="minus" onClick={handleMinus}>
                -
              </span>
              <input type="text" value={counter} className="card-input" />
              <span className="plus" onClick={handlePlus}>
                +
              </span>
            </div>
          </div>
        </div>
        <div className="card-total">
          <h2>&#8377;{item?.price}</h2>
        </div>
      </div>
    </>
  );
};
export default Card;
