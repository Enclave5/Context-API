import { useState } from 'react';
import { useGetTodos, useCreateTodos, useDeleteTodos, useEditTodos, useDebounce } from './hooks';
import { AppLayout } from './AppLayout';

export function App() {
	const [value, setValue] = useState('');
	const [editValue, setEditValue] = useState('');
	const [refreshTodosFlug, setRefreshTodosFlug] = useState(false);
	const [isOpening, setIsOpening] = useState(false);
	const [isSorted, setIsSorted] = useState(false);
	const [searchTodo, setSearchTodo] = useState([]);
	const [search, setSearch] = useState('');

	const refreshTodos = () => setRefreshTodosFlug(!refreshTodosFlug);

	const { todos, isLoading, setTodos } = useGetTodos(refreshTodosFlug);
	const { createTodos, isCreate } = useCreateTodos(refreshTodos);
	const { deleteTodos } = useDeleteTodos(refreshTodos);
	const { editTodos } = useEditTodos(refreshTodos);

	const sortingTodos = () => {
		setIsSorted(!isSorted);
	};

	useDebounce(
		() => {
			setSearchTodo(
				todos.filter((todo) => todo.todoTitle.toLowerCase().includes(search.toLowerCase())),
			);
		},
		[todos, search],
		800,
	);
	const handleSearch = (e) => setSearch(e.target.value);

	const onSortTitleTodos = () => {
		const sorted = todos.sort((a, b) => {
			if (a.todoTitle[0].toLowerCase() < b.todoTitle[0].toLowerCase()) {
				return -1;
			}
			if (a.todoTitle[0].toLowerCase() > b.todoTitle[0].toLowerCase()) {
				return 1;
			}
			return 0;
		});
		setSearchTodo(sorted);
		setTodos(sorted);
		sortingTodos();
	};

	return (
		<>
			<AppLayout
				value={value}
				setValue={setValue}
				editValue={editValue}
				setEditValue={setEditValue}
				isOpening={isOpening}
				setIsOpening={setIsOpening}
				todos={todos}
				isLoading={isLoading}
				createTodos={createTodos}
				isCreate={isCreate}
				deleteTodos={deleteTodos}
				editTodos={editTodos}
				onSortTitleTodos={onSortTitleTodos}
				search={search}
				handleSearch={handleSearch}
				searchTodo={searchTodo}
			/>
		</>
	);
}

// return (
// 	<div className={styles.app}>
// 		<div>
// 			<input value={value} onChange={({ target }) => setValue(target.value)} />
// 			<button onClick={() => createTodos(value) || setValue('')} disabled={isCreate}>
// 				Создать
// 			</button>
// 		</div>
// 		{isLoading ? (
// 			<div className={styles.loadingData} />
// 		) : (
// 			<div>
// 				{todos.map(({ id, todoTitle }) => (
// 					<ul key={id}>
// 						<li>
// 							{todoTitle}
// 							<button onClick={() => setIsOpening(!isOpening)}>Изменить</button>
// 							<button onClick={() => deleteTodos(id)}>Удалить</button>
// 						</li>
// 						{isOpening ? (
// 							<li>
// 								<input
// 									value={editValue}
// 									onChange={({ target }) => setEditValue(target.value)}
// 								/>
// 								<button
// 									onClick={() => editTodos(id, editValue) || setEditValue('')}
// 								>
// 									Изменить
// 								</button>
// 							</li>
// 						) : null}
// 					</ul>
// 				))}
// 			</div>
// 		)}
// 	</div>
// );
