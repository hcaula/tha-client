import Header from './Header'
import Footer from './Footer'

import styles from './Layout.module.css'

type LayoutProps = {
  children?: JSX.Element
}

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.Layout}>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
