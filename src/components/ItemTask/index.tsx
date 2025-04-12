import styles from './index.module.css'
import { Trash } from '@phosphor-icons/react'

function ItemTask() {
    return (
        <div className={styles.checkedBtn}>
            <label className={styles.flex}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                />
                <p className={styles.text}>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                </p>
            </label>
            <button className={styles.trashBtn}>
                <Trash size={24} color="#808080" />
            </button>
        </div>
    )
}

export default ItemTask