import React from 'react'
import { useSelector } from 'react-redux'
import useDealMutaion from '../hooks/useDeal'

const Home = () => {
  // const { getDeal } = useDealMutaion()
  const user = useSelector(state=>state.userInfo.User)
  // console.log(getDeal);
  
  return (
    <div>
      <h1>Hello, {user.role} {user.fullname}</h1>
    </div>
  )
}

export default Home