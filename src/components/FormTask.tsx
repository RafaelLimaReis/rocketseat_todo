import { PlusCircle } from "phosphor-react";

import styles from './FormTask.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface InterfaceFormTaksProps {
    onCreateTask: (task: string) => void;
}

export function FormTask({ onCreateTask }: InterfaceFormTaksProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Campo Obrigatório!!');
    }

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        onCreateTask(newTaskText);
        setNewTaskText('');
    }

    return (
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
            <input 
                value={newTaskText} 
                onInvalid={handleNewTaskInvalid}
                onChange={handleNewTaskChange}
                autoComplete="off" 
                type="text" 
                name="task" 
                placeholder="Adicione uma nova tarefa" 
                required
            />
            <button type="submit">
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    );
}