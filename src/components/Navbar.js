import React, { useState, useEffect } from 'react';

import MenuSVG from '../images/menu.svg';
import MobileMenu from './MobileMenu';
import Menu from './Menu';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    const [sizer, setSizer] = useState(true);
    
    const menuToggle = () => {
        var mobMenu = document.querySelector('#mobMenu');
        if (menu === true) {
            setMenu(false);
            mobMenu.classList.remove('animate-menu');
            mobMenu.classList.add('close-menu');
        } else {
            setMenu(true);
            mobMenu.classList.remove('close-menu');
            mobMenu.classList.add('animate-menu');
        }
    }

    const changeWindowSize = () => {
        if (window.innerWidth > 640) {
            setSizer(false);
        } else {
            setSizer(true);
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            changeWindowSize();
            window.addEventListener('resize', changeWindowSize);
          }
        return() => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', changeWindowSize);
              }
        }
    }, [])

    return (
        <div className="flex justify-between p-2 sm:px-12 text-primary-text items-center left-0 z-50 fixed right-0 top-0 bg-white">
            <div>
                <a href="/">
                    <p className="navbar-brand flex text-2xl text-black">Conrad Trost</p>
                    <p className="navbar-subBrand opacity-70 text-xs text-black">Freelance Web Developer</p>
                </a>
            </div>
            <div className="flex align-middle">
                {sizer ? <button onClick={menuToggle} aria-label="open-menu" className="m-2 menu-toggle"><MenuSVG className="w-10" /></button> : ''}
                {sizer ? <MobileMenu handleClick={menuToggle} /> : <Menu /> }
            </div>
        </div>
    )
};
