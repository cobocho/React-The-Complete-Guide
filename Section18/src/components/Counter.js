import classes from "./Counter.module.css";
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const [counter, showCounter] = useSelector((state) => [
    state.counter.counter,
    state.counter.showCounter,
  ]);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  const increamentHandler = () => {
    dispatch(counterActions.increament());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decreament());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increamentHandler}>increase</button>
        <button onClick={increaseHandler}>increase by 5</button>
        <button onClick={decreaseHandler}>decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
