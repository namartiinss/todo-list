import { CountTask } from '@/types/app';
import styles from './index.module.css'



function TasksInfos({likeCount}: CountTask) {

  return (
    <div className={styles.containerTasks}>
        <div className={styles.info}>
            <div className={styles.done}>
                <p className={styles.pDone}>Tarefas criadas</p>
                <span>{likeCount}</span>
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