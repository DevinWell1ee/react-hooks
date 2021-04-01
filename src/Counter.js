import React, { useState, useEffect } from 'react';


// ! 受控组件
export default function Counter({ value, onChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    value && setCount(value);
  }, [value]);

  return [
    <div>{count}</div>,

    <button onClick={() => onChange(count + 1)}>
      点击+1
    </button>
  ]
}
