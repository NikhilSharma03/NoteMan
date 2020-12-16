import React from 'react'
import styles from './RadioButton.module.css'

const RadioButton = props => (
    <div className={styles.RadioButton}>
        <input className={styles.RadioIn} onChange={props.onChange} type='radio' name={props.name} id={props.id} value={props.value} />
        <label className={styles.RadioLa} htmlFor={props.id}>{props.label}</label>
    </div>
)

export default RadioButton