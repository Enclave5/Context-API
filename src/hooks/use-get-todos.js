import { useState, useEffect } from 'react';
import { DB } from '../constants';

export const useGetTodos = (refreshTodosFlug) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch(DB.URL)
			.then((response) => response.json())
			.then((data) => setTodos(data) || console.log(`Задачи были загружены:`, data))
			.catch((error) => console.log(error))
			.finally(() => setIsLoading(false));
	}, [refreshTodosFlug]);

	return {
		todos,
		isLoading,
		setTodos,
	};
};
