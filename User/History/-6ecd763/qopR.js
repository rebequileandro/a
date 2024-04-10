import React from 'react'
import styles from './MarkerPulse.module.css'

export const MarkerPulse = () => {
  return (
    <div className={styles.dot}>
		<div className={styles.centraldot}></div>
		<div className={styles.wave}></div>
		<div className={styles.wave2}></div>
	</div>
  )
}
