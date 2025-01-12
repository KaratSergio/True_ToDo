type Task = {
    id: number;
    text: string;
};

type DeleteHandler = {
    onDelete: (id: number) => void;
};

//  Task
export type TaskProps = Task & DeleteHandler & {};

// TaskList
export type TaskListProps = DeleteHandler & {
    tasks: Task[];
};

//  TaskCreate
export type TaskCreateProps = {
    onCreate: (task: string) => void;
};
