import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './../NavigationItem/NavigationItem';
import { useSelector } from 'react-redux';

const NavigationItems = (props) => {
  const isAuth = !!useSelector(state => state.auth.token)

  return (
    <ul className={styles.UList}>
      <NavigationItem href='/' exact={true}>
        Home
      </NavigationItem>
      
      {isAuth && <NavigationItem href='/add_notes' exact={true}>
        Add Notes
      </NavigationItem>}

      {isAuth && <NavigationItem href='/my_notes' exact={true}>
        My Notes
      </NavigationItem>}

      <NavigationItem href={isAuth ?'/logout' :'/auth'}>
        {isAuth?'LogOut' : 'SignIn'}
      </NavigationItem>

    </ul>
  );
};

export default NavigationItems;
