import styles from './Button.module.css'

type ButtonColor = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  dataCy?: string
  type?: 'button' | 'submit' | 'reset'
  color: ButtonColor
}

const Button = ({ onClick, children, type, dataCy, color }: ButtonProps) => (
  <button
    className={`${styles.Button} ${styles[color]}`}
    data-cy={dataCy}
    onClick={(e) => onClick && onClick(e)}
    type={type}
  >
    {children}
  </button>
)

export default Button
