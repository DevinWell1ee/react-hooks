// ! useRef
import React, { useState, useRef } from 'react';

export default function InputWithFocusButton() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count) // 存放任何变量

  console.log(countRef.current)

  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}