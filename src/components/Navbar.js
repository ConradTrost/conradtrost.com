import React, { useState } from 'react';

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

    window.addEventListener('resize', changeWindowSize);

    return (
        <div className="flex justify-between py-2 px-2 sm:px-12 text-primary-text items-center relative top-0 left-0 mb-4">
            <div>
                <a href="/">
                    <p className="navbar-brand flex text-2xl">Conrad Trost</p>
                    <p className="navbar-subBrand opacity-70 text-xs">Freelance Web Developer</p>
                </a>
            </div>
            <div className="flex align-middle">
                {sizer ? <button onClick={menuToggle} aria-label="open-menu" className="m-2"><MenuSVG className="w-10" /></button> : ''}
                {console.log(changeWindowSize)}
                {sizer ? <MobileMenu handleClick={menuToggle} /> : <Menu /> }
            </div>
        </div>
    )
}
