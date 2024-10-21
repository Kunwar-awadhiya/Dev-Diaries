import React from 'react'
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from '../../store/authSlice';

const LogOutBtn = () => {
    const dispatch = useDispatch()
    const logOutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 duration-200 hover:bg-blue-100 rounded-full' onClick={logOutHandler}>
        Logout
    </button>
  )
}

export default LogOutBtn;
