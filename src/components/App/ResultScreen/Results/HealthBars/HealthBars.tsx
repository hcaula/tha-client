import styles from './HealthBars.module.css'

export type HealthBarsColor = 'healthy' | 'medium' | 'low'

type HealthBarsProps = {
  /* TODO: a CSS only approach makes it hard to know the index of the child. Therefore,
   * this component only supports 3 sub bars. Change to a JS approach. */
  levels: 3
  coloredLevels: number
  color: HealthBarsColor
}

const HealthBars = ({ levels, coloredLevels, color }: HealthBarsProps) => {
  const range = Array.from(Array(levels).keys())

  return (
    <div className={styles.HealthBars}>
      {range.map((_, index) => {
        const isColored = index < coloredLevels
        return (
          <div
            key={index}
            className={`${styles.healthBar} ${isColored && styles[color]}`}
          />
        )
      })}
    </div>
  )
}

export default HealthBars
