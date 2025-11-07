import { CreateTodos } from './components';

export const Header = ({
	search,
	handleSearch,
	value,
	setValue,
	createTodos,
	isCreate,
	onSortTitleTodos,
}) => (
	<div>
		<input
			id="search"
			type="text"
			spellCheck="false"
			placeholder="Поиск задач"
			value={search || ''}
			onChange={handleSearch}
		/>
		<div>
			<button onClick={() => onSortTitleTodos()}>Сорт</button>
		</div>
		<CreateTodos
			value={value}
			setValue={setValue}
			createTodos={createTodos}
			isCreate={isCreate}
		/>
	</div>
);
