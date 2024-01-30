import { ClipboardText } from 'phosphor-react';
import { InterfaceTask } from '../../App';
import style from './List.module.css';

interface InterfaceListProps {
    tasks: InterfaceTask[]
}

export function List({tasks}: InterfaceListProps) {
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
                    <span>{totalCompletedTasks}</span>
                </div>
            </header>
            <div className={style.contentList}>
                {tasks.length > 0 ? (
                    <span>tem task</span>
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