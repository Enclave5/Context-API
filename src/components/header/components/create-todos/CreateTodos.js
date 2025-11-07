export const CreateTodos = ({ value, setValue, createTodos, isCreate }) => (
	<div>
		<input value={value} onChange={({ target }) => setValue(target.value)} />
		<button onClick={() => createTodos(value) || setValue('')} disabled={isCreate}>
			Создать
		</button>
	</div>
);
