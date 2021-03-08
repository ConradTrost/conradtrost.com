import React, { useState } from 'react';

import MenuSVG from '../images/menu.svg';
import CloseMenuSVG from '../images/letter-x.svg';

export default function Navbar() {
    const [menu, setMenu] = useState(false);
    
    const menuToggle = () => {
        if (menu == true) {
            setMenu(false);
        } else {
            setMenu(true);
        }
    }

    return (
        <div className="flex justify-between py-2 px-2 sm:px-12 text-primary-text items-center relative top-0 left-0">
            <div>
                <a href="/">
                    <p className="navbar-brand flex text-2xl">Conrad Trost</p>
                    <p className="navbar-subBrand opacity-70 text-xs">Freelance Web Developer</p>
                </a>
            </div>
            <div className="flex align-middle">
                {menu ? <button onClick={menuToggle} className="m-2 sm:hidden"><CloseMenuSVG className="CloseMenu w-6 h-6 " /></button> : <button onClick={menuToggle} className="m-2 sm:hidden"><MenuSVG className="w-10" /></button>}
                <div className="transform duration-400 w-full sm:p-0 absolute border left-0 top-20 rounded m-0 bg-white z-50 sm:border-none sm:m-0 sm:static sm:bg-transparent">
                    <ul className={
                        menu ? 'flex justify-around p-4' : 'hidden sm:block'
                        }>
                        <li className="inline m-2"><a href="https://trost.dev" className="border-b border-transparent transform duration-500 inline text-2xl ml-2 hover:border-black">Portfolio</a></li>
                        <li className="inline m-2"><a href="/inquiry" className="border-b border-transparent transform duration-500 inline text-2xl ml-2 hover:border-black">Contact</a></li>
                    </ul>      
                </div>        
            </div>
        </div>
    )
}
