import originLogo from 'assets/icons/origin-logo.svg'

import styles from './Header.module.css'

const Header = () => (
  <header className={styles.Header}>
    <img src={originLogo} alt="" />
  </header>
)

export default Header
