import React from 'react'
import Menulink from './Menulink';
import Navmenu from './Navmenu';
import logo from './../../src/logo.svg';

function Header() {
    return (
        <div className='z-50 bg-transparent fixed top-0 h-14 w-full flex flex-row justify-between items-center px-2 md:px-10 text-darkColor'>
            <img src={logo} alt="logo" className='h-3 cursor-pointer' />
            <Menulink />
            <Navmenu />
        </div>
    )
}

export default Header