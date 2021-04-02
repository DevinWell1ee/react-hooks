import React, { useCallback, useState, useMemo } from 'react'

import Button from './Button'

// ! usecallback 缓存的是函数, 优化子组件的，防止子组件的重复渲染, 配合react.memo使用
function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // ! useMemo, 将一些复杂复杂的计算缓存
  /* const [count, setCount] = useState(0);

  const userInfo = useMemo(() => {
    return {
      name: 'ccc',
      age: count
    };
  }, [count]); */

  // ! 对于函数式组件来说，每次useState都会造成整个函数的重新渲染，逻辑从上到下重新执行一遍
  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };

  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
    </div>
  );
}

export default App