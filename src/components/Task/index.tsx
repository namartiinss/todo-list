import ButtonCreate from '../ButtonCreate'
import Input from '../Input'
import styles from './task.module.css'

function Task() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <Input />
                <ButtonCreate />
            </form>
        </div>
    )
}

export default Task