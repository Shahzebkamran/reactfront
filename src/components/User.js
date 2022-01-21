import React from 'react'
import {useCookies} from 'react-cookie';
import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom';
function User(props) {
    
    let history = useHistory()


    useEffect(() => {
        if(!localStorage.getItem('token')) {
            history.push('/')
        }
    }, [])

    const logoutBtn = () => {
        localStorage.removeItem('token')
        history.push('/')
      }
    return (
        <div>
            <h1>Hello User</h1>
            <br/>
            <br/>
        <button onClick = {logoutBtn} className = "btn btn-primary">Logout</button>
        </div>
        
    )
}

export default User;
