import React, { useState } from 'react';

import MenuSVG from '../images/menu.svg';

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
        <div className="flex justify-between py-2 px-2 sm:px-12 text-primary-text items-center  relative top-0 left-0">
            <div>
                <a href="/">
                    <p className="navbar-brand flex text-2xl">Conrad Trost</p>
                    <p className="navbar-subBrand opacity-70 text-xs">Freelance Web Developer</p>
                </a>
            </div>
            <div className="flex align-middle">
                <button onClick={menuToggle} className="m-2 sm:hidden"><MenuSVG className="w-10" /></button>
                <div className=" sm:p-0 absolute border right-0 top-10 rounded m-6 bg-white z-50 sm:border-none sm:m-0 sm:static sm:bg-transparent">
                    <ul className={
                        menu ? 'block p-4' : 'hidden sm:block'
                        }>
                        <li className="block sm:inline m-2 sm:m-0"><a href="/app/github" className="border-b border-transparent transform duration-500 hover:border-black inline text-2xl mx-2">Repos</a></li>
                        <li className="block sm:inline m-2 sm:m-0"><a href="https://trost.dev" className="border-b border-transparent transform duration-500 inline text-2xl ml-2 hover:border-black">Portfolio</a></li>
                        <li className="block sm:inline m-2 sm:m-0"><a href="/inquiry" className="border-b border-transparent transform duration-500 inline text-2xl ml-2 hover:border-black">Contact</a></li>
                    </ul>      
                </div>        
            </div>
        </div>
    )
}
