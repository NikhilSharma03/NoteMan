import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.css';

const NavigationItem = (props) => {
  return (
    <li className={styles.List}>
      <NavLink to={props.href} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
