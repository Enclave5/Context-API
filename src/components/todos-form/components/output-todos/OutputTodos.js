export const OutputTodos = ({ todoTitle, id, setIsOpening, isOpening, deleteTodos }) => (
	<li>
		{todoTitle}
		<button onClick={() => setIsOpening(!isOpening)}>Изменить</button>
		<button onClick={() => deleteTodos(id)}>Удалить</button>
	</li>
);
