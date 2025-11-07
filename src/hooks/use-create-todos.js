import { useState } from 'react';
import { DB } from '../constants';

export const useCreateTodos = (refreshTodos) => {
	const [isCreate, setIsCreate] = useState(false);

	const createTodos = (newTodo) => {
		setIsCreate(true);
		fetch(DB.URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				todoTitle: newTodo,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				refreshTodos();
				console.log(`Новая задача была создана:`, data);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsCreate(false));
	};

	return {
		createTodos,
		isCreate,
	};
};
