import styles from './Button.module.css'

type ButtonColor = 'primary' | 'secondary'

type ButtonProps = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onSubmit?: Function
  dataCy?: string
  type?: 'button' | 'submit' | 'reset'
  color?: ButtonColor
}

const Button = ({
  onClick,
  onSubmit,
  children,
  type,
  dataCy,
  color = 'primary'
}: ButtonProps) => (
  <button
    className={`${styles.Button} ${styles[color]}`}
    data-cy={dataCy}
    onClick={(e) => onClick && onClick(e)}
    onSubmit={(e) => onSubmit && onSubmit(e)}
    type={type}
  >
    {children}
  </button>
)

export default Button
