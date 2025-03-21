import React from 'react'

const App = () => {


  const reducer = ({ count }, { type }) => {
    if (type === 'increase') return { count: count + 1 }
    if (type === 'decrease') return { count: count - 1 }

  }

  const [{ count }, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <>
      <div><h1>Count: {count}</h1></div>
      <div>
        <button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
        <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
      </div>
    </>
  )
}

export default App
