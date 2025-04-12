import styles from './index.module.css'
import { PlusCircle } from '@phosphor-icons/react'

function ButtonCreate() {
  return (
    <button className={styles.btnCreate}>Criar<PlusCircle color="#F2F2F2" size={16} weight="regular" /></button>
  )
}

export default ButtonCreate