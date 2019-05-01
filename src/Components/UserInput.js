import React from 'react'

const UserInput = props => {
  return (
    <div>
      <input
        onChange={props.change}
        type='text'
        placeholder='username'
        value={props.username}
        style={props.style}
      />
    </div>
  )
}

export default UserInput
