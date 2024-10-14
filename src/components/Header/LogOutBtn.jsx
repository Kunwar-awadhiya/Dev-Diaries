import React from 'react'
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/config';
import {logout} from '../../store/authSlice';

const LogOutBtn = () => {
    const disptch = useDispatch()
    const logOutHandler = () => {
        authService.logout().then(()=>{
            disptch(logout())
        })
    }
  return (
    <button className='inline-block px-6 duration-200 hover:bg-blue-100 rounded-full'>
        Logout
    </button>
  )
}

export default LogOutBtn;
