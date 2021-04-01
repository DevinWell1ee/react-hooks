// ! forwardRef
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

// useRef 它像一个变量, 类似于 this , 它就像一个盒子, 你可以存放任何东西.

// createRef 每次渲染都会返回一个新的引用，而 useRef 每次都会返回相同的引用(persist)

const InputEl = forwardRef((props, ref) => {
  const el = useRef()

  useImperativeHandle(
    ref,
    ()=>({//第一个参数：暴露哪个ref；第二个参数：暴露什么
      value: el.current.value,
      focus: () => el.current.focus()
    })
  );

  return(
    <div>
      refInput:
      <input ref={el} type="text" {...props}/>
    </div>
  )
})


export default InputEl


/* const InputEl = forwardRef((props, ref) => {
  return(
    <div>
      refInput:
      <input ref={ref} type="text" {...props}/> // 直接暴露dom
    </div>
  )
}) */