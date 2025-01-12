import { FC } from 'react';
import { Task } from './Task';
import { TaskListProps } from '../types';

export const TaskList: FC<TaskListProps> = ({ tasks, onDelete }) => {
    return (
        <div>
            <h2 className="text-xl italic">
                {tasks.length > 0
                    ? ` You have ${tasks.length} active task`
                    : 'Task list is empty, add task'}
            </h2>
            <ul className="space-y-2 mt-2">
                {tasks.map(task => (
                    <Task key={task.id} id={task.id} text={task.text} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};
