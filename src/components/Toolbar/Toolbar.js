import React from 'react';
import styles from './Toolbar.module.css';
import NavigationItems from './NavigationItems/NavigationItems';
import Image from './../../shared/Image/Image'


const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <figure className={styles.MainHead}>
        <img alt='main' src={Image.logo} />
        <label>NoteMan</label>
      </figure>
      <div onClick={props.showSD} className={styles.SDMenu}>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 128 128" width="64px" height="64px"><path fill="#fff" d="M64 14A50 50 0 1 0 64 114A50 50 0 1 0 64 14Z"/><path fill="#444b54" d="M64,117c-29.2,0-53-23.8-53-53s23.8-53,53-53s53,23.8,53,53S93.2,117,64,117z M64,17c-25.9,0-47,21.1-47,47s21.1,47,47,47s47-21.1,47-47S89.9,17,64,17z"/><path fill="#444b54" d="M86.5 52h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 52 86.5 52zM86.5 67h-45c-1.7 0-3-1.3-3-3s1.3-3 3-3h45c1.7 0 3 1.3 3 3S88.2 67 86.5 67z"/><g><path fill="#444b54" d="M86.5,82h-45c-1.7,0-3-1.3-3-3s1.3-3,3-3h45c1.7,0,3,1.3,3,3S88.2,82,86.5,82z"/></g></svg>
      </div>
      <nav className={styles.Nav}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
