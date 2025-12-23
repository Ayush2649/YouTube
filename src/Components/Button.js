import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-gray-200 px-3 py-1 ml-1 mt-2 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button