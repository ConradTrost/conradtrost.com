import React from 'react'

export default function Navbar() {
    return (
        <div className="flex justify-between py-2 px-12 text-primary-text items-center  relative top-0 left-0">
            <div>
                <a href="/">
                    <p className="navbar-brand flex text-2xl">Conrad Trost</p>
                    <p className="navbar-subBrand opacity-70 text-xs">Freelance Web Developer</p>
                </a>
            </div>
            <div className="flex align-middle">
                <a href="/app/github" className="border-b border-transparent transform duration-500 hover:border-black inline text-2xl mx-2">Repos</a>
                <a href="https://trost.dev" className="border-b border-transparent transform duration-500 inline text-2xl ml-2 hover:border-black">Portfolio</a>
            </div>
        </div>
    )
}
