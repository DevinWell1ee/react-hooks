import './App.css';
import { useCount, CountProvider } from './useContext/count-context.js'

import { useEffect, useState, useCallback, useRef } from 'react'

import Counter from './Counter'
import InputWithFocusButton from './InputWithFocusButton'
import InputEl from './InputEl'
import CounterV2 from './CounterV2'

function CountDisplay() {
  const [count, setCount] = useCount();
  return (
    <div>use context: {count}; <button onClick={ () => setCount(3) }>change</button></div>
  )
}


function App() {
  // ! useState
  const [modalVisible, setSaveModalVisible] = useState('false');

  const [index, setIndex] = useState(1)
  const r = useRef(null)

  const f = useRef()


  // ! useEffect
  // 可以把 useEffect 看做 componentDidMount ， componentDidUpdate 和 componentWillUnmount 这三个函数的组合
  useEffect(() => {
    console.log('hello')

    r.current = index
  })

  const handleClick = () => {
    setTimeout(() => {
      alert(r.current)
    }, 3000)
  }

  const handleChange = useCallback((val) => {
    console.log('change:' + val)

    f.current.focus()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        hello hooks
      </header>

      <span className="item_title">当前的index是: {index}, {r.current}</span>
      <button style={{marginLeft: 0}} onClick={() => setIndex(prev => prev + 1)}>
        点击让index加1
      </button>
      <button onClick={handleClick}>
        点击弹出index
      </button>

      <br />

      <h2>modal status is : {modalVisible}</h2>

      <button onClick={() => setSaveModalVisible('true')}>true</button>
      <button onClick={() => setSaveModalVisible('false')}>false</button>

      <br />
      <br />

      <Counter value={1} onChange={handleChange}></Counter>
      <br />
      <br />

      <InputWithFocusButton />
      <br />
      <br />

      <InputEl ref={f} />
      <br />
      <br />

      <CounterV2 />
      <br />
      <br />

      <CountProvider>
        <CountDisplay />
      </CountProvider>
    </div>
  );
}

export default App;
