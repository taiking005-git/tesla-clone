import React from 'react'

function Button({ text, type }) {
    return (
        type === 'primary' ?
            <a href="/" className='bg-primaryColor py-2 px-20 md:px-32 rounded text-white m-3 font-semibold '>{text}</a>
            : <a href="/" className='bg-secondaryColor py-2 px-20 md:px-32 rounded text-darkColor m-3 font-semibold'>{text}</a>
    )
}

export default Button