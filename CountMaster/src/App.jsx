import React from 'react'
import './App.css'

const App = () => {

	const reducer = ({ count }, { type }) => ({
		increase: { count: count + 1 },
		decrease: { count: count - 1 },
		reset: { count: 0 }
	}[type] || { count });

	const [{ count }, dispatch] = React.useReducer(reducer, { count: 0 })

	return (
		<>
			<h1>Count: {count}</h1>
			<button onClick={() => dispatch({ type: 'increase' })}>Increase</button>
			<button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
			<button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
		</>
	)
}
export default App