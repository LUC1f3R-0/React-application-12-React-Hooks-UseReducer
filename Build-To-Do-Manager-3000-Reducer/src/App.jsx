import React from 'react'

const App = () => {

	const myList = [{ id: 1, whatTodo: "scrolling", checked: true, deleted: false }]

	function reducer(state, { type, payload }) {
		if (type === 'add') {
			const newId = crypto.randomUUID();
			const list = { id: newId, whatTodo: payload, checked: false, deleted: false };
			return [...state, list];
		} else if (type === 'toggle') {
			return state.map(list => list.id === payload ? { ...list, checked: !list.checked } : list);
		} else if (type === 'delete') {
			return state.map(list => list.id === payload ? { ...list, deleted: true } : list)
		}
	}


	const [state, dispatch] = React.useReducer(reducer, myList)

	const myTodoList = state.filter(list => list.deleted === false).map(list => <li key={list.id} id={list.id}><input type='checkbox' defaultChecked={list.checked} onClick={() => dispatch({ type: 'toggle', payload: list.id })} id={list.id} />{list.whatTodo}<button id={list.id} onClick={() => dispatch({ type: 'delete', payload: list.id })}>Delete</button></li>)


	let inputValue = "";

	return (
		<>

			<label>
				Text input: <input name="myInput" onChange={(e) => inputValue = e.target.value} />
				<button onClick={() => dispatch({ type: 'add', payload: inputValue })}>Add</button>
			</label>

			<div>
				<ul>
					{myTodoList}
				</ul>
			</div>
		</>
	)
}

export default App


// import React from 'react';

// const App = () => {
//   const myList = [{ id: 1, whatTodo: "scrolling", checked: true, deleted: false }];
//   const [state, dispatch] = React.useReducer(reducer, myList);
//   const [inputValue, setInputValue] = React.useState("");

//   const handleAdd = React.useCallback(() => {
//     if (!inputValue.trim()) return; // Prevent adding empty tasks
//     dispatch({ type: 'add', payload: inputValue });
//     setInputValue("");
//   }, [inputValue]);

//   const handleToggle = React.useCallback((id) => {
//     dispatch({ type: 'toggle', payload: id });
//   }, []);

//   const handleDelete = React.useCallback((id) => {
//     dispatch({ type: 'delete', payload: id });
//   }, []);

//   const myTodoList = React.useMemo(() => (
//     state.filter(list => !list.deleted).map(list => (
//       <li key={list.id}>
//         <input 
//           type='checkbox' 
//           checked={list.checked} 
//           onChange={() => handleToggle(list.id)}
//         />
//         {list.whatTodo}
//         <button onClick={() => handleDelete(list.id)}>Delete</button>
//       </li>
//     ))
//   ), [state, handleToggle, handleDelete]);

//   return (
//     <>
//       <label>
//         Text input: 
//         <input 
//           name="myInput" 
//           value={inputValue} 
//           onChange={(e) => setInputValue(e.target.value)} 
//         />
//         <button onClick={handleAdd}>Add</button>
//       </label>

//       <div>
//         <ul>
//           {myTodoList}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default App;
