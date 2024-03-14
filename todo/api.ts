import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001"

export const getAllTodos = async (): Promise<ITask[]> => {
    try {
        const res = await fetch(`${baseUrl}/tasks`);
        
        if (!res.ok) {
            throw new Error(`Failed to fetch todos: ${res.statusText}`);
        }
        
        const todos = await res.json();
        return todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}