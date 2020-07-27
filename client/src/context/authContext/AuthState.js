import React, {useReducer} from 'react'
import axios from 'axios'

import authContext from './authContext'
import authReducer from './authReducer'

import {SUCCESS_REGISTER, 
        SUCCESS_LOGIN, 
        FAIL_LOGIN, 
        FAIL_REGISTER,
        SET_ERROR,
        CLEAR_ERROR} from './../type'


const AuthState = (props) => {
    const initialState = {
        userAuth:null,
        errors:null
    }
    const [state, dispatch] = useReducer(authReducer, initialState)

    // Register User Action

    const registerUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/register', userData, config) //the proxy lets us not need to add localhost:5000
            dispatch({
                type:SUCCESS_REGISTER,
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:FAIL_REGISTER,
                payload:error.response.data
            })
        }
    }

    // Log in Action

    const loginUser = async userData => {
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/auth', userData, config) //the proxy lets us not need to add localhost:5000
            dispatch({
                type:SUCCESS_LOGIN,
                payload:res.data
            })
        } catch (error) {
            dispatch({
                type:FAIL_LOGIN,
                payload:error.response.data
            })
        }
    }

    const setError = err => {
        dispatch({
            type:SET_ERROR,
            payload:err
        })
    }

    const clearError = () => {
        dispatch({
            type:CLEAR_ERROR,
        })
    }
    
    return (
        <authContext.Provider value={{
            userAuth:state.userAuth,
            errors:state.errors,
            registerUser,
            loginUser,
            setError,
            clearError
        }}>
            {props.children}
        </authContext.Provider>
    )
}

export default AuthState
