import { useState, useEffect } from 'react';
import { TaskProps } from '../types';
import { getTasks, createTask, deleteTask } from '../api/taskApi';

export const useTasks = () => {
    const [tasks, setTasks] = useState<TaskProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    // GET ALL TASKS
    useEffect(() => {
        const fetchTasks = async () => {
            const [err, tasksFromApi] = await getTasks();
            if (err) {
                setError('Error fetching tasks');
                console.error(err);
                return;
            }
            setTasks(tasksFromApi!);
        };

        fetchTasks();
    }, []);

    // ADD TASK
    const addTask = async (text: string) => {
        const [err, newTask] = await createTask(text);
        if (err) {
            setError('Error creating task');
            console.error(err);
            return;
        }
        setTasks(prevTasks => [...prevTasks, newTask!]);
    };

    // DELETE TASK
    const removeTask = async (id: number) => {
        const [err] = await deleteTask(id);
        if (err) {
            setError('Error deleting task');
            console.error(err);
            return;
        }
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    return { tasks, error, addTask, removeTask };
};
