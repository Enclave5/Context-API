import { OutputTodos } from './components';
import { EditTodosForm } from './components';

export const TodosForm = ({
	setIsOpening,
	isOpening,
	deleteTodos,
	editValue,
	setEditValue,
	editTodos,
	searchTodo,
}) => (
	<div>
		{searchTodo.map(({ id, todoTitle }) => (
			<ul key={id}>
				<OutputTodos
					todoTitle={todoTitle}
					id={id}
					setIsOpening={setIsOpening}
					isOpening={isOpening}
					deleteTodos={deleteTodos}
				/>
				{isOpening ? (
					<EditTodosForm
						editValue={editValue}
						setEditValue={setEditValue}
						editTodos={editTodos}
						id={id}
					/>
				) : null}
			</ul>
		))}
	</div>
);
