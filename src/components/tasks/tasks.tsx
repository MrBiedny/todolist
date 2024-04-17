import styles from "./Tasks.module.css";
import Task from "../task/Task";
import { Props } from "../../typeScriptProps/Props";

export default function Tasks({ tasks, onToggleTask, onDelete }: Props) {
  const taskQuantity = tasks.length;
  const completedTask = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <div className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{taskQuantity}</span>
        </div>
        <div>
          <p>Completed tasks</p>
          <span>
            {completedTask} of {taskQuantity}
          </span>
        </div>
      </div>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}
