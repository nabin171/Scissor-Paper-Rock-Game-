import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Counter: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 m-2 rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 m-2 rounded"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Increment by 5
      </button>
    </div>
  );
};

export default Counter;
