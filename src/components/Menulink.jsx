import React from 'react'
import Link from './Link';

function Menulink() {
    return (
        <div className='hidden lg:flex'>
            <ul className='flex font-medium cursor-pointer max-w-fit'>
                <Link text="Model S" />
                <Link text="Model 3" />
                <Link text="Model X" />
                <Link text="Model Y" />
                <Link text="Solar Roof" />
                <Link text="Solar Panels" />
            </ul>
        </div >
    )
}

export default Menulink