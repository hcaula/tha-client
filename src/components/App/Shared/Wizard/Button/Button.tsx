import styles from './Button.module.css'

type ButtonColor = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  color?: ButtonColor
}

const Button = ({ onClick, children, color = 'primary' }: ButtonProps) => (
  <button className={`${styles.Button} ${styles[color]}`} onClick={onClick}>
    {children}
  </button>
)

export default Button
