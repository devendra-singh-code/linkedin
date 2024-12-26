import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthLogout = ({children}) => {
    const [loader, setLoader] = useState(true)
    const users = authService.getCurrentUser().then((data) => setUser(data.status))
    const navigate = useNavigate()

    useEffect(() => {
        if(users === true ){
            navigate('/')
        }
        setLoader(false)
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default AuthLogout
