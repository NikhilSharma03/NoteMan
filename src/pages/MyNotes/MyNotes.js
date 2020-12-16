import React from 'react'
import styles from './MyNotes.module.css'
import MyNotesCard from './../../components/MyNotesCard/MyNotesCard'
import Image from './../../shared/Image/Image'
import { useSelector } from 'react-redux'

const cardData = [
    {
        title:'Math',
        src:Image.math,
        to:'math'
    },
    {
        title:'Music',
        src:Image.music,
        to:'music'
    },
    {
        title:'Politics',
        src:Image.politics,
        to:'politics'
    },
    {
        title:'History',
        src:Image.history,
        to:'history'
    },
    {
        title:'Computer',
        src:Image.computer,
        to:'computer'
    },
    {
        title:'Science',
        src:Image.science,
        to:'science'
    },
    {
        title:'Language',
        src:Image.language,
        to:'language'
    },
    {
        title:'Rough',
        src:Image.rough,
        to:'rough'
    },
]

const MyNotes = props => {
    const name = useSelector(state => state.auth.name)
    
    return (
        <section className={styles.Container}>
            <div className={styles.Profile}>
                <div className={styles.ProfileContainer}>
                    <img alt="user" src={Image.user} />
                    <h1>{name}</h1>
                </div>
            </div>
            <h1 className={styles.Head}>Category</h1>            
            <div className={styles.MyNotes}>
                {cardData.map(item => <MyNotesCard title={item.title} 
                    src={item.src} 
                    key={item.title} 
                    to={item.to}
                    />)}
            </div>
        </section>
    )
}

export default MyNotes