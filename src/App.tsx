import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { FormTask } from "./components/FormTask";
import { Header } from "./components/Header"

import styles from './App.module.css';
import { List } from "./components/list/List";

export interface InterfaceTask {
  id: string;
  text: string;
  isChecked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<InterfaceTask[]>([]);

  function createTask(task: string) {
    if (task.length === 0) return;

    const newTask: InterfaceTask = {
      id: uuidv4(),
      text: task,
      isChecked: false
    };

    setTasks((state) => [...state, newTask]);
  }

  function toggleStatusTask(id: string, value: boolean) {
    const newStatusTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, isChecked: value};
      }
      return {...task};
    });

    setTasks(newStatusTasks);
  }

  function deleteTask(id: string) {
    const updatedTaks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTaks);
  }

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <FormTask onCreateTask={createTask} />
        <List tasks={tasks} onToggleStatusTask={toggleStatusTask} onDeleteTask={deleteTask} />
      </section>
    </main>
  )
}

export default App
