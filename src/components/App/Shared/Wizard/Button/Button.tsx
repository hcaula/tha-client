import styles from './Button.module.css'

type ButtonType = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  type?: ButtonType
}

const Button = ({ onClick, children, type = 'primary' }: ButtonProps) => (
  <button className={`${styles.Button} ${styles[type]}`} onClick={onClick}>
    {children}
  </button>
)

export default Button
