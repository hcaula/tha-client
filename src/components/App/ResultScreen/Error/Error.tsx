import styles from './Error.module.css'

const Error = () => {
  return (
    <div className={styles.Error} data-cy="financialHealthError">
      An error has occurred. Please, try again later.
    </div>
  )
}

export default Error
