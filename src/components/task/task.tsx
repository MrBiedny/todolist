import { CiTrash } from "react-icons/ci";
import { BsFillCheckCircleFill } from "react-icons/bs";
import styles from "./Task.module.css";
import { TaskProps } from "../../typeScriptProps/Props";

export default function Task({ task, onToggleTask, onDelete }: TaskProps) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onToggleTask(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <CiTrash size={25} />
      </button>
    </div>
  );
}
