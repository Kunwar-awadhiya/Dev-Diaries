import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}


// if in other form 
/*
if (authentication) {
    // User is expected to be authenticated, but the status is false
    if (authStatus !== authentication) {
        navigate("/login");
    }
} else {
    // User is not expected to be authenticated, but the status is true
    if (authStatus !== authentication) {
        navigate("/");
    }
}
    */