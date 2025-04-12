import styles from './index.module.css'
import Clipboard from '../../assets/clipboard.svg'

function Empty() {
    return (
        <div className={styles.empty}>
            <img src={Clipboard} alt="" />
            <p>
                <strong>
                    Você ainda não tem tarefas cadastradas
                </strong>
            </p>
            <p>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}

export default Empty