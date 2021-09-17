import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";
import { RootState } from "./app/store";
import { addReservation } from "./features/reservationSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );

  const customers = useSelector((state: RootState) => state.customer.value);
  const [reservation, setReservation] = useState("");

  const handleReservations = () => {
    if (!reservation) return;
    dispatch(addReservation(reservation));

    setReservation("");
  };
  return (
    <div className="app__container container">
      <div className="reservation__header">
        <h3>Reservations</h3>
      </div>
      <div className="reservation__container">
        <div className="reservation-left__container">
          <div className="reservation__cards">
            {reservations.map((name, index) => {
              return <ReservationCard key={index} name={name} index={index} />;
            })}
          </div>
          <div className="reservation__input">
            <p>Enter a reservation name</p>
            <div className="input__container">
              <input
                type="text"
                value={reservation}
                onChange={(e) => setReservation(e.target.value)}
              />
              <button className="button" onClick={() => handleReservations()}>
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="reservation-right__container">
          {customers.map(({ id, name, food }) => {
            return <CustomerCard key={id} id={id} name={name} food={food} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
