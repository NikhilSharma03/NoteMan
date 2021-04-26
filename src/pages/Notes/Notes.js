import React, { useEffect, useState } from 'react'
import styles from './Notes.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import NotesBoard from './../../components/NotesBoard/NotesBoard'
import Axios from 'axios'
import Loader from './../../components/UI/Loader/Loader'

const Notes = props => {
    const [loading,setLoading] = useState(true)
    const [fetchData,setFetchData] = useState([])

    const subject = useParams().subject
    const userId = useSelector(state => state.auth.userId)
    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        Axios.get(``)
        .then(res => {
            let allData = []
            Object.keys(res.data).map(id => {
                return allData.push({id:id,category:res.data[id].category,note:res.data[id].note})
            })
            setFetchData(allData.filter(item => item.category === subject))

            setLoading(false)
        })
        .catch(err => console.log(err))
    },[subject,token,userId])

    const deleteHandler = (id) => {
        setLoading(true)
        Axios.delete(``)
        .then(() => {
            setFetchData(fetchData => fetchData.filter(item => item.id !== id))
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

    return loading ? <Loader /> : (
        fetchData.length === 0 ? <h1 className={styles.NoAddedText}>No Notes Added</h1>
        :
        <div className={styles.Notes}>
            {fetchData.map(item => <NotesBoard 
                key={item.id} id={item.id}    
                note={item.note}
                subject={item.category}
                onDelete={() => deleteHandler(item.id)}
            />)
            }
        </div>
    )
}

export default Notes
