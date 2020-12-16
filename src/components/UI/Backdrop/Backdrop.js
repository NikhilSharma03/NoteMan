import React from 'react'
import styles from './Backdrop.module.css'

const Backdrop = props => (
    <div onClick={props.onClick} style={{display:!props.show && 'none'}} className={styles.Backdrop}>
    </div>
)

export default Backdrop