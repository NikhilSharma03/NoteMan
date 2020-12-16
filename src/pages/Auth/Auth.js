import React,{useReducer, useState} from 'react'
import styles from './Auth.module.css'
import InputTextField from './../../components/UI/Input/InputTextField'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actionCreators from './../../store/action/authCreator'
import Error from './../../components/UI/Modal/Error/Error'
import Loader from './../../components/UI/Loader/Loader'

const signUpReducer = (state,action) => {
    switch(action.type){
        case 'name':return {
            ...state,
            name:{
                ...state.name,
                value:action.value
            }
        }
        case 'email':return {
            ...state,
            email:{
                ...state.email,
                value:action.value
            }
        }        
        case 'password':return {
            ...state,
            password:{
                ...state.password,
                value:action.value
            }
        }

        default: return state
    }
}

const Auth = () => {
    const [formData,dispatch] = useReducer(signUpReducer,{name:{elementConfig:{placeholder:"Name",type:"text"},value:''},email:{elementConfig:{placeholder:"Email",type:"email"},value:''},password:{elementConfig:{placeholder:"Password",type:"password"},value:''}})
    const [isLogin,setIsLogin] = useState(true)

    //Redux
    const dispatchCreators = useDispatch()
    const onAuthenticate = (email,password,isLogin) => dispatchCreators(actionCreators.auth(email,password,isLogin))
    const onClearError = () => dispatchCreators(actionCreators.clearError())

    const isAuth = useSelector(state => state.auth.token !== null)
    const error = useSelector(state => state.auth.error)
    const loading = useSelector(state => state.auth.loading)

    //End
    const formDataArray = []
    Object.keys(formData).map(item => {
        return formDataArray.push({id:item,config:formData[item]})
    })

    if(isLogin){
        formDataArray.shift()
    }

    const onChangeHandler = (event,identifier) => {
        dispatch({type:identifier,value:event.target.value})
    }

    const onSubmitHandler = event => {
        event.preventDefault()
        let userdata = {
            email:formData.email.value,
            password:formData.password.value,
        }
        onAuthenticate(userdata.email,userdata.password,isLogin)
    }

    return loading ? <Loader />: 
        (
        <React.Fragment>
            {isAuth && <Redirect to="/my_notes" />}
            {error && <Error onRemoveModal={onClearError} show={error !== null} message={error}/> }
            <form className={styles.Form} onSubmit={onSubmitHandler}>
                <div className={styles.Switch}>
                    <label>Log In</label>
                    <input type="checkbox" onChange={() => setIsLogin(prev => !prev)} />
                    <label>Sign Up</label>
                </div>
                {formDataArray.map(item => (
                    <InputTextField elementConfig={item.config.elementConfig} onChange={(event) => onChangeHandler(event,item.id)} key={item.id} value={item.config.value}/>
                ))}
                <button className={styles.Button} type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
        </React.Fragment>
    )
    
}

export default Auth