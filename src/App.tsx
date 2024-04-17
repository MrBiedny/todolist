import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Tasks from "./components/tasks/Tasks";
import { TasksProps } from "./typeScriptProps/Props";

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function loadTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(function () {
    loadTasks();
  }, []);

  function setTasksAndSave(newTasks: TasksProps[]) {
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
