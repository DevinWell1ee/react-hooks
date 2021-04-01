// ! useReducer
import React, { useReducer } from 'react';

export default function CounterV2() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + action.payload };
      case 'decrement':
        return { count: state.count - Number(action.payload) };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return [
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  ]
}
