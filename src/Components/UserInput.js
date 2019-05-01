import React from 'react'

const UserInput = props => {
  return (
    <div>
      <input
        onChange={props.change}
        type='text'
        value={props.currentName}
        style={props.style}
      />
    </div>
  )
}

export default UserInput
