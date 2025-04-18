import { InputProps } from '@/types/app';
import styles from './index.module.css';
import { PlusCircle } from '@phosphor-icons/react'

function Input({newToDo, setNewToDo, onSubmit}: InputProps) {
  return (
    <div className={styles.containerInput}>
      <input
        name="newToDo"
        value={newToDo}
        placeholder='Adicione uma nova tarefa'
        onChange={(e) => setNewToDo(e.target.value)}
        className={styles.inputDefault}
        required
      />
      <button
        onClick={onSubmit}
        type="submit"
        className={styles.btnCreate}>Criar<PlusCircle color="#F2F2F2" size={16} weight="regular" />
      </button>
    </div>
  )

}

export default Input