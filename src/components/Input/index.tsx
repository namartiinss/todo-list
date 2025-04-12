import styles from './index.module.css';

function Input() {
  return (
    <input className={styles.inputDefault} type="text" placeholder='Adicione uma nova tarefa'/>
  )
}

export default Input