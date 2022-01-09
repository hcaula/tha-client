import styles from './Card.module.css'

type CardProps = {
  children: React.ReactNode
}

const Card = ({ children }: CardProps) => (
  <div className={styles.Card}>{children}</div>
)

export default Card
