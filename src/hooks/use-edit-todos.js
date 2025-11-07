import { DB } from '../constants';

export const useEditTodos = (refreshTodos) => {
	const editTodos = (id, editTodo) => {
		fetch(`${DB.URL}/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				todoTitle: editTodo,
			}),
		})
			.then((response) => response.json())
			.then((data) => refreshTodos() || console.log(`Задача была изменениа:`, data))
			.catch((error) => console.log(error));
	};

	return {
		editTodos,
	};
};
