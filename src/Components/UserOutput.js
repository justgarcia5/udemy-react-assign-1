import React from 'react'
import '../App.css'

const UserOutput = props => {
  return(
    <div className='UserOutput'>
      <p>Hello! My username is {props.username}.</p>
      <p>I have been a member for {props.years} years!</p>
    </div>
  )
}

export default UserOutput
