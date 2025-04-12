import styles from './index.module.css'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className={styles.headerHero}>
        <img src={Logo} />
    </header>
    
  )
}

export default Header