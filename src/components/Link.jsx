import React from 'react'

function Link({ text }) {
    return (
        <li className='py-1 px-3 hover:bg-secondaryColor rounded min-w-fit hover:bg-opacity-80 hover:transition-all hover:ease-in-out hover:delay-300'>{text}</li>
    )
}

export default Link

