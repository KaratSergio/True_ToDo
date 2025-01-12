import { FC } from 'react';
import { TaskProps } from '../types';

export const Task: FC<TaskProps> = ({ id, text, onDelete }) => {
    return (
        <li className="flex justify-between items-center border pl-4 rounded-sm bg-slate-50">
            <span>{text}</span>
            <button
                onClick={() => onDelete(id)}
                className="text-red-500 hover:text-red-700 hover:underline"
            >
                Delete
            </button>
        </li>
    );
};
