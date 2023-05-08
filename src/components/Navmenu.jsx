import React from 'react'
import Link from './Link'

function Navmenu() {
    return (
        <div>
            <ul className='flex font-medium cursor-pointer  max-lg:hidden'>
                <Link text="Shop" />
                <Link text="Account" />
                <Link text="Menu" />
            </ul>
            <ul className='flex font-medium cursor-pointer lg:hidden bg-secondaryColor rounded'>
                <Link text="Menu" />
            </ul>
        </div>
    )
}

export default Navmenu
