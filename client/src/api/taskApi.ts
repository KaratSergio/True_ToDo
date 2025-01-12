import { to } from '../utils/to';
const API_URL = 'http://localhost:5085';

// GET
export const getTasks = async () => {
    const [fetchError, response] = await to(fetch(`${API_URL}/tasks`));
    if (fetchError || !response?.ok) {
        return [fetchError ?? new Error('Error fetching tasks'), null];
    }

    const [jsonError, data] = await to(response.json());
    if (jsonError) {
        return [jsonError, null];
    }

    return [null, data];
};

// POST
export const createTask = async (text: string) => {
    const [fetchError, response] = await to(
        fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        })
    );
    if (fetchError || !response?.ok) {
        return [fetchError ?? new Error('Error creating task'), null];
    }

    const [jsonError, data] = await to(response.json());
    if (jsonError) {
        return [jsonError, null];
    }

    return [null, data];
};

// DELETE
export const deleteTask = async (id: number) => {
    const [fetchError, response] = await to(
        fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE',
        })
    );
    if (fetchError || !response?.ok) {
        return [fetchError ?? new Error('Error deleting task'), null];
    }

    return [null, null];
};
