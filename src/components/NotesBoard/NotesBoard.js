import React from 'react'
import styles from './NotesBoard.module.css'

const NotesBoard = props => (
    <div className={styles.NotesBoard}>
        <div className={styles.MainContainer}>
            <h1>Subject : {props.subject}</h1>
            <button onClick={props.onDelete}>Delete</button>
        </div>
        <p>{props.note}</p>
    </div>
)

export default NotesBoard