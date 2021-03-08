import React from 'react';

// Import SVGs
import GatsbySVG from '../images/Gatsby_Monogram_Black.svg';
import ReactSVG from '../images/React-icon.svg';
import NodeSVG from '../images/Nodejs_logo.svg';
import TailwindSVG from '../images/Tailwind.svg';
import FastForwardSVG from '../images/fast-forward.svg'


const skills = [
    {
        name: 'Fast & Secure',
        description: 'All websites are built with Gatsby.js, a static site generator that produces fortified websites with next-gen speed optimization.'
    },
    {
        name: 'Content Management',
        description: 'Want the power to add blogs, update your team, and more? Content management is added with the website for easy adjustment.'
    },
    {
        name: 'Online Presence',
        description: 'Analytics tracking and SEO optionally included. Rank highly on search engines and see tracking data using Google Analytics.'
    }
];

export default function Home() {
    return (
        <div>

            <div className="w-full bg-black sm:flex p-2 sm:p-8">
                {skills.map((x) => {
                    return(
                    <div className="mx-8 my-8  sm:w-4/12">
                        <div className="p">
                            <div className="flex align-middle justify-start sm:justify-center my-2">
                                <h4 className="text-white sm:inline mr-4">{x.name}</h4>
                                <FastForwardSVG className="w-4 h-7 inline nextSVG" />
                            </div>
                            <p className="text-white opacity-80 text-left  sm:block">{x.description}</p>
                        </div>
                    </div>
                )})}
            </div>

            {/* Section 3 */}
            {/* <div className="w-full bg-gradient-to-r from-blue-400 to-purple-600 grid grid-cols-2 p-20"> */}
            <div className="w-full bg-white py-10 p-4 sm:p-20 sm:flex">

                <div className="m-auto text-center mb-10">
                    <h2 className="">Get Started Today</h2>

                    <p className="mb-4">Upgrade to the newest and fastest tech stacks seamlessly.</p>

                    {/* Tech SVG Section */}
                    {/* <div className="flex justify-start items-end"> */}
                    <div className="flex justify-center">
                        <GatsbySVG className="h-8 w-8  my-2 mx-4" />
                        <ReactSVG className="h-8 my-2 mx-4" />
                        <NodeSVG className="h-8 m-auto my-2 mx-4" />
                        <TailwindSVG className="h-8 w-8 m-auto my-2 mx-4" />
                    </div>

                    <a href="http://localhost:8000/inquiry"><button className="button">Get Started</button></a>
                </div>
            </div>
        </div>
    )
}
