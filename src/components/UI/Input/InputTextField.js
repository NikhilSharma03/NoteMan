import React from 'react'
import styles from './InputTextField.module.css'

const InputTextField = props => (
    <input 
        className={styles.InputField}
        value={props.value} 
        onChange={props.onChange} 
        {...props.elementConfig} 
    />
)

export default InputTextField