import React from 'react'

export default function Navbar() {
    return (
        <div className="flex justify-between py-2 px-12 text-primary-text items-center  relative top-0 left-0">
            <div>
                <a href="/" className="navbar-brand flex text-2xl">Conrad Trost</a>
                <p className="navbar-subBrand opacity-70 text-xs">Freelance Web Developer</p>
            </div>
            <div>
                <a href="/app/github" className="flex text-2xl">Repos</a>
            </div>
        </div>
    )
}
