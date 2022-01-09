import originLogo from 'assets/icons/origin-logo.svg'

import styles from './Header.module.css'

const Header = () => (
  <div className={styles.Header}>
    <img src={originLogo} alt="" />
  </div>
)

export default Header
