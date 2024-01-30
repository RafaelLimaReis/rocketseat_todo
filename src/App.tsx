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

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <FormTask onCreateTask={createTask} />
        <List tasks={tasks} />
      </section>
    </main>
  )
}

export default App
