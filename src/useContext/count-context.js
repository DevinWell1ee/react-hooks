// ! useConext
import React, { useState, useContext } from 'react'

const CountContext = React.createContext();

export const useCount = () => {
  const context = useContext(CountContext);

  if (context === undefined) {
    throw new Error('必须在CountProvider内使用useCount');
  }

  return context;
}

export const CountProvider = ({ children }) => {
  const stateHook = useState(1); // 还可以分离传递state, dispatch; 还可以用useReducer

  return (
    <CountContext.Provider value={stateHook}>
      {children}
    </CountContext.Provider>
  )
}


