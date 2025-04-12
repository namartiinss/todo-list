import styles from './index.module.css'

function TasksInfos() {
  return (
    <div className={styles.containerTasks}>
        <div className={styles.info}>
            <div className={styles.created}>
                <p className={styles.pDone}>Tarefas Concluídas</p>
                <span>0</span>
            </div>
            <div className={styles.done}>
                <p className={styles.pDonePurple}>Concluídas</p>
                <span>0</span>
            </div>
        </div>
    </div>
  )
}

export default TasksInfos