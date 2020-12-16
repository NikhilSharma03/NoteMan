import React from 'react'
import ReactDOM from 'react-dom'
import styles from './SideDrawer.module.css'
import Backdrop from './../UI/Backdrop/Backdrop'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SideDrawer = props => {

    const isAuth = !!useSelector(state => state.auth.token)

    const data = (<React.Fragment>
        <Backdrop show={props.display} onClick={props.closeSD} />
        <aside onClick={props.closeSD} className={styles.SideDrawer} style={{transform:props.display ? 'translateX(0)':'translateX(-100vh)',opacity:props.display ? '1':'0'}}>
        <ul className={styles.UList}>
            <li className={styles.List}>
                <NavLink to='/' exact>
                    Home
                </NavLink>
            </li>


            {isAuth && <li className={styles.List}>
                <NavLink to='/add_notes' exact>
                    Add Notes
                </NavLink>
            </li>}

            {isAuth && <li className={styles.List}>
                <NavLink to='/my_notes' exact>
                    My Notes
                </NavLink>
            </li>}

            <li className={styles.List}>
                <NavLink to={isAuth ?'/logout' :'/auth'} exact>
                    {isAuth ? 'LogOut' : 'SignIn'}
                </NavLink>
            </li>
        </ul>
        </aside>
    </React.Fragment>)
    return ReactDOM.createPortal(data,document.getElementById('sd'))
}

export default SideDrawer