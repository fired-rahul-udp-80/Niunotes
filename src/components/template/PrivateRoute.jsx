import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Navigate } from "react-router-dom"
const PrivateRoute = ({children}) => {
    const {privateRoute} = useContext(AppContext);
    if (privateRoute) {
        return children
      } else {
        return <Navigate to="/" />
      }
}

export default PrivateRoute