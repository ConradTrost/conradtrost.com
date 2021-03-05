import React from 'react';

// Import SVGs
import GatsbySVG from '../images/Gatsby-Logo.svg';
import ReactSVG from '../images/React-icon.svg';
import NodeSVG from '../images/Nodejs_logo.svg';
import TailwindSVG from '../images/Tailwind-Logo.svg';
import FastForwardSVG from '../images/fast-forward.svg'


const skills = [
    {
        name: 'Gatsby.js',
        level: 6,
        url: 'https://gatsbyjs.com/',
        description: 'A static-site generator used to create fast and secure websites with pre-populated information.'
    },
    {
        name: 'React.js',
        level: 7,
        url: 'https://reactjs.com/',
        description: 'Used to create quick, component-based, dynamic web apps that only loads the components necessary.'
    },
    {
        name: 'SEO',
        description: 'Adept at Google Tracking and Search Engine Optimization.'
    }
];

export default function Home() {
    return (
        <div>

            <div className="w-full bg-black flex p-8">
                {skills.map((x) => {
                    return(
                    <div className="mx-8 w-4/12">
                        <div className="w-full p">
                            <div className="flex align-middle justify-center">
                                <h4 className="text-white inline mr-4">{x.name}</h4>
                                <FastForwardSVG className="w-4 inline nextSVG" />
                            </div>
                            <p className="text-white opacity-80 text-center">{x.description}</p>
                        </div>
                    </div>
                )})}
            </div>

            {/* Section 3 */}
            {/* <div className="w-full bg-gradient-to-r from-blue-400 to-purple-600 grid grid-cols-2 p-20"> */}
            <div className="w-full bg-white p-20 flex">

                <div className="m-auto text-center">
                    <h2 className="">Get Started Today</h2>

                    <p className="mb-4">Upgrade to the newest and fastest tech stacks seamlessly.</p>

                    {/* Tech SVG Section */}
                    {/* <div className="flex justify-start items-end"> */}
                    <div className="flex">
                        <GatsbySVG className="h-8 mr-4" />
                        <ReactSVG className="h-8 mx-4" />
                        <NodeSVG className="h-8 mx-4" />
                        <TailwindSVG className="h-6 mx-4" />
                    </div>

                    <button className="button">Get Started</button>
                </div>
            </div>
        </div>
    )
}
