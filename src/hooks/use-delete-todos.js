import { DB } from '../constants';

export const useDeleteTodos = (refreshTodos) => {
	const deleteTodos = (id) => {
		fetch(`${DB.URL}/${id}`, {
			method: 'DELETE',
		})
			.then((response) => response.json())
			.then((data) => console.log(`Задача была удалена:`, data) || refreshTodos())
			.catch((error) => console.log(error));
	};

	return {
		deleteTodos,
	};
};
