import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actionCreators from './../../store/action/authCreator'

const Auth = () => {
    const dispatchCreators = useDispatch()
    const onLogOut = () => dispatchCreators(actionCreators.logOut())

    useEffect(() => {
        onLogOut()
    },[])

    return <Redirect to="/" />
}

export default Auth