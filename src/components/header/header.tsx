import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import { HeaderProps } from "../../typeScriptProps/Props";

export default function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title) return;
    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logo} style={{ height: "6rem", width: "6rem" }} />
      <form className={styles.newTask} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          value={title}
          onChange={onChangeTitle}
        />
        <button type="submit">
          Add
          <CiCirclePlus size={25} />
        </button>
      </form>
    </header>
  );
}
