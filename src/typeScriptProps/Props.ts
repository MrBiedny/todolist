export interface HeaderProps {
  onAddTask: (title: string) => void;
}

export interface TaskProps {
  task: {
    id: string;
    title: string;
    isCompleted: boolean;
  };
  onToggleTask: (id: string) => void;
  onDelete: (id: string) => void;
}

export interface TasksProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface Props {
  tasks: TasksProps[];
  onToggleTask: (id: string) => void;
  onDelete: (id: string) => void;
}
