import { TaskCreate } from '../components/TaskCreate';
import { TaskList } from '../components/TaskList';
import { useTasks } from '../hooks/useTasks';

import reactLogo from '../assets/react.svg';

function App() {
    const { tasks, error, addTask, removeTask } = useTasks();

    return (
        <div className="container md:m-5 p-4 flex flex-col border bg-slate-200 border-yellow-200 rounded-md">
            <div className="flex items-center">
                <h1 className="leading-3 font-semibold">ToDo</h1>
                <img src={reactLogo} className="logo" alt="React logo" />
            </div>

            <div className="flex flex-col gap-4">
                <TaskCreate onCreate={addTask} />
                <TaskList tasks={tasks} onDelete={removeTask} />
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        </div>
    );
}

export default App;
