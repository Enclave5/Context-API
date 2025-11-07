export const EditTodosForm = ({ editValue, setEditValue, editTodos, id }) => (
	<li>
		<input value={editValue} onChange={({ target }) => setEditValue(target.value)} />
		<button onClick={() => editTodos(id, editValue) || setEditValue('')}>Изменить</button>
	</li>
);
