import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskList } from '../components/TaskList';

describe('TaskList', () => {
    test('displays message when there are no tasks', () => {
        render(<TaskList tasks={[]} onDelete={jest.fn()} />);
        expect(screen.getByText('Task list is empty, add task')).toBeInTheDocument();
    });

    test('displays the correct number of tasks', () => {
        const tasks = [
            { id: 1, text: 'Task 1' },
            { id: 2, text: 'Task 2' },
        ];
        render(<TaskList tasks={tasks} onDelete={jest.fn()} />);
        expect(screen.getByText('You have 2 active task')).toBeInTheDocument();
    });

    test('calls onDelete when delete button is clicked', () => {
        const onDeleteMock = jest.fn();
        const tasks = [{ id: 1, text: 'Task 1' }];
        render(<TaskList tasks={tasks} onDelete={onDeleteMock} />);

        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);

        expect(onDeleteMock).toHaveBeenCalledWith(1);
    });
});
