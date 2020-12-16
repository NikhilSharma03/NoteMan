import React from 'react'
import styles from './Error.module.css'
import Backdrop from './../../Backdrop/Backdrop'

const Error = (props) => (
    <React.Fragment>
        <Backdrop show={props.show} />
        <div className={styles.Modal}>
            <h1>{props.message}</h1>
            <button onClick={props.onRemoveModal}>Close</button>
        </div>
    </React.Fragment>
)

export default Error