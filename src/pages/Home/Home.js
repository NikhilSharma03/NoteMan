import React from 'react'
import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
    const isAuth = useSelector(state => state.auth.token !== null)

return (
    <section className={styles.Home}>
        <h1>Welcome To NoteMan</h1>
        <p>The perfect place to keep your school notes</p>
        <label className={styles.Link}><Link to={isAuth ? "/my_notes" :"/auth"}>Let's Get Started</Link></label>
    </section>
)
}

export default Home