import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";

interface CustomerCardType {
  id: string;
  name: string;
  food: string[];
}
const CustomerCard = ({ id, name, food }: CustomerCardType) => {
  const [customerFoodInput, setCustomerFoodInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="customer-card__container">
      <div>{name}</div>
      <div className="customer-food__container">
        <div className="customer-food__list">
          <ul className="food-list">
            {food.map((item, index) => {
              return (
                <li key={index} className="food-list-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="customer-food__input">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <button
            onClick={() => {
              if (!customerFoodInput) return;
              dispatch(
                addFood({
                  id,
                  food: customerFoodInput,
                })
              );
              setCustomerFoodInput("");
            }}
            className="button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
