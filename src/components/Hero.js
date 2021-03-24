import React, { useEffect, useState } from 'react';
import { StaticImage } from "gatsby-plugin-image";

export default function Hero() {

    return (
        <div className="bg-white sm:w-11/12 sm:m-auto p-10 sm:p-6 overflow-hidden sm:overflow-visible flex items-center h-screen relative">
            <div className="z-10 md:w-7/12 items-center content-center">
                <h1>Take Your Business <br />to the <span className="underline">Next Level</span>.</h1>
                <h2 className="z-10 text-gray-800 subheader">Let's grow your company with a secure, fast, and visually appealing website.</h2>
                <a href="/inquiry"><button className="w-full sm:w-auto button z-10 bg-gradient-to-br from-yellow-500 to-red-600 via-red-500 text-white sm:px-6" aria-label="contact">Get in Touch</button></a>
            </div>

            <div className="absolute sm:static bottom-10 opacity-10 sm:opacity-100 z-0 sm:w-5/12  sm:mt-10">
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
