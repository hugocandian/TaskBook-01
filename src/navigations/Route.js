import React from 'react';

import {useUser} from '../context/UserContext'
import Nav from './Nav'
import Auth from './Auth'

const Route = () => {

  const {signed} = useUser()

  return (
    <>
    {
    signed ? <Nav /> : <Auth /> 
    }
    </>
  )


}

export default Route;