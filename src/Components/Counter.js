import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };
  return (
    <div className="container">
      <div class="card mt-5">
        <div class="card-body bd-example">
          <h2>Count - {count}</h2>
          <button className="btn btn-primary mr-1" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn btn-warning" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-danger" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
