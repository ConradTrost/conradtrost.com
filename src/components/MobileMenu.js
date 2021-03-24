import React from 'react';

import CloseMenuSVG from '../images/letter-x.svg';

export default function Navbar(props) {

    return (
        <div>
            <div className="flex align-middle mobMenu">
                <div className="bg-black w-full h-screen absolute top-0 bottom-0 right-0 m-0 z-50" id="mobMenu">
                    <CloseMenuSVG fill="#fff" stroke="#fff" width="26" className="z-50 transition-transform transform rotate-90 duration-1000 m-2" onClick={props.handleClick} />   
                    <ul className='flex justify-around p-4 flex-col text-right mt-14'>
                        <li className="m-4"><a href="https://trost.dev" className="text-4xl ml-2 text-white">Portfolio</a></li>
                        <li className="m-4"><a href="/blog" className="text-4xl ml-2 text-white">Blog</a></li>
                        <li className="m-4"><a href="/inquiry" className="text-4xl ml-2 text-white">Contact</a></li>
                    </ul>      
                </div>        
            </div>
        </div>
    )
}
