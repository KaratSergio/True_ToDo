import { FC, useState } from 'react';
import { TaskCreateProps } from '../types';

export const TaskCreate: FC<TaskCreateProps> = ({ onCreate }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex pt-2">
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                className="focus:outline-none rounded-l p-2 w-full max-w-64 border border-sky-400"
                placeholder="write your future"
            />
            <button
                type="submit"
                className="flex items-center bg-sky-400 text-white hover:text-yellow-300 hover:underline px-2 py-2 rounded-r"
            >
                Create
            </button>
        </form>
    );
};
