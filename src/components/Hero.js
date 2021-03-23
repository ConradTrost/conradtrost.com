import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {
    return (
        <div className="sm:h-4/6 bg-white sm:w-11/12 sm:m-auto md:flex p-10 sm:pt-0 overflow-hidden z-10 sm:overflow-visible items-center">
            <div className="z-10 md:w-7/12">
                <h1><span className="z-10 underline">Develop</span> Your Online Presence.</h1>
                <h2 className="z-10 text-gray-800">Secure, Responsive, and Modern Websites<br />Customized for your needs.</h2>
                <a href="/inquiry"><button className="w-full sm:w-auto button z-10 text-white" aria-label="contact">Get in Touch</button></a>
            </div>

            <div className="hidden sm:block sm:w-5/12">
                <StaticImage src="../images/11.png"
                    placeholder="blurred"
                    alt=""
                    layout="fixed" 
                    width={600} 
                    height={600} 
                />
            </div>
        </div>
    )
}
