import { Check, ClipboardText, Trash } from 'phosphor-react';
import { InterfaceTask } from '../../App';
import style from './List.module.css';
import { MouseEvent } from 'react';

interface InterfaceListProps {
    tasks: InterfaceTask[],
    onToggleStatusTask: (id: string, value: boolean) => void;
    onDeleteTask: (id: string) => void;
}

export function List({tasks, onToggleStatusTask, onDeleteTask}: InterfaceListProps) {
    const totalCompletedTasks = tasks.reduce((total, currentTask) => {
        if (currentTask.isChecked) {
            return total + 1;
        }
        return total;
    }, 0);

    return (
        <div className={style.listContainer}>
            <header className={style.header}>
                <div className={style.totalTasks}>
                    <span>Tarefas criadas</span>
                    <span>{tasks.length}</span>
                </div>
                <div className={style.totalCompletedTasks}>
                    <span>Concluídas</span>
                    <span>{totalCompletedTasks} de {tasks.length}</span>
                </div>
            </header>
            <div className={style.contentList}>
                {tasks.length > 0 ? (
                    tasks.map((task) => {
                        const taskCompleted = task.isChecked ? style.taskIsChecked : style.taskIsNotChecked;
                        function handleToggleStatusTask() {
                            onToggleStatusTask(task.id, !task.isChecked);
                        }

                        function handleDeleteTask() {
                            onDeleteTask(task.id);
                        }
                        return (
                            <div key={task.id} className={style.taskContent}>
                                <label htmlFor="checkobox" className={taskCompleted} onClick={handleToggleStatusTask}>
                                    <input readOnly type="checkbox" checked={task.isChecked} />
                                    <span>
                                        {task.isChecked && <Check size={18} />}
                                    </span>
                                    <span>
                                        {task.text}
                                    </span>
                                </label>
                                <button type='button' onClick={handleDeleteTask}>
                                    <Trash size={20} />
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <div className={style.emptyList}>
                        <ClipboardText size={56} />
                        <strong>
                            Você ainda não tem tarefas cadastradas
                        </strong>
                        <span>
                            Crie tarefas e organize seus itens a fazer
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}