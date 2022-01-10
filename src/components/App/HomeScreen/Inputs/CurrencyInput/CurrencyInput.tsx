import moneySignIcon from 'assets/icons/money-sign.svg'

import styles from './CurrencyInput.module.css'

type CurrencyInputProps = {
  name?: string
  label?: string
  className?: string
}

const CurrencyInput = ({ name, label, className }: CurrencyInputProps) => {
  return (
    <div className={className}>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.inputComponent}>
        <img src={moneySignIcon} alt="" className={styles.moneySign} />
        <input
          name={name}
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          step="1"
          min="1"
          required
          className={styles.input}
        />
      </div>
    </div>
  )
}

export default CurrencyInput
