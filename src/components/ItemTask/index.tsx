import styles from './index.module.css'
import { Trash } from '@phosphor-icons/react'

interface TaskProps{
    content: string;
    checkbox: boolean;
}

function ItemTask({ content, checkbox }: TaskProps) {
    return (
        <div className={styles.containerTasks}>
            <div className={styles.checkedBtn}>
                <label className={styles.flex}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        checked={checkbox}
                    />
                    <p className={styles.text}>
                        {content}
                    </p>
                </label>
                <button className={styles.trashBtn}>
                    <Trash size={24} color="#808080" />
                </button>
            </div>
        </div>
    )
}

export default ItemTask