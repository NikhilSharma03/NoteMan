import React, { useState } from 'react'
import styles from './AddNotes.module.css'
import RadioButton from './../../components/UI/RadioButton/RadioButton'
import { useSelector } from 'react-redux'
import Loader from './../../components/UI/Loader/Loader'
import Axios from 'axios'
import Error from './../../components/UI/Modal/Error/Error'


const categoryData = [
    {
        id:'math',
        value:'math',
        name:'category',
        label:"Math"
    },
    {
        id:'music',
        value:'music',
        name:'category',
        label:"Music"
    },

    {
        id:'politics',
        value:'politics',
        name:'category',
        label:"Politics"
    },
    {
        id:'history',
        value:'history',
        name:'category',
        label:"History"
    },
    {
        id:'computer',
        value:'computer',
        name:'category',
        label:"Computer"
    },
    {
        id:'science',
        value:'science',
        name:'category',
        label:"Science"
    },
    {
        id:'language',
        value:'language',
        name:'category',
        label:"Language"
    },
    {
        id:'rough',
        value:'rough',
        name:'category',
        label:"Rough"
    }
]

const AddNotes = props => {
    const [note,setNote] = useState('')
    const [category,setCategory] = useState('')
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [dataSuccess,setDataSuccess] = useState(null)

    const onCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const onNoteChange = (event) => {
        setNote(event.target.value)
    }

    //Redux
    const token = useSelector(state => state.auth.token)
    const userId = useSelector(state => state.auth.userId)

    //End
    const userData = {
        note,
        category,
        userId,
    }
    
    const submitHandler = () =>
    {
        if(category.length === 0 || note.length === 0){
            return;
        }
    
        setLoading(true)
        Axios.post(process.env.REACT_APP_POST_NOTE_API+'?auth='+token,userData)
        .then(() => {
            setLoading(false)
            setDataSuccess("Notes Added Successfully")
            setNote('')
            setCategory('')
        })
        .catch(() => {
            setLoading(false)
            setError('Something Went Wrong. Please Try Again.')
        })

    }


    return loading ? <Loader /> :(
        <section className={styles.AddNotes}>
            {dataSuccess && <Error message={dataSuccess} show={dataSuccess !== null} onRemoveModal={() => {setDataSuccess(null)}} /> }
            {error && <Error message={error} show={error !== null} onRemoveModal={() => {setError(null)}} /> }
            <label className={styles.AddNotesLabels}>Note</label>
            <textarea value={note} onChange={onNoteChange} />
            <label className={styles.AddNotesLabels}>Category</label>
            <div className={styles.CategoryContainer}>
                {categoryData.map(item => <RadioButton 
                    key={item.id}
                    id={item.id}
                    value={item.value}
                    name={item.name}
                    label={item.label}
                    onChange={onCategoryChange}
                />)}
            </div>
            <button onClick={submitHandler} className={styles.Button}>Add</button>
        </section>
    )
}

export default AddNotes
