import styles from './app.module.css';
import { Header } from './components';
import { TodosForm } from './components';

export const AppLayout = ({
	value,
	setValue,
	editValue,
	setEditValue,
	isOpening,
	setIsOpening,
	todos,
	isLoading,
	createTodos,
	isCreate,
	deleteTodos,
	onSortTitleTodos,
	search,
	handleSearch,
	searchTodo,
}) => (
	<div className={styles.app}>
		<Header
			search={search}
			handleSearch={handleSearch}
			value={value}
			setValue={setValue}
			createTodos={createTodos}
			isCreate={isCreate}
			onSortTitleTodos={onSortTitleTodos}
		/>
		{isLoading ? (
			<div className={styles.loadingData} />
		) : (
			<TodosForm
				todos={todos}
				setIsOpening={setIsOpening}
				isOpening={isOpening}
				deleteTodos={deleteTodos}
				editValue={editValue}
				setEditValue={setEditValue}
				searchTodo={searchTodo}
			/>
		)}
	</div>
);
