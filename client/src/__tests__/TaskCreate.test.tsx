import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskCreate } from '../components/TaskCreate';

describe('TaskCreate', () => {
    test('onCreate is called with text and input is cleared', () => {
        const onCreateMock = jest.fn();
        render(<TaskCreate onCreate={onCreateMock} />);

        const input = screen.getByPlaceholderText('write your future');
        const button = screen.getByText('Create');

        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);

        expect(onCreateMock).toHaveBeenCalledWith('New Task');
        expect(input).toHaveValue('');
    });
});
