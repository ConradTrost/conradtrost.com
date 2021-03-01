import React from 'react'

import HeroSVG from '../images/hero-svg.svg';

export default function Hero() {
    return (
        <div className="h-96 bg-white w-full flex p-20 overflow-hidden">
            <div className="w-8/12">
                <h1><span className="underline">Develop</span> Your Online Presence.</h1>
                <h3>Secure, Responsive, and Modern Websites<br />Customized for your needs.</h3>
                <button className="rounded  button transform hover:scale-105">Get in Touch</button>
            </div>

                <HeroSVG className="heroSVG w-4/12" />
        </div>  
    )
}
