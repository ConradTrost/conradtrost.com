import React from 'react'

import HeroSVG from '../images/hero-svg.svg';

export default function Hero() {
    return (
        <div className="sm:h-4/6 bg-white w-full flex py-10 p-10 sm:p-10 overflow-hidden z-10">
            <div className="z-10 sm:w-8/12">
                <h1><span className="z-10 underline">Develop</span> Your Online Presence.</h1>
                <h3 className="z-10">Secure, Responsive, and Modern Websites<br />Customized for your needs.</h3>
                <a href="http://conradtrost/inquiry"><button className="w-full sm:w-auto my-6 rounded  button transform hover:scale-105 z-10">Get in Touch</button></a>
            </div>

                <HeroSVG className="heroSVG w-4/12 hidden sm:inline z-0" />
        </div>  
    )
}
