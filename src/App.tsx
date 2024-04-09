import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Tasks from "./components/tasks/tasks";

interface Task {
  id: string;
  title: string;
  isCompleted: boolean;
}

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function loadTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(function () {
    loadTasks();
  }, []);

  function setTasksAndSave(newTasks: Task[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks,
      { id: crypto.randomUUID(), title: taskTitle, isCompleted: false },
    ]);
  }

  function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toggleTask(taskId: string) {
    const newTask = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setTasksAndSave(newTask);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks tasks={tasks} onToggleTask={toggleTask} onDelete={deleteTask} />
    </>
  );
}

export default App;
