import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MyNotesCard.module.css'

const MyNotesCard = props => {
    return (
    <div className={styles.MyNotesCard}>
        <Link to={'/my_notes/'+props.to}>
            <img src={props.src} alt="card" />
            <h1>{props.title}</h1>
        </Link>
    </div>)
}

export default MyNotesCard